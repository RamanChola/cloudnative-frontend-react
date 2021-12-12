export const node = {
	title: "Node Quiz",

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
							html: "<article class='intro'>    <h1 class='intro__heading intro__heading--income title'>                     Node.js Development Quiz              </h1>    <div class='intro__body wysiwyg'>       <p> You are about to start quiz which contains questions related to web development. </p>   <p>You have 30 seconds for every page and 60 seconds for the whole survey of 3 questions.</p>  <p>Please click on <b>'Start Quiz'</b> button when you are ready.</p>  </div> </article>",
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
					title:
						"Which of the following information is captured by database profiler?",
					choices: [
						"Read operations",
						"Write operations",
						"Cursor Operations",
						"All of the above",
					],
					correctAnswer: "Read operations",
				},
			],
		},
		{
			navigationTitle: "Question 2",
			questions: [
				{
					type: "radiogroup",
					// name: "keywords",
					title:
						"Which of the following command is used to start a REPL session?",
					choicesOrder: "random",
					choices: ["$ node", "$ node start", "$ node repl", "$ node console"],
					correctAnswer: "$ node",
				},
			],
		},
		{
			navigationTitle: "Question 3",
			questions: [
				{
					type: "radiogroup",
					// name: "magnacarta",
					title:
						"Which of the following command is used to install the Node.js express module?",
					choicesOrder: "random",
					choices: [
						"$ npm install express",
						"$ node install express",
						"$ install express",
						"None of the above",
					],
					correctAnswer: "$ npm install express",
				},
			],
		},
		{
			navigationTitle: "Question 4",
			questions: [
				{
					type: "radiogroup",
					// name: "magnacarta",
					title: "The Node.js modules can be exposed using:",
					choicesOrder: "random",
					choices: ["expose", "module", "exports", "none of the mentioned"],
					correctAnswer: "exports",
				},
			],
		},
		{
			navigationTitle: "Question 5",
			questions: [
				{
					type: "radiogroup",
					// name: "magnacarta",
					title:
						"Which of the following method of fs module is used to get file information?",
					choicesOrder: "random",
					choices: [
						"fs.open(path, flags[, mode], callback)",
						"fs.stat(path, callback)",
						"fs.readFile(path, flags[, mode], callback)",
						"None of the above",
					],
					correctAnswer: "fs.stat(path, callback)",
				},
			],
		},
		{
			navigationTitle: "Question 6",
			questions: [
				{
					type: "radiogroup",
					// name: "magnacarta",
					title:
						"Which of the following code print the platform of operating system?",
					choicesOrder: "random",
					choices: [
						"console.log('platform : ' + os.platform);",
						"console.log('platform : ' + os.platform());",
						"console.log('platform : ' + os.getPlatform());",
						"None of the above",
					],
					correctAnswer: "console.log('platform : ' + os.platform());",
				},
			],
		},
	],
	completedHtml:
		"<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>",
};
