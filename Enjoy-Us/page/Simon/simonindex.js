/* Les variables */
let computersequence = [];
let playersequence = [];
let turn = 0;
let correct;
let light;
let noise = false;
let win;

/* Les constantes */
const counterdisplay = document.querySelector("#counterdisplay");
const greenbutton = document.querySelector("#greenbutton");
const redbutton = document.querySelector("#redbutton");
const yellowbutton = document.querySelector("#yellowbutton");
const bluebutton = document.querySelector("#bluebutton");
const startButton = document.querySelector("#startButton");

/*Les couleurs éteintes*/
function clearColor() {
    redbutton.style.backgroundColor = "rgb(230, 94, 116)";
    yellowbutton.style.backgroundColor = "rgb(230, 177, 65)";
    bluebutton.style.backgroundColor = "rgb(41, 132, 216)";
    greenbutton.style.backgroundColor = "rgb(72, 199, 171)";
}

/*Les couleurs allumées*/
function lightColor() {
    redbutton.style.backgroundColor = "crimson";
    yellowbutton.style.backgroundColor = "gold";
    bluebutton.style.backgroundColor = "blue";
    greenbutton.style.backgroundColor = "turquoise";
}

startButton.addEventListener("click", nextTurn )

/*Fonction qui restart le jeu à 0 quand on a faux*/


console.log(start)
/*Fonction qui restart le jeu à 0 quand on a faux*/
function resetGame() {
    computersequence = [];
    playersequence = [];
    turn = 1;
    //counterdisplay.innerHTML = 0;
}

/*fonction qui fait fonctionner le simon*/
function play(Nextsequence) {
    Nextsequence.forEach((button,number) => {
        setTimeout(() => {
            lightColor(button);
        }, (number + 1) * 800);
    });
}  

/*computersequence = [];
    playersequence = [];
    turn = 1;
    counterdisplay.innerHTML = 1;*/

/*La couleur qui va être jouée*/
function nextColor(){
    const button = ["redbutton","bluebutton","yellowbutton","greenbutton"];
    const random = button [Math.floor(Math.random() * button.length)];
    return random;
}

/*Le prochain tour*/
function nextTurn() {
    turn++;
    counterdisplay.textContent = turn;

    /*La constante Nextsequence qui garde l'ordre et qui ajoute une couleur*/
    const Nextsequence = [computersequence];
    Nextsequence.push(nextColor());
    playersequence(Nextsequence);

    /*Le temps entre chaque niveau est de plus en plus rapide*/
    sequence = [Nextsequence];
    setTimeout(() => {
        playerturn(turn);
    }, turn * 800 + 800);
}

function gameTurn () {
    if (nextTurn()) {
        clearColor();
        setTimeout(() => {
            if (computersequence[light] == 1) one();
            if (computersequence[light] == 2) two();
            if (computersequence[light] == 3) three();
            if (computersequence[light] == 4) four();
            light++;
        }, 200);
    }
}

// fonction qui change la couleur et emet le son approprié quand elle est joué//
function one () {
    var audio = document.getElementbyId("noise1");
    audio.play();
    noise = true;
    redbutton.style.backgroundColor = "crimson";
}
console.log(one)

function two () {
    var audio = document.getElementbyId("noise2");
    audio.play();
    noise = true;
    yellowbutton.style.backgroundColor = "gold";
}

function three () {
    var audio = document.getElementbyId("noise3");
    audio.play();
    noise = true;
    bluebutton.style.backgroundColor = "blue";
}

function four () {
    var audio = document.getElementbyId("noise4");
    audio.play();
    noise = true;
    greenbutton.style.backgroundColor = "turquoise";
}


redbutton.addEventListener("click", clearColor()) {
    if (gameTurn()) {
         playersequence.push (1);
         check();
         one();
         if(!win) {
             resetGame();
        } 
    }
}    

yellowbutton.addEventListener("click", clearColor() {
    if (gameTurn()) {
        playersequence.push (2);
        check();
        two();
        if(!win) {
            resetGame();
    }
}

bluebutton.addEventListener("click", clearColor() {
    if (gameTurn()) {
        playerorder.push (3);
        check();
        three();
        if(!win) {
            resetGame();
    }
}

greenbutton.addEventListener("click", clearColor() {
    if (gameTurn()) {
        playerorder.push (4);
        check();
        four();
        if(!win) {
            resetGame();
    }
}

/*Fonction qui vérifie si le joueur a bon */
function check(button) {
    const number = playersequence.push(button) - 1;
    if (playersequence[number] !== computersequence[number]) {
        resetGame();
    }
    else if (playersequence.length === computersequence.length) {
        if (playersequence.length === 20) {
            win();
        }
    }
}