import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ChannelList, useChatContext } from "stream-chat-react";
import styled from "styled-components";
import ChannelListContainer from "./ChannelListContainer";
import "./customchannellist.css";

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
    <div className="custom-box">
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
    </div>
  );
};

export default CustomChannelList;
