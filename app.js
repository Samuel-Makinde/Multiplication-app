const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");
questionEl.innerText = `what is ${num1} multiply by ${num2}?`;

const correctAns = num1 * num2;
let score = JSON.parse(localStorage.getItem("score"));
formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value;
    if(userAns === correctAns){
        score++;
        addLocalStorage();
    } else{
        score--
        addLocalStorage();
    }
})

function addLocalStorage (){
    localStorage.setItem("score", JSON.stringify(score));
}

if(!score){
    score = 0;
}
scoreEl.innerText = `score: ${score}`;
// if(!userAns){
//     score = 0;
//     alert("You did not provide any answer!");
// }