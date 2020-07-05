let main = document.querySelector('#main');
let start = document.querySelector('#start');
let quiz = document.querySelector('#quiz');
let endForm = document.querySelector('#end-form');
let submit = document.querySelector('#save-score');
let remove = document.querySelector('#delete-score');
let initial = document.querySelector('#initial');

let questions = [
  { 
    question: 'The "=" in JavaScript means __________.',
    a: 'equals',
    b: 'assignment',
    c: 'same as',
    d: 'agree',
    answer: 'b',
  },
  {
    question: 'jQuery is a simplified version of __________.',
    a: 'JavaScript',
    b: 'HTML',
    c: 'CSS',
    d: 'React',
    answer: 'a',
  },
  {
    question: 'An HTML tag is surronded by __________.',
    a: '[]',
    b: '()',
    c: '<>',
    d: '{}',
    answer: 'c',
  },
  {
    question: 'The link to external CSS files in HTML goes inside the __________ tag. ',
    a: '<body>',
    b: '<section>',
    c: '<head>',
    d: '<div>',
    answer: 'c',
  },
  {
    question: 'Which header element has the smallest font by default?.',
    a: '<h1>',
    b: '<h2>',
    c: '<h3>',
    d: '<h4>',
    answer: 'd',
  }
];
let position = 0;
let timer = document.querySelector('#timer');
let time = 10;
let timeScore = time.value;

// function quizStart(){
//   // this starts the timer
//   let countdown = setInterval(function(){
//     timer.innerHTML = time;
//     time--;
//     if (time < 0){
//       clearInterval(countdown);
//     }
//   }, 1000);
// };
start.addEventListener('click', renderQuestions());

// renders the questions on the page 
function renderQuestions(){
  if (position > questions.length){
    quiz.innerHTML = `Quiz Finished! Your score is ${time}.`;
    if (endForm.style.display === 'none'){
      endForm.style.display = 'block';
    } else {
      endForm.style.display = 'none';
    }
    quiz.innerHTML = questions[position].question;
    button1 = document.createElement('<button>');
    button1.textContent = questions[position].a;
    quiz.append(button1);
    button2 = document.createElement('<button>');
    button2.textContent = questions[position].b;
    quiz.append(button2);
    button3 = document.createElement('<button>');
    button3.textContent = questions[position].c;
    quiz.append(button3);
    button4 = document.createElement('<button>');
    button4.textContent = questions[position].d;
    quiz.append(button4);
  }
}
  // function checkAnswer(){
  //   // use getElementsByName because we have an array which it will loop through
  //   choices = document.getElementsByName("choices");
  //   for(let i = 0; i < choices.length; i++){
  //     if(choices[i].checked){
  //       choice = choices[i].value;
  //     }
  //   }
  //   // checks if answer matches the correct choice
  //   if(choice == questions[i].answer){
  //     //each time there is a correct answer this value increases
  //     correct++;
  //   }
  //   // changes position of which character user is on
  //   pos++;
  //   // then the renderQuestion function runs again to go to next question
  //   renderQuestion();
  

// // This will start the timer
// start.addEventListener('click', timeCountdown);
// // This will start to render questions
// start.addEventListener('click', renderQuestions);

// This should store the initials and the time when the quiz stopped
submit.addEventListener('click', function(event) {
  localStorage.setItem('initials', initial);
  localStorage.setItem('score', timeScore);
});

remove.addEventListener('click', function(event) {
  localStorage.clear();
});