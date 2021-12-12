export const javascript = {
	title: "Javascript Quiz",

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
							html: "<article class='intro'>    <h1 class='intro__heading intro__heading--income title'>                     Javascript Development Quiz              </h1>    <div class='intro__body wysiwyg'>       <p> You are about to start quiz which contains questions related to web development. </p>   <p>You have 30 seconds for every page and 180 seconds for the whole survey of 6 questions.</p>  <p>Please click on <b>'Start Quiz'</b> button when you are ready.</p>  </div> </article>",
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
						"Which of the following statements defines JavaScript correctly?",
					choices: [
						"JavaScript is a scripting language used to make the website interactive",
						"JavaScript is an assembly language used to make the website interactive",
						"JavaScript is a compiled language used to make the website interactive",
						"None of the above",
					],
					correctAnswer:
						"JavaScript is an assembly language used to make the website interactive",
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
						"What will be the output of the following JavaScript program: <p id='demo'></p> <script>var js = 10;js *= 5;document.getElementById('demo').innerHTML = js;</script> ",
					choicesOrder: "random",
					choices: ["10", "50", "5", "Error"],
					correctAnswer: "50",
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
						"Will the following JavaScript code work: var js = (function(x) {return x*x;}(10));",
					choicesOrder: "random",
					choices: [
						"Exception will be thrown",
						"Memory leak",
						"Error",
						"Yes, perfectly",
					],
					correctAnswer: "Yes, perfectly",
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
						"Which of the following can be used to call a JavaScript Code Snippet?",
					choicesOrder: "random",
					choices: [
						"Function/Method",
						"Preprocessor",
						"Triggering Event",
						"RMI",
					],
					correctAnswer: "Function/Method",
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
						"What will be the output of the following JavaScript function: <p id='demo'></p><script>function javascript(){// javacript abs() methoddocument.getElementById('demo').innerHTML = Math.abs(-7.25);}</script>",
					choicesOrder: "random",
					choices: ["-7.25", "7.25", "-7", "7"],
					correctAnswer: "7.25",
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
						"What will be the output of the following JavaScript code snippet: int a=4;int b=1;int c=0;// JavaScript if statement and equalto operator; If(a==b){document.write(a)};else if(a==c){document.write(a)};else{document.write(c);}",
					choicesOrder: "random",
					choices: ["0", "1", "4", "Error"],
					correctAnswer: "0",
				},
			],
		},
	],
	completedHtml:
		"<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>",
};
