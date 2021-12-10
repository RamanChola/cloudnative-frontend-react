import React from "react";
import { ChannelHeader, MessageInput, MessageList } from "stream-chat-react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;

  .str-chat-header-livestream {
    width: 100%;
    height: 50px;
  }

  .str-chat__list {
    height: 600px;
  }

  .str-chat__input-flat-wrapper {
    position: absolute;
    bottom: -5px;
    width: 100%;
  }
`;

const ChannelBody = () => {
  return (
    <Container>
      <ChannelHeader />
      <MessageList />
      <MessageInput />
    </Container>
  );
};

export default ChannelBody;
