export const css = {
	title: "CSS Quiz",

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
							type: "css",
							name: "quiz_intro",
							html: "<article class='intro'>    <h1 class='intro__heading intro__heading--income title'>                     CSS Development Quiz              </h1>    <div class='intro__body wysiwyg'>       <p> You are about to start quiz which contains questions related to web development. </p>   <p>You have 30 seconds for every page and 180 seconds for the whole survey of 6 questions.</p>  <p>Please click on <b>'Start Quiz'</b> button when you are ready.</p>  </div> </article>",
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
					title: "CSS stands for",
					choices: [
						"Cascade Sheets Style",
						"Color Style Sheets",
						"Cascading Style Sheets",
						"Cascade Style Sheet",
					],
					correctAnswer: "Cascading Style Sheets",
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
						"Which of the following CSS selectors are used to specify a group of elements?",
					choicesOrder: "random",
					choices: ["tag", "id", "class", "both class and id"],
					correctAnswer: "class",
				},
			],
		},
		{
			navigationTitle: "Question 3",
			questions: [
				{
					type: "radiogroup",
					// name: "magnacarta",
					title: "In css, “color:red” can be called as",
					choicesOrder: "random",
					choices: ["Declaration", "Value", "Rule", "Selector"],
					correctAnswer: "Declaration",
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
						"Which of the following element is used to create a SVG rectangle?",
					choicesOrder: "random",
					choices: ["<square>", "<rectangle>", "<polygon>", "<rect>"],
					correctAnswer: "<rect>",
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
						"What will be the output of the following CSS code snippet:   span { border: 1px solid red; outline: green dotted thick;}",
					choicesOrder: "random",
					choices: [
						"All span elements will have a green thick border and a red outline",
						"All span elements will have a red border and a green dotted outline",
						"All span elements will have a outer green dotted border and an inner red border",
						"All span elements will have an outer red border and inner green dotted border",
					],
					correctAnswer:
						"All span elements will have a outer green dotted border and an inner red border",
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
						"Which of the following CSS property sets the amount of spacing between letters?",
					choicesOrder: "random",
					choices: ["line-height", "letter-space", "space", "letter-spacing"],
					correctAnswer: " letter-spacing",
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
