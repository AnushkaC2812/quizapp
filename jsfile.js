const quizDB =[
    {
     q: "1. Which of the following is not a valid C variable name?" ,
     a: "int number",
     b: "float rate",
     c: "int variable_count",
     d: "int $main",
     ans: "ans4"
    },

    {
        q: "2. All keywords in C are in" ,
        a: "LowerCase letters",
        b: "UpperCase letters",
        c: "CamelCase letters",
        d: "None of the above",
        ans: "ans1"
       },

       {
        q: "3. Which is valid C expression?" ,
        a: "int my_num = 100,000;",
        b: "int my_num = 100000;",
        c: "int my num = 1000;",
        d: "int $my_num = 10000;",
        ans: "ans2"
       },

       {
        q: "4. Which of the following cannot be a variable name in C?" ,
        a: "volatile",
        b: "true",
        c: "friend",
        d: "export",
        ans: "ans1"
       }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelector('.answer');

const showscore = document.querySelector('#showscore');

let qC = 0;
let score = 0;

const loadQues = () => {
//question.innerText = quizDB[0].q;
    const qL  = quizDB[qC];
    question.innerText = qL.q;
    option1.innerText = qL.a;
    option2.innerText = qL.b;
    option3.innerText = qL.c;
    option4.innerText = qL.d;
}

loadQues();

const getCheckAns = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
};


const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click' , () => {
    const checkedAns = getCheckAns();
    console.log(checkedAns);

    if(checkedAns === quizDB[qC].ans){
        score++;
    };

    qC++;

    deselectAll();
if(qC < quizDB.length){
    loadQues();
}else {

    showscore.innerHTML = 
    <><h3> You scored ${score}/${quizDB.length} </h3><button class="btn" onclick="location.reload()"> </button></>
    ;

    showscore.classList.remove('scoreArea');
}

});