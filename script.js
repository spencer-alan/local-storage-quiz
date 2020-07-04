let main = document.querySelector('#main');
let start = document.querySelector('#start');
let quiz = document.querySelector('#quiz');

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
let questionPosition = 0;



// This will start the quiz and the timer
start.addEventListener('click', function(event){
  // Function to start timer
  let timer = document.querySelector('#timer');
  let time = 75;

  return renderQuestions()
});

// This function renders the questions on the page 
function renderQuestions(){
  if (questionPosition >= questions.length){
    
  }
}