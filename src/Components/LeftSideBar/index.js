import React from "react";
import "./index.css";

const LeftSidebar = ({ toggle }) => {
  const handleFileUpload = (event) => {
    // Handle file upload logic here
  };

  return (
    <div>
      <button onClick={toggle}>Back</button>
      <button onClick={handleFileUpload}>Upload File</button>
      <div className="history-chat">History Chat</div>
      <div className="user">User</div>
      <div className="settings">Settings</div>
    </div>
  );
};

export default LeftSidebar;