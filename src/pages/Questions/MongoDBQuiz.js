export const mongodb = {
	title: "MongoDB Quiz",

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
							type: "mongoDB",
							name: "quiz_intro",
							html: "<article class='intro'>    <h1 class='intro__heading intro__heading--income title'>                     mongoDB Development Quiz              </h1>    <div class='intro__body wysiwyg'>       <p> You are about to start quiz which contains questions related to web development. </p>   <p>You have 30 seconds for every page and 180 seconds for the whole survey of 6 questions.</p>  <p>Please click on <b>'Start Quiz'</b> button when you are ready.</p>  </div> </article>",
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
					title: "Which of the following language is MongoDB written in?",
					choices: ["Javascript", "C", "C++", "All of the above"],
					correctAnswer: "All of the above",
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
						"MongoDB has been adopted as ________ software by a number of major websites and services.",
					choicesOrder: "random",
					choices: [
						"frontend",
						"backend",
						"proprietary",
						"All of the mentioned",
					],
					correctAnswer: "backend",
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
						"With ________ MongoDB supports a complete backup solution and full deployment",
					choicesOrder: "random",
					choices: ["MMS", "AMS", "CMS", "DMS"],
					correctAnswer: "MMS",
				},
			],
		},
		{
			navigationTitle: "Question 4",
			questions: [
				{
					type: "radiogroup",
					// name: "magnacarta",
					title:
						"The ________ command returns information regarding the number of open",
					choicesOrder: "random",
					choices: [
						"connPoolStats",
						"connStats",
						"serverstats",
						"none of the mentioned",
					],
					correctAnswer: "connPoolStats",
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
						"________ do not typically provide sufficient performance to support a MongoDB deployment.",
					choicesOrder: "random",
					choices: ["RAID-5", "RAID-10", "RAID-7", "None of the above"],
					correctAnswer: "RAID-5",
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
						"Which of the following information is captured by database profiler?",
					choicesOrder: "random",
					choices: [
						"Read  operations",
						"Write operations",
						"Cursor Operations",
						"All of the mentioned",
					],
					correctAnswer: "All of the mentioned",
				},
			],
		},
	],
	completedHtml:
		"<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>",
};
