import React from "react";
import FileUpload from "../components/Files/FileUpload";
import AllFiles from "../components/Files/AllFiles";

import "./pages.css";

export default function FilePage() {
  return (
    <div className=" min-h-[100vh] bg-hash-dark">
      <div className="uploadContainer">
        <FileUpload />
      </div>
      <div className="alltemsContainer">
        <AllFiles />
      </div>
    </div>
  );
}
