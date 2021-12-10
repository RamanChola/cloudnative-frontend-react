import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "./Auth/auth-context";
import Navbar from "./components/Navbar";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  Window,
  ChannelHeader,
  MessageInput,
  MessageList,
  ChannelList,
} from "stream-chat-react";
import styled from "styled-components";
import "stream-chat-react/dist/css/index.css";
import CustomChannelList from "./components/CustomChannelList";
import ChannelBody from "./components/ChannelBody";
import AddingChannel from "./components/AddingChannel/AddingChannel";

const Container = styled.div`
  display: flex;
  overflow: none;
  .left-column {
    width: 300px;
  }
  .right-column {
    flex: 1;
  }
`;

const API_KEY = process.env.REACT_APP_API_KEY;

const GroupChat = () => {
  const [chatClient, setChatClient] = useState(null);
  const [channel, setChannel] = useState(null);
  const [addingTeamChannel, setAddingTeamChannel] = useState(false);
  const auth = useContext(AuthContext);
  console.log(auth);
  useEffect(() => {
    async function initChat() {
      const client = StreamChat.getInstance(API_KEY);
      client.connectUser(
        {
          id: auth.userId,
          name: auth.username,
        },
        client.devToken(auth.userId)
      );
      const channel = client.channel("team", "general", {
        name: "General",
        image: "https://picsum.photos/id/195/200/300",
      });
      await channel.create();
      channel.addMembers([auth.userId]);
      setChannel(channel);
      setChatClient(client);
    }
    initChat();
    return () => {
      if (chatClient) chatClient.disconnectUser();
    };
  }, [auth.userId, auth.username]);

  if (!chatClient || !channel) {
    return <></>;
  }

  return (
    <>
      <Navbar disconnectUser={() => chatClient.disconnectUser()} />
      <Chat client={chatClient} theme={"messaging light"}>
        <Container>
          <div className="left-column">
            <CustomChannelList onClickAdd={() => setAddingTeamChannel(true)} />
          </div>
          <div className="right-column">
            <Channel>
              {addingTeamChannel ? (
                <AddingChannel onClose={() => setAddingTeamChannel(false)} />
              ) : (
                <ChannelBody />
              )}
            </Channel>
          </div>
        </Container>
      </Chat>
    </>
  );
};

export default GroupChat;
