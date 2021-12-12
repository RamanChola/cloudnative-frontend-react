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

	Survey.StylesManager.applyTheme("bootstrap");

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
				<h1>Welcome To the Homepage</h1>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						textAlign: "center",
						backgroundColor: "black",
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
			<div className='main'>
				<Survey.Survey json={quizType} css={myCss} />
			</div>
		</div>
	);
};

export default Homepage;
