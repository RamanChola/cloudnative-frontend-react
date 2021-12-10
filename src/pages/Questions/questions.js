export const questions = {
	title: "Basic Web Development Questions",
	showProgressBar: "bottom",
	showTimerPanel: "top",
	maxTimeToFinishPage: 15,
	maxTimeToFinish: 45,
	firstPageIsStarted: true,
	startSurveyText: "Start Quiz",
	pages: [
		{
			questions: [
				{
					type: "html",
					html: "You are about to start quiz which contains questions related to web development. <br/>You have 30 seconds for every page and 60 seconds for the whole survey of 3 questions.<br/>Please click on <b>'Start Quiz'</b> button when you are ready.",
				},
			],
		},
		{
			questions: [
				{
					type: "radiogroup",
					name: "HTML fullform",
					title: "What does HTML stand for?",
					choices: [
						"Hyper Tag Markup Language",
						"Hyper Text Markup Language",
						"Hyperlinks Text Mark Language",
						"Hyperlinking Text Marking Language",
					],
					correctAnswer: "Hyper Text Markup Language",
				},
			],
		},
		{
			questions: [
				{
					type: "radiogroup",
					name: "keywords",
					title: "Which of these is a genuine tag keyword?",
					choicesOrder: "random",
					choices: ["Header", "Bold", "Body", "Image"],
					correctAnswer: "Bold",
				},
			],
		},
		{
			questions: [
				{
					type: "radiogroup",
					name: "magnacarta",
					title: "What does CSS stand for?",
					choicesOrder: "random",
					choices: [
						"Computing Style Sheet",
						"Creative Style System",
						"Cascading Style Sheet",
						"Creative Styling Sheet",
					],
					correctAnswer: "Cascading Style Sheet",
				},
			],
		},
	],
	completedHtml:
		"<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>",
};
