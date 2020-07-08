let main = document.querySelector('#main');
let start = document.querySelector('#start');
let quiz = document.querySelector('#quiz');
let endForm = document.querySelector('#end-form');
let submit = document.querySelector('#save-score');
let remove = document.querySelector('#delete-score');
let initial = document.querySelector('#initial');
let question1 = {
  question: 'The link to external CSS files in HTML goes inside the __________ tag. ',
  a: '<body>',
  b: '<section>',
  c: '<head>',
  d: '<div>',
  answer: 'c',
};  
let question2 = { 
  question: 'The "=" in JavaScript means __________.',
  a: 'equals',
  b: 'assignment',
  c: 'same as',
  d: 'agree',
  answer: 'b',
};
let question3 = {
  question: 'jQuery is a simplified version of __________.',
  a: 'JavaScript',
  b: 'HTML',
  c: 'CSS',
  d: 'React',
  answer: 'a',
};
let question4 = {
  question: 'An HTML tag is surronded by __________.',
  a: '[]',
  b: '()',
  c: '<>',
  d: '{}',
  answer: 'c',
};
let question5 = {
  question: 'Which header element has the smallest font by default?',
  a: '<h1>',
  b: '<h2>',
  c: '<h3>',
  d: '<h4>',
  answer: 'd',
};
let questions = [question1, question2, question3, question4, question5];
let i = 0;
let timer = document.querySelector('#timer');
let time = 10;
let score = 0;

// console.log('elements', {
//   main: main,
//   start: start,
//   quiz: quiz,
//   end: endForm,
//   submit: submit,
//   remove: remove,
//   initial: initial
// });

function startTimer(){
  // this starts the timer
  let countdown = setInterval(function(){
    timer.innerHTML = time;
    time--;
    if (time < 0){
      clearInterval(countdown);
    }
  }, 1000);
}


// renders the questions on the page 
function renderQuestions(){
  console.log('entered render questions');
  for (i; i < questions.length; i++){
    if (i > questions.length){
     quiz.innerHTML = `Quiz Finished! Your score is ${time}.`
    if (endForm.style.display === 'none'){
      endForm.style.display = block;
    }
    // else {
    //   endForm.style.display = 'none';
    //   };
    }
      let btnContainer = document.createElement('div');
      let button1 = document.createElement('button');
      let button2 = document.createElement('button');
      let button3 = document.createElement('button');
      let button4 = document.createElement('button');
      btnContainer.setAttribute('class', 'button-container');
      quiz.innerHTML = questions[i].question;
      quiz.append(btnContainer);

      btnContainer.append(button1);
      button1.setAttribute('value', 'a');
      button1.setAttribute('class', 'btn btn-primary buttons');
      button1.textContent = questions[i].a;

      btnContainer.append(button2);
      button2.setAttribute('value', 'b');
      button2.setAttribute('class', 'btn btn-primary buttons');
      button2.textContent = questions[i].b;

      btnContainer.append(button3);
      button3.setAttribute('value', 'c');
      button3.setAttribute('class', 'btn btn-primary buttons');
      button3.textContent = questions[i].c;
      
      btnContainer.append(button4);
      button4.setAttribute('value', 'd');
      button4.setAttribute('class', 'btn btn-primary buttons');
      button4.textContent = questions[i].d;
      
      return document.querySelectorAll('.buttons').forEach(item => {
        item.addEventListener('click', function(event){
        if (item.value === questions[i].answer){
          i++;
          score++;
          renderQuestions();
          console.log(score);
        } else
        i++;
        renderQuestions();
        //checkAnswer();
      })
    })
  }
}
// function checkAnswer(){
//   console.log('entered check answer');
//   i++;
//   console.log(i);
// }

// This will start the timer
start.addEventListener('click', startTimer);
// This will start to render questions
start.addEventListener('click', renderQuestions);
// This should store the initials and the time when the quiz stopped
submit.addEventListener('click', function(event) {
  localStorage.setItem('initials', initial);
  localStorage.setItem('score', timeScore);
});
// this should clear local storage
remove.addEventListener('click', function(event) {
  localStorage.clear();
})