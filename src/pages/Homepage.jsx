import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "react-datepicker/dist/react-datepicker.css";
import "./homepage.css";
import { useHistory } from "react-router-dom";
import { AuthContext } from "./Auth/auth-context";

import "survey-react/survey.css";
import * as Survey from "survey-react";

// import { questions } from "./Questions/questions";
import { html } from "./Questions/HTMLQuiz";
import { css } from "./Questions/CSSQuiz";
import { javascript } from "./Questions/JavaScriptQuiz";
import { mongodb } from "./Questions/MongoDBQuiz";
import { node } from "./Questions/NodeQuiz";
import { react } from "./Questions/ReactQuiz";

import { display, margin, textAlign } from "@mui/system";

const Homepage = () => {
  const history = useHistory();
  const auth = React.useContext(AuthContext);

  const [quizType, setQuizType] = useState(javascript);

  // Survey.StylesManager.applyTheme("bootstrapmaterial");

  var defaultThemeColors = Survey.StylesManager.ThemeColors["default"];
  defaultThemeColors["$main-color"] = "#7ff07f";
  defaultThemeColors["$main-hover-color"] = "#6fe06f";
  defaultThemeColors["$header-color"] = "#7ff07f";
  defaultThemeColors["$text-color"] = "#4a4a4a";
  defaultThemeColors["$header-background-color"] = "#4a4a4a";
  defaultThemeColors["$body-container-background-color"] = "#f8f8f8";

  Survey.StylesManager.applyTheme();

  var myCss = {
    matrix: {
      root: "table table-striped",
    },
    navigationButton: "button btn-sm",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "20px 10px",
        gap: "20px",
      }}
    >
      <Navbar />
      <div
        style={{
          textAlign: "center",
          margin: "10px",
        }}
      >
        {/* <h1>Welcome To the Homepage</h1> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            // margin: "10px",
            gap: "25px",
            textAlign: "center",
            color: "black",
          }}
        >
          <button
            style={{
              color: "black",
              border: "1px solid grey",
              padding: "15px",
              boxShadow: " 0 0 0 1px grey",
              borderRadius: "5%",
            }}
            onClick={() => setQuizType(html)}
          >
            html
          </button>
          <button
            style={{
              color: "black",
              border: "1px solid grey",
              padding: "15px",
              boxShadow: " 0 0 0 1px grey",
              borderRadius: "5%",
            }}
            onClick={() => setQuizType(css)}
          >
            css
          </button>
          <button
            style={{
              color: "black",
              border: "1px solid grey",
              padding: "15px",
              boxShadow: " 0 0 0 1px grey",
              borderRadius: "5%",
            }}
            onClick={() => setQuizType(javascript)}
          >
            javascript
          </button>
          <button
            style={{
              color: "black",
              border: "1px solid grey",
              padding: "15px",
              boxShadow: " 0 0 0 1px grey",
              borderRadius: "5%",
            }}
            onClick={() => setQuizType(mongodb)}
          >
            mongodb
          </button>
          <button
            style={{
              color: "black",
              border: "1px solid grey",
              padding: "15px",
              boxShadow: " 0 0 0 1px grey",
              borderRadius: "5%",
            }}
            onClick={() => setQuizType(node)}
          >
            node
          </button>
          <button
            style={{
              color: "black",
              border: "1px solid grey",
              padding: "15px",
              boxShadow: " 0 0 0 1px grey",
              borderRadius: "5%",
            }}
            onClick={() => setQuizType(react)}
          >
            react
          </button>
        </div>
      </div>
      <div className="container">
        <Survey.Survey json={quizType} css={myCss} />
        {/* <div className=''> */}
        {/* Click the button below and say What can I do here ?</div> */}
      </div>
    </div>
  );
};

export default Homepage;
