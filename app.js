let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara =  document.querySelector("#user-score");
let compScorePara =  document.querySelector("#comp-score");


const genCompChoice = ()=>{
    const valIdx =["rock","paper","scissors"];
   const random = Math.floor(Math.random()*3);
    return valIdx[random];
}
const drawGame = ()=>{
    console.log("Game was Draw.");
    msg.innerText = " Game Draw!!";
    msg.style.backgroundColor = "#081b31";
}
const showWinner = (userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        
        msg.innerText = " You win!!";
        msg.style.backgroundColor = "Green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = " You lose!!";
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice)=>{
    console.log("Users choice = ",userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice =",compChoice);
    if(userChoice===compChoice){
        drawGame();
    }
    
    else{
        let userWin = true;
        if(userChoice === "rock"){
          userWin= compChoice === "paper" ? false : true;
        }
        else if(userChoice==="paper"){
            userWin= compChoice === "scissors" ? false : true;
          }
          else {
           userWin =compChoice === "rock" ? false : true;
    
          }
          showWinner(userWin);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
    
});