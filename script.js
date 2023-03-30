var myQuestions = [{
    question: "What does HTML stand for?",
    answers: {
        a: 'High Transition Markup Language',
        b: 'Hyper-Text Markup Language',
        c: 'Hyper Translation Markup Language',
        d: 'HyperText Markup Language',
    },
    correctAnswer: 'd'
},

{
    question: "Which of these symbols represents a 'class' in CSS?",
    answers: {
        a: '!',
        b: '#',
        c: '*',
        d: '.'
    },
    correctAnswer: 'b'
},
{
    question: "Which programming language is most often claimed as easiest by beginners?",
    answers: {
        a: 'Javascript',
        b: 'CSharp',
        c: 'Python',
        d: 'CSS'
    },
    correctAnswer: 'c'
},
{
    question: "When creating an HTML document, the 'title' refers to __",
    answers: {
        a: 'The Tab',
        b: 'The URL',
        c: 'The Header',
        d: 'The Title'
    },
    correctAnswer: 'a'
},
{
    question: "When using javascript, we define things first by setting __",
    answers: {
        a: 'Arrays',
        b: 'JSON',
        c: 'Camel Case',
        d: 'Variables'
    },
    correctAnswer: 'd'
},
{
    question: "Visual Studio Code is best described as a __",
    answers: {
        a: 'Computer Program',
        b: 'Terminal',
        c: 'Source Code Editor',
        d: 'File Explorer'
    },
    correctAnswer: 'c'
},
{
    question: "To check the code of a website, first you would right-click and then __",
    answers: {
        a: 'Inspect Element',
        b: 'View Page Source',
        c: 'Create QR Code For This Page',
        d: 'Ask the developer'
    },
    correctAnswer: 'a'
},
{
    question: "Javascript is automatically applied after writing code to the application.",
    answers: {
        a: 'True',
        b: 'False'
    },
    correctAnswer: 'b'
},
{
    question: "CSS overrides any styling and color applied from HTML and/or Javascript if linked directly after both.",
    answers: {
        a: 'True',
        b: 'False'
    },
    correctAnswer: 'a'
},
{
    question: "CSS is used to create the bones of the application.",
    answers: {
        a: 'True',
        b: 'False'
    },
    correctAnswer: 'b'
}
];

var quizContainer = document.getElementById('quiz');
var answersContainer = document.getElementById('answers');
var submitButton = document.getElementById('submit');



function generateQuiz(myQuestions, quizContainer, answersContainer, submitButton){

	function showQuestions(myQuestions, quizContainer){
		// code will go here
	}

	function showAnswers(myQuestions, quizContainer, answersContainer){
		// code will go here
	}

	// show the myQuestions
	showQuestions(myQuestions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showAnswers(myQuestions, quizContainer, answersContainer);
	}
}

function showQuestions(myQuestions, quizContainer){
	// we'll need a place to store the output and the answer choices
	var output = [];
	var answers;

	// for each question...
	for(var i=0; i<myQuestions.length; i++){
		
		// first reset the list of answers
		answers = [];

		// for each available answer to this question...
		for(letter in myQuestions[i].answers){

			// ...add an html radio button
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ myQuestions[i].answers[letter]
				+ '</label>'
			);
		}

		// add this question and its answers to the output
		output.push(
			'<div class="question">' + myQuestions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	// finally combine our output list into one string of html and put it on the page
	quizContainer.innerHTML = output.join('');
}


function showResults(myQuestions, quizContainer, answersContainer){
	
	// gather answer containers from our quiz
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	// keep track of user's answers
	var userAnswer = '';
	var numCorrect = 0;
	
	// for each question...
	for(var i=0; i<myQuestions.length; i++){

		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
		if(userAnswer===myQuestions[i].correctAnswer){
			// add to the number of correct answers
			numCorrect++;
			
			// color the answers green
			answerContainers[i].style.color = 'lightgreen';
		}
		// if answer is wrong or blank
		else{
			// color the answers red
			answerContainers[i].style.color = 'red';
		}
	}

	// show number of correct answers out of total
	answersContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
}

submitButton.onclick = function(){
	showResults(myQuestions, quizContainer, answersContainer);
}

showQuestions(myQuestions, quizContainer);
