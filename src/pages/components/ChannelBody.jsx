import React from "react";
import { ChannelHeader, MessageInput, MessageList } from "stream-chat-react";
import styled from "styled-components";
import "./channelbody.css";

const ChannelBody = () => {
  return (
    <div className="channel-body">
      <ChannelHeader />
      <MessageList />
      <MessageInput />
    </div>
  );
};

export default ChannelBody;
