import React, { useEffect, useState } from "react";
import { upload } from "@spheron/browser-upload";
import { getDataVaultContract } from "../../helper/DataVaultSmartContract";
import { Contract } from "ethers";
import { web3ConnectionAtom } from "../../atoms/web3Connection";
import { useAtom } from "jotai";
import {
  Modal,
  Group,
  Button,
  TextInput,
  Badge,
  Switch,
  rem,
  createStyles,
  Text,
} from "@mantine/core";
import {
  IconCheck,
  IconDatabase,
  IconDownload,
  IconX,
} from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { FileUploadProcessModel } from "./FileUploadProcessModel";
import { refeshDataAtom } from "../../atoms/refreshData";
import { getEncryptedMsg, getFileUploadToken } from "../../helper/ApiCalls";
import {
  decryptFile,
  advanceEncryptFile,
  getEncryptionPublicKey,
  zipFile,
} from "../../helper/Utils";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import { IconCloudUpload } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    marginBottom: rem(30),
  },

  dropzone: {
    borderWidth: rem(1),
    paddingBottom: rem(50),
  },

  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[4],
  },

  control: {
    position: "absolute",
    width: rem(250),
    left: `calc(50% - ${rem(125)})`,
    bottom: rem(-20),
  },
}));

interface FileType {
  lastModified: number;
  lastModifiedDate: string;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}

export default function FileUpload() {
  const [uploadingFile, setUploadingFile] = useState<boolean>(false);
  const [web3ConnectionData, setWeb3ConnectionData] =
    useAtom(web3ConnectionAtom);
  const [opened, { open, close }] = useDisclosure(false);
  const [refreshData, setRefreshData] = useAtom(refeshDataAtom);
  const [fileName, setFileName] = useState<string>("");
  const [uploadingProcessCount, setUploadingProcessCount] = useState<number>(0);
  const [checkedAdvanceEncryption, setCheckedAdvanceEncryption] =
    useState(false);
  const { classes, theme } = useStyles();

  const [fileUploaded, setFileUploaded] = useState<File | null | FileType>({
    lastModified: 0,
    lastModifiedDate: "",
    name: "",
    size: 0,
    type: "",
    webkitRelativePath: "",
  });

  async function uploadFileOnIPFS(file: File, fileName: string) {
    const token = await getFileUploadToken();
    console.log(token);
    const _file = new File([file], fileName);
    console.log(_file);
    let currentlyUploaded = 0;
    return await upload([_file], {
      token,
      onChunkUploaded: (uploadedSize, totalSize) => {
        currentlyUploaded += uploadedSize;
      },
    });
    console.log(currentlyUploaded);
  }

  async function handleUploadFile() {
    if (!fileUploaded) return;
    open();
    setUploadingFile(true);
    try {
      setUploadingProcessCount(0);
      let _file: File | FileType = fileUploaded;
      let fileUploadName: string =
        fileName + "." + _file.name.split(".").at(-1);
      let fileIPFSHash: string;
      let decryptKey: string;
      let advanceEncryptionStatus: boolean = checkedAdvanceEncryption;

      const _pEK: string =
        web3ConnectionData.encryptionPublicKey.length > 0
          ? web3ConnectionData.encryptionPublicKey
          : await getEncryptionPublicKey(web3ConnectionData.walletAddress);
      setWeb3ConnectionData({
        ...web3ConnectionData,
        encryptionPublicKey: _pEK,
      });

      if (advanceEncryptionStatus) {
        const { key, encryptedFile } = await advanceEncryptFile(_file as Blob);
        setUploadingProcessCount(1);
        const uploadResult = await uploadFileOnIPFS(
          encryptedFile as File,
          fileUploadName
        );
        decryptKey = await getEncryptedMsg(key, _pEK);
        fileIPFSHash = uploadResult.protocolLink;
      } else {
        const uploadResult = await uploadFileOnIPFS(
          _file as File,
          fileUploadName
        );
        console.log(uploadResult);
        decryptKey = "";
        setUploadingProcessCount(1);
        console.log(uploadResult.protocolLink);
        fileIPFSHash = await getEncryptedMsg(uploadResult.protocolLink, _pEK);
        console.log(fileIPFSHash);
      }
      setUploadingProcessCount(2);
      await uploadFileOnSmartContract(
        advanceEncryptionStatus,
        fileUploadName,
        fileIPFSHash,
        decryptKey
      );
    } catch (error) {
      console.log(error);
    } finally {
      setUploadingFile(false);
      close();
    }
    // ------------- for uploading file in backend--------------
    // const formData = new FormData()
    // formData.append('userfile', _file)
    // const responseUpload = await fetch(`http://localhost:8000/api/v1/uploadFileToIPFS`, { method: "POST", body: formData }); // from step 1
    // const dataRes = await responseUpload.json();
  }

  async function uploadFileOnSmartContract(
    advanceEncryptionStatus: boolean,
    _name: string,
    fileHash: string,
    decryptKey: string
  ) {
    try {
      const dataVault: Contract = getDataVaultContract();
      const _addFileOfUser = await dataVault.addFileOfUser({
        advanceEncryptionStatus,
        fileName: _name,
        fileHash,
        decryptKey,
      });
      setUploadingProcessCount(3);

      const addedfile = await _addFileOfUser.wait();
      setUploadingProcessCount(4);
      setRefreshData({ ...refreshData, fileStatus: !refreshData.fileStatus });
    } catch (error: any) {
      console.log(error);
      console.log(error?.message);
    }
  }

  async function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    let _file: File | null = e.target.files && e.target.files[0];
    setFileUploaded(_file);
    setFileName(_file?.name?.split(".").slice(0, -1).join(".") as string);

    // encriptDecrypt(_file as File);

    // let reader = new FileReader();
    // reader.onloadend = () => {
    //   console.log("url",reader.result);
    // }
    // reader.readAsDataURL(file);
    // show basic details of file to user
    // name, size, type
  }

  function convertInMb(inByte: number): string {
    return (inByte / 1000).toFixed(3) + " KB";
  }

  return (
    <>
      <Modal
        size="xl"
        ta="center"
        opened={opened}
        onClose={close}
        title="Uploading Process"
        centered
      >
        <FileUploadProcessModel
          uploadingProcessCount={uploadingProcessCount}
          checkedAdvanceEncryption={checkedAdvanceEncryption}
        />
      </Modal>

      <h1 className="py-10 font-poppins text-4xl text-hash-light hover:text-primary-salmon">
        Upload file
      </h1>

      <Group position="center">
        <Switch
          checked={checkedAdvanceEncryption}
          onChange={(event) =>
            setCheckedAdvanceEncryption(event.currentTarget.checked)
          }
          color="red"
          size="md"
          thumbIcon={
            checkedAdvanceEncryption ? (
              <IconCheck size="0.8rem" color="indigo" stroke={3} />
            ) : (
              <IconX size="0.8rem" color="black" stroke={3} />
            )
          }
        />
        <p className="text-md text-success-seafoam">Advance Encryption"</p>
      </Group>
      <div className="text-xl font-medium text-hash-light">
        {checkedAdvanceEncryption ? (
          <p className="py-6 ">Encrypt the file and hash both</p>
        ) : (
          <p className="py-6 ">Encrypt the hash only</p>
        )}
      </div>

      {/* <FileInput handleFileUpload={handleFileUpload} /> */}
      {
        //TODO: DROPZONE
      }

      <label
        htmlFor="attach_files"
        className=" items-centercursor-pointer mr-10 mt-8 flex h-64 w-1/3 items-center  justify-center  rounded-lg border-2 border-primary-salmon  p-2 text-body-medium text-hash-light  transition-all hover:bg-dark-gray-100 hover:text-hash-dark"
      >
        <input
          onChange={handleFileUpload}
          multiple
          className="hidden"
          type="file"
          name="attach_files"
          id="attach_files"
          accept="*"
        />
        <div className="flex  flex-col items-center justify-center pb-2 pt-5">
          <svg
            aria-hidden="true"
            className="mb-3 h-10 w-10 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            ></path>
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            DOC, DOCX or PDF (MAX. 40 MB)
          </p>
        </div>
        {/* <span className="mr-2  text-xl">Select files</span> */}
      </label>

      {fileUploaded && fileUploaded?.size > 0 && (
        <>
          <label className="pb-3 pt-8 text-lg text-white">File Name</label>
          <TextInput
            type="text"
            placeholder="file Name"
            withAsterisk
            disabled={uploadingFile}
            value={fileName}
            size="md"
            onChange={(e) => {
              setFileName(e.target.value);
            }}
            style={{ color: "white" }}
          />
          <Badge mt="sm" radius="sm" color="violet">
            Size: {convertInMb(fileUploaded?.size)}
          </Badge>
        </>
      )}
      <br />
      <Button
        loading={uploadingFile}
        rightIcon={<IconDatabase />}
        onClick={handleUploadFile}
        disabled={!web3ConnectionData.connected || !Boolean(fileUploaded?.size)}
        variant="outline"
        size="lg"
        color="green"
        style={{ margin: "20px" }}
      >
        Upload File
      </Button>

      {!web3ConnectionData.connected && <p>Please connect wallet first</p>}
    </>
  );
}
