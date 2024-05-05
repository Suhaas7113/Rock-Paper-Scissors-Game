let yourresult = 0;
let compresult = 0;
const scorelimit = 10;

let yourscore = document.querySelector("#yourscore");
let compscore = document.querySelector("#compscore");
let resultbox = document.querySelector(".para");

const choices = document.querySelectorAll(".choice");
choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const choiceId  = choice.getAttribute("id");
        Game(choiceId);
    })
});

const generatecompchoice = () =>{
    let arr = ["rock","paper","scissors"];
    let genval = Math.floor(Math.random()*3);
    imgmodify(genval);
    return arr[genval];
}

const draw = () =>{
    console.log("Draw");
    resultbox.innerText = "NO GAIN";
    resultbox.style.backgroundColor = "white";
    resultbox.style.color = "black";
}

const Game = (choice) =>{
    let compchoice = generatecompchoice();
    console.log("Your choice is", choice);
    console.log(`Computer choice is ${compchoice}`);
    if(choice === compchoice){
        draw();
    }
    else{
        let user = true;
        if(choice === "rock"){
            user = compchoice === "paper" ? false : true;
        }
        if(choice === "paper"){
            user = compchoice === "scissors" ? false : true;
        }
        if(choice === "scissors"){
            user = compchoice === "rock" ? false : true;
        }
        gameresult(user);
    }
}

let gameresult = (user) =>{
    if(user === true){
        yourresult++;
        yourscore.innerText = yourresult;
        resultbox.innerText = "YOU GAINED A POINT";
        resultbox.style.backgroundColor = "green";
        resultbox.style.color = "white";
    }
    else{
        compresult++;
        compscore.innerText = compresult;
        resultbox.innerText = "COMPUTER GAINED A POINT";
        resultbox.style.backgroundColor = "red";
        resultbox.style.color = "white";
    }
};

let imgmodify = (genval) =>{
    var imgchange = document.getElementById("img");
    if(genval === 0){
        imgchange.src = 'images/rock.png';
    }
    else if(genval === 1){
        imgchange.src = 'images/paper.png';
    }
    else{
        imgchange.src = 'images/scissors.png';
    }
};