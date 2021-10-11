/* DECLARATION DES VARIABLES POUR RECUPERE CERTAINS ELEMENTS HTML POUR LE SWITCH DARK/LIGHT MODE DE LA HOMEPAGE */
console.log(document.getElementById("light"))
const title = document.getElementById("title")
const description = document.getElementById("description")
const leftItems = document.getElementById("left-items")
let textDescription = document.querySelector(".text-description")
console.log(textDescription)

/* FONCTION POUR CHANGER LE MODE D'AFFICHAGE DE LA HOMEPAGE */

function lightMode() {
    console.log("clicked")
    
    document.body.classList.toggle("body-lightmode")
    title.classList.toggle("h1-lightmode")
    description.classList.toggle("description--element-lightmode")
    leftItems.classList.toggle("left-items-container-lightmode")
    textDescription.classList.toggle("text-description-lightmode")
    for(let listItems of document.getElementsByClassName("list-items--menu")) {
        listItems.classList.toggle("list-items--menu-lightmode")
    }
    for( let links of document.getElementsByTagName("a")) {
        links.classList.toggle("a-lightmode")
    }
    for ( let buttonList of document.getElementsByClassName("button-list-items--menu")) {
        buttonList.classList.toggle("button-list-items--menu-lightmode")
    }
    if(document.body.contains(document.getElementById("result"))) {
        document.getElementById("result").classList.toggle("indication-lightmode")
    } else {
        console.log("no result")
    }
}

/* FONCTION QUI PERMET DE CHANGER LA DESCRIPTION DU JEU SUR LA HOMEPAGE */
/* La fonction prend en parametre un jeu et grâce au switch va changer le inner html de la description et le lien du bouton */

function gameDescription(game) {
    switch (game) {
        case game1:
            textDescription.innerHTML = "Incarnez le celebre serpent “Snake” dans une interface moderne. Mangez le plus de nourriture possible en faisant attention à ne pas vous mangez ou de ne pas vous prendre de mur :)"
            document.getElementById("game-icon-description").src = "img/LogoSnake 2.png"
            document.getElementById("form-submit").action = "page/Snake/snake.html"
            break;
        case game2: 
            textDescription.innerHTML = "Il s’agit bien d’un jeu et non d’un prénom. Memorisez toutes les cases dans le bonnes ordres pour réussir les différents niveaux de ce jeu qui va vous faire perdre la tête :)"
            document.getElementById("game-icon-description").src = "img/LogoSimon 2.png"
            document.getElementById("form-submit").action = "page/Simon/Simon.html"
            break;
        case game3: 
            textDescription.innerHTML = "Le BlackJack est un jeu de cartes connu pour ses règles très simple.n Chaque cartes correspondent à une valeur et vous devez avoir la somme de 21 dans votre main. Facile non ? :)"
            document.getElementById("game-icon-description").src = "img/LogoBlackJack 2.png"
            document.getElementById("form-submit").action = "page/BlackJack/blackjack1.html"
            break;
        case game4:
            textDescription.innerHTML = "Comme son nom l’indique, devinez la valeur de l'entité que vous l'on propose. On accepete pas les nonente ici :)"
            document.getElementById("game-icon-description").src = "img/IconeJustePrix 2.png"
            document.getElementById("form-submit").action = "page/jeux4.html"
            break;
        case game5:
            textDescription.innerHTML = "Pictionary est un jeu de société dont le but est de faire deviner un mot, une expression ou une idée à son partenaire dans un temps limité, à l'aide d'un dessin."
            document.getElementById("game-icon-description").src = "img/pencil.png"
            document.getElementById("form-submit").action = "page/Pictionary/pict-html.html"
            break;
        case about:
            textDescription.innerHTML = "Projet réalisé par\: Alexandre Cler, Wylohn Tribout, Morad Zerouali, Nassim Yazi et Hugo Cachon"
            document.getElementById("game-icon-description").src = "img/support.png"
            document.getElementById("form-submit").action = "page/about.html"
            break;
    }
}
