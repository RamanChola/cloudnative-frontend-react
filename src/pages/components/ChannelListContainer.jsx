import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  .loading-text {
    background: #333;
    padding: 20px;
    font-size: 14px;
  }
  .loading-text {
    color: #ccc;
  }
`;

const ChannelListContainer = ({ loading, children }) => {
  const loadingText = "Channels Loading ...";
  return (
    <Container>
      {loading ? <div className="loading-text">{loadingText}</div> : children}
    </Container>
  );
};

export default ChannelListContainer;
