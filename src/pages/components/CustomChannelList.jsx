import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ChannelList, useChatContext } from "stream-chat-react";
import styled from "styled-components";
import ChannelListContainer from "./ChannelListContainer";

const Container = styled.div`
  height: 85vh;
  background-color: #333;
  position: absolute;
  z-index: 2;
  padding: 20px 10px;
  .header {
    display: "flex";
    justify-content: "space-between";
    align-items: "center";
    h2 {
      color: white;
      margin: 0 0 10px;
      font-size: 16px;
    }
    button {
      color: white;
      font-size: 20px;
      background: none;
      border: none;
      cursor: pointer;
    }
  }
  .str-chat {
    height: max-content;
    &.str-chat-channel-list {
      float: none;
    }
  }
  .channel-list {
    width: 100%;
    &__message {
      color: white;
    }
  }
`;

const randomStr = () => Math.random().toString(36).substring(7);

const CustomChannelList = ({ onClickAdd }) => {
  const { client } = useChatContext();
  const [channelListKey, setChannelListKey] = useState(randomStr());
  const filter = {
    members: { $in: [client.user.id] },
  };

  useEffect(() => {
    client.on("member.added", () => {
      setChannelListKey(randomStr());
    });
  }, []);

  return (
    <Container>
      <div
        className="header"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2>Channels</h2>
        <button
          onClick={onClickAdd}
          style={{
            backgroundColor: "#000",
            borderRadius: "50%",
            marginBottom: "5px",
          }}
        >
          +
        </button>
      </div>

      <ChannelList
        ket={channelListKey}
        list={(listProps) => <ChannelListContainer {...listProps} />}
        filters={filter}
      />
    </Container>
  );
};

export default CustomChannelList;
