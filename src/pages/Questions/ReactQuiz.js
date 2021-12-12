export const react = {
	title: "React Quiz",

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
							type: "react",
							name: "quiz_intro",
							html: "<article class='intro'>    <h1 class='intro__heading intro__heading--income title'>                     react.js Development Quiz              </h1>    <div class='intro__body wysiwyg'>       <p> You are about to start quiz which contains questions related to web development. </p>   <p>You have 30 seconds for every page and 180 seconds for the whole survey of 6 questions.</p>  <p>Please click on <b>'Start Quiz'</b> button when you are ready.</p>  </div> </article>",
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
					title: "Which of the following are the advantages of React.js?",
					choices: [
						"React.js can increase the application's performance with Virtual DOM.",
						"React.js is easy to integrate with other frameworks such as Angular, BackboneJS since it is only a view library.",
						"React.js can render both on client and server side.",
						"All of the above",
					],
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
						"Which of the following command is used to install create-react-app?",
					choicesOrder: "random",
					choices: [
						"npm install -g create-react-app",
						"npm install create-react-app",
						"npm install -f create-react-app",
						"install -g create-react-app",
					],
					correctAnswer: "npm install -g create-react-app",
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
						"A class is a type of function, but instead of using the keyword function to initiate it, which keyword do we use?",
					choicesOrder: "random",
					choices: ["Constructor", "Class", "Object", "DataObject"],
					correctAnswer: "Class",
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
						"What would be the output of the following example: var Helloword=(props)=>  {  return(  <div>  Hello World 1  </div>  <div>  Hello World 2  </div>  );   }  ReactDOM.render(<Helloworld/>,mountNode)  ",
					choicesOrder: "random",
					choices: [
						"Hello World 1",
						"Hello World 2",
						"Hello World 1 Hello World 2",
						"Error",
					],
					correctAnswer: "Error",
				},
			],
		},
		{
			navigationTitle: "Question 5",
			questions: [
				{
					type: "radiogroup",
					// name: "magnacarta",
					title: "What is the default port where webpack-server runs?",
					choicesOrder: "random",
					choices: ["3000", "8080", "3030", "6060"],
					correctAnswer: "8080",
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
						"How many numbers of elements a valid react component can return?",
					choicesOrder: "random",
					choices: ["1", "2", "4", "5"],
					correctAnswer: "2",
				},
			],
		},
	],
	completedHtml:
		"<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>",
};
