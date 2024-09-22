import React, { useState } from "react";
import LeftSidebar from "../../Components/LeftSideBar";
import Display from "../../Components/Display";
import RightSideBar from "../../Components/RightSideBar";
import "./index.css";

const WorkingPage = () => {
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(true);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(true);

  return (
    <div className="app">
      <div className={`left-sidebar ${leftSidebarOpen ? "open" : "closed"}`}>
        <LeftSidebar toggle={() => setLeftSidebarOpen(!leftSidebarOpen)} />
      </div>
      <div className="Display">
        <Display />
      </div>
      <div className={`right-sidebar ${rightSidebarOpen ? "open" : "closed"}`}>
        <RightSideBar toggle={() => setRightSidebarOpen(!rightSidebarOpen)} />
      </div>
    </div>
  );
};

export default WorkingPage;