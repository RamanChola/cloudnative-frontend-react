const ChannelItem = ({ onJoin, channel }) => {
  return (
    <div
      style={{
        display: "flex",
        border: "2px solid #000",
        backgroundColor:"transparent",
        backdropFilter: "blur(5px)",
        borderRadius: "10px",
        marginBottom: "20px",
        padding: "20px",
        marginLeft: "20px",
      }}
    >
      <div
        style={{
          width: "60px",
          height: "60px",
          overflow: "hiddenshadow",
          marginRight: "20px",
        }}
      >
        <img
          src={channel?.data?.image}
          style={{ width: "100%", height: "100%", objectFit: "cover",borderRadius: "50%" }}
          alt=""
        />
      </div>
      <div style={{ marginLeft: "20px"}}>
        <span style={{ color: "#fff", fontWeight: "bold"}}>
          {channel?.data?.name}
        </span>
        <p style={{color:"grey"}}>{channel?.data?.desc || "No description"}</p>
      </div>
      <button
        onClick={() => onJoin(channel?.id)}
        style={{
          width: "70px",
          height: "40px",
          border: "1px solid grey",
          padding: "10px",
          color: "#ffffff",
          marginLeft: "auto",
          "&:hover": {
            backroundColor: "#333",
            color: "white",
          },
        }}
      >
        Join
      </button>
    </div>
  );
};

export default ChannelItem;
