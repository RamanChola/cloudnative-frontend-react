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

	const [quizType, setQuizType] = useState(html);

	// Survey.StylesManager.applyTheme("bootstrap");

	var defaultThemeColors = Survey.StylesManager.ThemeColors["default"];
	defaultThemeColors["$main-color"] = "#7ff07f";
	defaultThemeColors["$main-hover-color"] = "#6fe06f";
	defaultThemeColors["$text-color"] = "#4a4a4a";
	defaultThemeColors["$header-color"] = "#7ff07f";
	defaultThemeColors["$header-background-color"] = "#4a4a4a";
	defaultThemeColors["$body-container-background-color"] = "#f8f8f8";

	var myCss = {
		matrix: {
			root: "table my-custom-style",
		},
		navigationButton: "button btn-lg",
	};

	Survey.StylesManager.ThemeCss[".sv_default_css .my-custom-style"] =
		"background-color: $main-color; border: 5px solid $main-hover-color;";

	Survey.StylesManager.applyTheme();

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
				<h1>Welcome To the Homepage</h1>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						textAlign: "center",
						backgroundColor: "grey",
					}}
				>
					<button onClick={() => setQuizType(html)}>html</button>
					<button onClick={() => setQuizType(css)}>css</button>
					<button onClick={() => setQuizType(javascript)}>javascript</button>
					<button onClick={() => setQuizType(mongodb)}>mongodb</button>
					<button onClick={() => setQuizType(node)}>node</button>
					<button onClick={() => setQuizType(react)}>react</button>
				</div>
			</div>
			<div>
				<Survey.Survey json={quizType} css={myCss} />
			</div>
		</div>
	);
};

export default Homepage;
