import React, { useState } from "react";
import styled from "styled-components";
import BrowserChannels from "./BrowserChannels";
import CreateChannel from "./CreateChannel";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  .tabs {
    padding: 20px 0;
    border-bottom: 1px solid #333333;
    button {
      margin-left: 20px;
      margin-right: 20px;
      padding: 10px 20px;
      cursor: pointer;
      border: 1px solid #333333;
      &.active {
        background-image: url(https://i.pinimg.com/474x/67/d4/00/67d400eff9a3061de496f280c05b39bf.jpg);
        color: white !important;
        box-shadow: 0 1px 1px 0 red;
      }
    }
  }
`;
const TABS = [
  { name: "Browse", id: "browse" },
  { name: "Create", id: "create" },
];

const AddingChannel = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  return (
    <Container>
      <div className="tabs">
        {TABS.map((tab) => (
          <button
            className={activeTab === tab.id ? "active" : undefined}
            key={tab.id}
            style={{ color: "#ffffff" }}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.name}
          </button>
        ))}
        <button onClick={onClose} style={{ color: "#ffffff" }}>
          Close
        </button>
      </div>
      {activeTab === "browse" && <BrowserChannels onClose={onClose} />}
      {activeTab === "create" && <CreateChannel onClose={onClose} />}
    </Container>
  );
};

export default AddingChannel;
