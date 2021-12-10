import React, { useState } from "react";
import { useChatContext } from "stream-chat-react";
import "./create-channel.css";
const CreateChannel = ({ onClose }) => {
  const { client, setActiveChannel } = useChatContext();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const createChannel = (e) => {
    e.preventDefault();

    const channelId = name.replace(/\s/g, "-").toLowerCase();

    const channel = client.channel("team", channelId, {
      name,
      image,
      desc,
      members: [client.user.id],
    });

    setActiveChannel(channel);
    onClose();
  };
  return (
    <form
      onSubmit={createChannel}
      style={{
        border: "1px solid #999",
        maxWidth: "500px",
        margin: "50px auto",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <div className="input-group">
        <label htmlFor="name">Channel Name</label>
        <input id="name" onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="input-group">
        <label htmlFor="image">Channel Image URL</label>
        <input id="image" onChange={(e) => setImage(e.target.value)} />
      </div>
      <div className="input-group">
        <label htmlFor="desc">Channel Description</label>
        <input id="desc" onChange={(e) => setDesc(e.target.value)} />
      </div>
      <div className="submit">
        <button type="submit">Create channel</button>
      </div>
    </form>
  );
};

export default CreateChannel;
