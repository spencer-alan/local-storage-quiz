let main = document.querySelector('#main');
let start = document.querySelector('#start');
let quiz = document.querySelector('#quiz');
let endForm = document.querySelector('#end-form');
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
let time = 25;
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
    if (time < 0 || questions[i] === questions[4]){
      clearInterval(countdown);
    }
  }, 1000);
}


// renders the questions on the page 
function renderQuestions(){
  console.log('entered render questions', i);
  for (i; i < questions.length; i++){
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
            score++;
            console.log(score);
            if (questions[i] === questions[4]) { 
              console.log('entered final form');
              return finalForm();
            } 
            i++;
            renderQuestions(); 
          }

          else {
            if (questions[i] === questions[4]) { 
            console.log('entered final form');
            return finalForm();
            }
          i++;
          renderQuestions();
          }
      })
    })
  }
}

// This will start the timer
start.addEventListener('click', startTimer);
// This will start to render questions
start.addEventListener('click', renderQuestions);

function finalForm() {
  let btnContainer = document.createElement('div');
  let submit = document.createElement('button');
  let reset = document.createElement('button');
  let initialInput = document.createElement('input');
  let instructions = document.createElement('p');
  
  quiz.innerHTML = `Finished! your score was ${score}.`;
  quiz.append(instructions);
  instructions.innerHTML = 'Please enter your intials to see if you have the highest score:';
  instructions.setAttribute('class', 'lead');
  quiz.append(initialInput);
  quiz.append(btnContainer);

  btnContainer.append(submit);
  submit.setAttribute('class', 'btn btn-primary buttons');
  submit.textContent = 'Submit Score';

  btnContainer.append(reset);
  reset.setAttribute('class', 'btn btn-danger buttons');
  reset.textContent = 'Remove Scores';

  // This should store the initials and the time when the quiz stopped
  submit.addEventListener('click', function(event) {
    event.preventDefault();
    let player = {
      name: initialInput.value.trim(),
      score: score
    };
    if (player.name === '') {
      alert('Whoops! Please enter your initials.');
    } else if (score < JSON.parse(localStorage.getItem(player.score))){
     alert('Nice Try! But your score is not the highest')
    } else {
    localStorage.setItem('player', JSON.stringify(player));
    alert('Congrats! You have the new High Score!');
    }
  });
  // this should clear local storage
  reset.addEventListener('click', function(event) {
    localStorage.clear();
  });
}


