export const html = {
	title: "HTML Quiz",

	completeText: "Finish",
	pageNextText: "Continue",
	pagePrevText: "Previous",
	showProgressBar: "top",
	progressBarType: "buttons",
	showTimerPanel: "top",
	maxTimeToFinishPage: 30,
	maxTimeToFinish: 180,
	firstPageIsStarted: true,
	startSurveyText: "Start Quiz",
	pages: [
		{
			navigationTitle: "Start Quiz",

			elements: [
				{
					type: "panel",
					elements: [
						{
							type: "html",
							name: "quiz_intro",
							html: "<article class='intro'>    <h1 class='intro__heading intro__heading--income title'>                     HTML Quiz              </h1>    <div class='intro__body wysiwyg'>       <p> You are about to start quiz which contains questions related to web development. </p>   <p>You have 30 seconds for every page and 180 seconds for the whole survey of 6 questions.</p>  <p>Please click on <b>'Start Quiz'</b> button when you are ready.</p>  </div> </article>",
						},
					],
					name: "panel1",
				},
			],
		},
		{
			navigationTitle: "Question 1",
			questions: [
				{
					type: "radiogroup",
					// name: "HTML fullform",
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
			navigationTitle: "Question 2",
			questions: [
				{
					type: "radiogroup",
					// name: "keywords",
					title: "What is the correct syntax of doctype in HTML5?",
					choicesOrder: "random",
					choices: [
						"</doctype html>",
						"<doctype html>",
						"<doctype html!>",
						"<!doctype html>",
					],
					correctAnswer: "<!doctype html>",
				},
			],
		},
		{
			navigationTitle: "Question 3",
			questions: [
				{
					type: "radiogroup",
					// name: "magnacarta",
					title: "URL is ",
					choicesOrder: "random",
					choices: [
						"user’s address",
						"an attribute",
						"source code",
						"web address",
					],
					correctAnswer: "web address",
				},
			],
		},
		{
			navigationTitle: "Question 4",
			questions: [
				{
					type: "radiogroup",
					// name: "magnacarta",
					title: "404 HTTP error is generated due to",
					choicesOrder: "random",
					choices: [
						"on removing the newline character",
						"missing JavaScript file",
						"any missing file",
						"slow loading of the web page",
					],
					correctAnswer: "any missing file",
				},
			],
		},
		{
			navigationTitle: "Question 5",
			questions: [
				{
					type: "radiogroup",
					// name: "magnacarta",
					title: "What is the use of <hr/> tag in HTML?",
					choicesOrder: "random",
					choices: [
						"For making content appearance italics",
						"To create vertical rule between sections",
						"To create a line break",
						"To create horizontal rule between sections",
					],
					correctAnswer: "To create horizontal rule between sections",
				},
			],
		},
		{
			navigationTitle: "Question 6",
			questions: [
				{
					type: "radiogroup",
					// name: "magnacarta",
					title: "Which element is known as HTML plaintext element?",
					choicesOrder: "random",
					choices: ["<spacer>", "<noembed>", "<shadow>", " <plaintext>"],
					correctAnswer: " <plaintext>",
				},
			],
		},
	],
	completedHtml:
		"<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>",
};
