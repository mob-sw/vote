import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import BorderColorIconOutlined from "@mui/icons-material/BorderColorOutlined";
import TabPanel from "../Component/TabPanel";

function ViewAll() {
  return (
    <>
      <div calss="container">
        <KeyboardBackspaceIcon />
        <h5>전체보기</h5>
        <BorderColorIconOutlined />
      </div>
      <TabPanel />
    </>
  );
}

export default ViewAll;
