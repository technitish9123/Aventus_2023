import { Tabs } from "@mantine/core";
import { Link } from "react-router-dom";

export default function TabNavigation() {
  return (
    <Tabs defaultValue="Files">
      <Tabs.List style={{ alignItems: "center", justifyContent: "center" }}>
        <Link to="/">
          <Tabs.Tab value="Files">
            <span className="px-4 text-2xl  text-primary-salmon">Files</span>
          </Tabs.Tab>
        </Link>
        <Link to="/credentials">
          <Tabs.Tab value="Credentials">
            {" "}
            <span className="px-4 text-2xl  text-primary-salmon">
              Credentials
            </span>
          </Tabs.Tab>
        </Link>
        {/* <Tabs.Tab value="settings">Settings</Tabs.Tab>

                <Tabs.Tab value="account" ml="auto">
                    Account
                </Tabs.Tab> */}
      </Tabs.List>
    </Tabs>
  );
}
