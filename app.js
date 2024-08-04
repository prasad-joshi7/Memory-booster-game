let gameSeq = [];
let userSeq = [];
let start = false;
let level = 0;

let highestScore = localStorage.getItem('highestScore') ? parseInt(localStorage.getItem('highestScore')) : 0;

let btns = ["yellow", "red", "purple", "green"];

document.addEventListener("keypress", function () {
    if (!start) {
        console.log("game started");
        start = true;
        levelUp();
    }
    
})

let h2 = document.querySelector("h2");
let highestScoreSpan = document.getElementById("highest-score");
highestScoreSpan.innerText = highestScore;


function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = (`Level: ${level}`);
    let randomIndex = Math.floor(Math.random() * 4);
    let randomColor = btns[randomIndex];
    let randomBtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randomBtn);
}

function gameFlash(btn) {
    btn.classList.add("gameFlash");
    setTimeout(function () {
        btn.classList.remove("gameFlash");
    }, 300);

}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 300)
}

function checkAns(idx) {
    if (gameSeq[idx] == userSeq[idx]) {
        if (gameSeq.length == userSeq.length) {
            setTimeout(levelUp, 500);
        }
    }
    else {
        if (level > highestScore) {
            highestScore = level;
            highestScoreSpan.innerText = `${highestScore}`;
            localStorage.setItem('highestScore', highestScore);


        }

        h2.innerHTML = `Game Over! your score is : <b>${level}</b><br><b><i>Press any key to start!</i></b> `;
        document.querySelector("body").style.backgroundColor = "  rgba(255, 0, 0, 0.8)";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white"
        }, 500)

        reset();
    }
}
function btnpress() {
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnpress);
}
function reset() {
    start = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    

}




























































