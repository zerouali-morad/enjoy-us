/* DECLARATION DES VARIABLES ET DE LA LISTE DES OBJETS A TROUVER */

const secret = Math.floor(Math.random() * 1001)
const random = Math.floor(Math.random() * 7)
let indication = document.getElementById("result")
let n1 = parseInt(document.getElementById("n1").value)
var listObj = [
    "Un Dragon", 
    "Un sabre laser", 
    "L'étoile de la mort",
    "La cape d'invisibilité",
    "Un grain de riz en 3201",
    "L'anneau de pouvoir"
]
let displayObj = document.getElementById("objet").innerHTML = listObj[random]


/* FONCTION UNIQUER QUI CONTIENT LE JEU */

function runGame () {
    let n1 = parseInt(document.getElementById("n1").value)
        console.log(secret)
        if ( n1 < 0) {
            indication.innerHTML = "Un chiffre en dessous de 0 est impossible"
        } if ( n1 > 1000 ) {
            indication.innerHTML = "Le nombre maximum est en dessous de 1000"
        } else if ( n1 > secret) {
            indication.innerHTML = n1 + " est trop grand"
        } else if ( n1 < secret) {
            indication.innerHTML = n1 + " est trop petit"
        } else if(n1  == secret) {
            indication.classList.replace("indication", "true")
            indication.innerHTML = "Bravo, le prix de: " + displayObj + " est de " + secret + " €"
        } else  {
            indication.innerHTML = "Entrez un nombre valide"
        }
    }

