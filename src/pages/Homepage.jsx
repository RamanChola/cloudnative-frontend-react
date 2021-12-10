import React from "react";
import Navbar from "./components/Navbar";
import "react-datepicker/dist/react-datepicker.css";
import "./homepage.css";
import { useHistory } from "react-router-dom";
import { AuthContext } from "./Auth/auth-context";

const Homepage = () => {
  const history = useHistory();
  const auth = React.useContext(AuthContext);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Navbar />
      <div>
      Welcome To the Homepage
      </div>
      
    </div>
  );
};

export default Homepage;
