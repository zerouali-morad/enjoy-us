
// Les variables
var askingNameEnd = document.querySelector(".containerStartGame")
var name1 
var name2 
var play = document.querySelector(".Play")
var boiteOutilsDelete = document.querySelector(".containerBoiteOutils")
var timerStart
var wordToFind
var screenProposition = document.querySelector(".screen")
var proposition = document.querySelector(".proposition")
var resultat = document.querySelector(".resultat")
var svg = document.querySelector(".persoChange")
var containerWordtoFind = document.querySelector(".containerWordToFind")
var r = 0
var valider = document.querySelector(".valider")


// Les fonctions dans l'ordre d'affichage
function Step1() {
  play.addEventListener("click", function(){
    var name1 = document.getElementById("name1").value
    var name2 = document.getElementById("name2").value
    if(name1 === "" || name2 === ""){
      alert("Veuillez saisir vos noms !!")
    } 
    else {
      askingNameEnd.remove()
      console.log(name1,name2)
      Step2()
    }
  })
}

function Step2() {
  containerWordtoFind.classList.add("containerWordToFind-show")
  //REMOVE//
  // (https://www.w3schools.com/jsref/prop_element_classlist.asp) => lien qui m'a permi d'en apprendre plus sur les classList
  valider.classList.remove("valider-show")
  resultat.classList.remove("resultat-positif")
  resultat.classList.remove("resultat-negatif")
  screenProposition.classList.remove("screen-show")
  screenProposition.classList.remove("screen-show-positif")
  screenProposition.classList.remove("screen-show-negatif")
  proposition.classList.remove("proposition-show-input")
  resultat.innerHTML = ""
  ////
  boiteOutilsDelete.classList.add("containerBoiteOutils-show")
  const canvas = document.getElementById("tableau")
  const ctx = canvas.getContext("2d")
  let Dessiner
  // Dessiner
  function Drawing (ctx,x,y){
      // Pour créer des cercles remplies avec Canvas : (lien : https://developer.mozilla.org/fr/docs/Web/API/CanvasRenderingContext2D/arc)
      var sizepen = document.getElementById("size-pen").value
      var color = document.getElementById("color").value
      ctx.beginPath()
      ctx.fillStyle = color
      ctx.arc(x,y,sizepen, 0, 2 * Math.PI)
      ctx.fill()   
  }

  // clique
  canvas.addEventListener("mousedown",(e)=>{
      Dessiner = true
      if (Dessiner === true){
          Drawing(ctx,e.offsetX,e.offsetY )
      }
  })
  // bouge la souris
  canvas.addEventListener("mousemove",(e)=>{
      if (Dessiner === true){
          Drawing(ctx,e.offsetX,e.offsetY )
      }
  })
  // lève la souris
  canvas.addEventListener("mouseup",()=>{
      Dessiner = false
  })

  //le bouton effacer
  var resetButton = document.getElementById("reset")

  resetButton.addEventListener("click", function(){
      Reset()
  })
  function Reset(){
      ctx.clearRect(0, 0, canvas.width, canvas.height)
  }
  function Chrono () {
    timerStart = 15
    affichage = document.querySelector("#temps")
    setTimeout(() => {
      Step3()
    }, (timerStart+1.5)*1000);
    setInterval(function(){
        // L'utilisation du setInterval est une idée de M.Boulay
        if(timerStart >= 1){
            affichage.innerHTML = timerStart
        }
        if( timerStart <= 5 && timerStart > 1 ){
            affichage.style.color = "rgba(170, 0, 0, 1)"
        }
        if(timerStart === 0){
          affichage.style.fontSize = "111px"
          affichage.innerHTML = "Fini"
        }
        timerStart --
    }, 1000)
    affichage.style.fontSize = "290px"
  }
  function MotAleatoire() {
    var wordToFind = document.querySelector(".WordToFind")
    // J'ai appris l'utilisation du Math.random, avec M.Berthier
    liste = ["mouton","agrafe","koala","salive","drapeau","cercueil","jongleur","dessin","nuage","voiture","car","président","twitter","plombier","écharpe","artichaut","perroquet","oursin","halloween","bitcoin"]
    index = Math.floor(Math.random() * Math.floor(liste.length))
    console.log(liste[index])
    wordToFind.innerHTML = liste[index]
    console.log(liste)
    removed = liste.splice(index,1)
    // on le retire de la liste
    console.log(liste)
    console.log(liste[index])
    console.log(removed[0])
  }
  MotAleatoire()
  Chrono()
}

function Step3() {
  var wordToFind = document.querySelector(".WordToFind")
  console.log("Step3")
  boiteOutilsDelete.classList.remove("containerBoiteOutils-show")
 
  affichage.innerHTML=""
  wordToFind.innerHTML = "Ta Proposition ?"
  wordToFind.style.fontSize = "33px"

  screenProposition.classList.add("screen-show")
  proposition.classList.add("proposition-show-input")
  valider.classList.add("valider-show")

  svg.style.visibility= "visible"
  svg.style.zIndex=2

  valider.addEventListener("click", function(){
    propositionValue = proposition.value
    // L'utilisation du .toLowerCase est une idée de M.Boulay
    propositionValue = propositionValue.toLowerCase()
    console.log(removed[0])

    proposition.classList.remove("proposition-show-input")
    svg.style.visibility= "hidden"
    containerWordtoFind.classList.remove("containerWordToFind-show")
    
    if (propositionValue == removed[r]) {
        console.log("Bravo!!")
        resultat.classList.add("resultat-positif")
        resultat.innerHTML = "Félicitation !! Tu as trouvé la bonne réponse"
        screenProposition.classList.add("screen-show-positif")
    }

    else{
        console.log("Perdu!!")
        resultat.classList.add("resultat-negatif")
        resultat.innerHTML = "Perdu !! La réponse attendue est: "+removed[r]
        screenProposition.classList.add("screen-show-negatif")
    }
    // On reboucle tout ca
    valider.classList.add("valider-show")
    valider.style.left = "85%"
    valider.innerHTML = ">"

    valider.addEventListener("click", function(){
        // à recacher
        valider.classList.remove("valider-show")
        resultat.classList.remove("resultat-positif")
        resultat.classList.remove("resultat-negatif")
        screenProposition.classList.remove("screen-show")
        screenProposition.classList.remove("screen-show-positif")
        screenProposition.classList.remove("screen-show-negatif")
        proposition.classList.remove("proposition-show-input")
        resultat.innerHTML = ""

        // à remettre
        containerWordtoFind.classList.add("containerWordToFind-show")
        boiteOutilsDelete.classList.remove("containerBoiteOutils-show")
       
        
        svg.style.visibility= "hidden"
        
        Step2()

        //fin du jeu, dès que la liste sera vide
        // if (liste === null) {
        // 
        //     // je sors
        // }
    })
  })
}
Step1()

// Tout droit réservé, écrit par Nassim YAZI 02/21
// Il y a encore pas mal de bugs dans ma réalisation, mais je suis fière d'avoir progressé en tout point.
// La partie paint fonctionne très bien, mais un peu moins le global...
// J'ai pris connaissance trop tard de l'existance du classList. 
