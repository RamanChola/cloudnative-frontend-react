import React from "react";
import Navbar from "./components/Navbar";
import "react-datepicker/dist/react-datepicker.css";
import "./homepage.css";
import { useHistory } from "react-router-dom";
import { AuthContext } from "./Auth/auth-context";

import "survey-react/survey.css";
import * as Survey from "survey-react";

import { questions } from "./Questions/questions";
import { display, margin, textAlign } from "@mui/system";

const Homepage = () => {
	const history = useHistory();
	const auth = React.useContext(AuthContext);

	Survey.StylesManager.applyTheme("bootstrap");

	var myCss = {
		matrix: {
			root: "table table-striped",
		},
		navigationButton: "button btn-lg",
	};

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "20px",
			}}
		>
			<Navbar />
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					width: "auto",
					margin: "10px 20px",
				}}
			>
				<div style={{ textAlign: "center", margin: "10px" }}>
					Welcome To the Homepage
				</div>
				<Survey.Survey json={questions} css={myCss} />
			</div>
		</div>
	);
};

export default Homepage;
