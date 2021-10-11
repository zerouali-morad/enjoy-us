//black jack by morad zerouali niveau 3
/* jeu de carte */

//img de carte
var ca2 = document.getElementById("2ca");
var co2 = document.getElementById("2co");
var p2 = document.getElementById("2p");
var t2 = document.getElementById("2t");
var ca3 = document.getElementById("3ca");
var co3 = document.getElementById("3co");
var p3 = document.getElementById("3p");
var t3 = document.getElementById("3t");
var ca4 = document.getElementById("4ca");
var co4 = document.getElementById("4co");
var p4 = document.getElementById("4p");
var t4 = document.getElementById("4t");
var ca5 = document.getElementById("5ca");
var co5 = document.getElementById("5co");
var p5 = document.getElementById("5p");
var t5 = document.getElementById("5t");
var ca6 = document.getElementById("6ca");
var co6 = document.getElementById("6co");
var p6 = document.getElementById("6p");
var t6 = document.getElementById("6t");
var ca7 = document.getElementById("7ca");
var co7 = document.getElementById("7co");
var p7 = document.getElementById("7p");
var t7 = document.getElementById("7t");
var ca8 = document.getElementById("8ca");
var co8 = document.getElementById("8co");
var p8 = document.getElementById("8p");
var t8 = document.getElementById("8t");
var ca9 = document.getElementById("9ca");
var co9 = document.getElementById("9co");
var p9 = document.getElementById("9p");
var t9 = document.getElementById("9t");
var ca10 = document.getElementById("10ca");
var co10 = document.getElementById("10co");
var p10 = document.getElementById("10p");
var t10 = document.getElementById("10t");
var caj = document.getElementById("jca");
var coj = document.getElementById("jco");
var pj = document.getElementById("jp");
var tj = document.getElementById("jt");
var caq = document.getElementById("qca");
var coq = document.getElementById("qco");
var pq = document.getElementById("qp");
var tq = document.getElementById("qt");
var cak = document.getElementById("kca");
var cok = document.getElementById("kco");
var pk = document.getElementById("kp");
var tk = document.getElementById("kt");
var caas = document.getElementById("asca");
var coas = document.getElementById("asco");
var pas = document.getElementById("asp");
var tas = document.getElementById("ast");

//data des img carte

var dca2 = document.getElementById("2ca").dataset.id;
var dco2 = document.getElementById("2co").dataset.id;
var dp2 = document.getElementById("2p").dataset.id;
var dt2 = document.getElementById("2t").dataset.id;
var dca3 = document.getElementById("3ca").dataset.id;
var dco3 = document.getElementById("3co").dataset.id;
var dp3 = document.getElementById("3p").dataset.id;
var dt3 = document.getElementById("3t").dataset.id;
var dca4 = document.getElementById("4ca").dataset.id;
var dco4 = document.getElementById("4co").dataset.id;
var dp4 = document.getElementById("4p").dataset.id;
var dt4 = document.getElementById("4t").dataset.id;
var dca5 = document.getElementById("5ca").dataset.id;
var dco5 = document.getElementById("5co").dataset.id;
var dp5 = document.getElementById("5p").dataset.id;
var dt5 = document.getElementById("5t").dataset.id;
var dca6 = document.getElementById("6ca").dataset.id;
var dco6 = document.getElementById("6co").dataset.id;
var dp6 = document.getElementById("6p").dataset.id;
var dt6 = document.getElementById("6t").dataset.id;
var dca7 = document.getElementById("7ca").dataset.id;
var dco7 = document.getElementById("7co").dataset.id;
var dp7 = document.getElementById("7p").dataset.id;
var dt7 = document.getElementById("7t").dataset.id;
var dca8 = document.getElementById("8ca").dataset.id;
var dco8 = document.getElementById("8co").dataset.id;
var dp8 = document.getElementById("8p").dataset.id;
var dt8 = document.getElementById("8t").dataset.id;
var dca9 = document.getElementById("9ca").dataset.id;
var dco9 = document.getElementById("9co").dataset.id;
var dp9 = document.getElementById("9p").dataset.id;
var dt9 = document.getElementById("9t").dataset.id;
var dca10 = document.getElementById("10ca").dataset.id;
var dco10 = document.getElementById("10co").dataset.id;
var dp10 = document.getElementById("10p").dataset.id;
var dt10 = document.getElementById("10t").dataset.id;
var dcaj = document.getElementById("jca").dataset.id;
var dcoj = document.getElementById("jco").dataset.id;
var dpj = document.getElementById("jp").dataset.id;
var dtj = document.getElementById("jt").dataset.id;
var dcaq = document.getElementById("qca").dataset.id;
var dcoq = document.getElementById("qco").dataset.id;
var dpq = document.getElementById("qp").dataset.id;
var dtq = document.getElementById("qt").dataset.id;
var dcak = document.getElementById("kca").dataset.id;
var dcok = document.getElementById("kco").dataset.id;
var dpk = document.getElementById("kp").dataset.id;
var dtk = document.getElementById("kt").dataset.id;
var dcaas = document.getElementById("asca").dataset.id;
var dcoas = document.getElementById("asco").dataset.id;
var dpas = document.getElementById("asp").dataset.id;
var dtas = document.getElementById("ast").dataset.id;

//list 

var deck=[ca2,co2,p2,t2,ca3,co3,p3,t3,ca4,co4,p4,t4,ca5,co5,p5,t5,ca6,co6,p6,t6,ca7,co7,p7,t7,ca8,co8,p8,t8,ca9,co9,p9,t9,ca10,co10,p10,t10,caj,coj,pj,tj,caq,coq,pq,tq,cak,cok,pk,tk,caas,coas,pas,tas];
var datadeck=[dca2,dco2,dp2,dt2,dca3,dco3,dp3,dt3,dca4,dco4,dp4,dt4,dca5,dco5,dp5,dt5,dca6,dco6,dp6,dt6,dca7,dco7,dp7,dt7,dca8,dco8,dp8,dt8,dca9,dco9,dp9,dt9,dca10,dco10,dp10,dt10,dcaj,dcoj,dpj,dtj,dcaq,dcoq,dpq,dtq,dcak,dcok,dpk,dtk,dcaas,dcoas,dpas,dtas];
var ndeck=[2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11]
console.log(deck,datadeck,ndeck);

i=0;
dd = [deck[i],datadeck[i],ndeck[i]];
console.log(dd);

croupier = []; 
joueur1 = []; 
croupierp = 0; 
joueur1p = 0;
croupierstand = document.getElementById("croupierstand");
croupierpoint =  document.getElementById("pointcroupier");
croupiermain = document.getElementById("cartecroupier");
joueur1stand = document.getElementById("joueur1stand");
joueur1point = document.getElementById("pointjoueur1");
joueur1main = document.getElementById("cartejoureur1");


stand = document.getElementById("playstand")
hit = document.getElementById("playhit")
start = document.getElementById("playstart")

playhitjoueur2.setAttribute("disabled","disabled",'false')
playhitjoueur3.setAttribute("disabled","disabled")
playhitcroupier1.setAttribute("disabled","disabled")
playhitcroupier2.setAttribute("disabled","disabled")
playhitcroupier3.setAttribute("disabled","disabled")

function random(min,max){
    return Math.round(Math.random()*(max-min) + min)
}
console.log(random(0,52))



function carte_croupier(){
     k1 = random(0,52)
     k2 = random(0,52)
     console.log(k1,k2)
    
        c1(k1)
        c2(k2)  
}
console.log(carte_croupier())

function carte_joueur1(){
     k3 = random(0,52)
     k4 = random(0,52)
     console.log(k3,k4) 
    
        j1(k3)
        j2(k4)
}
console.log(carte_joueur1())

function calcul_carte_croupier(carte_croupier){
    
    gf1 = ndeck[k1] 
    gf2 = ndeck[k2]
    
    fg1 = ndeck[k1] + ndeck[k2]

    console.log(fg1)
    document.getElementById("pointcroupier").innerHTML += fg1
   
}
console.log(calcul_carte_croupier())

function calcul_carte_joueur(){
    
    nf3 = ndeck[k3]
    nf4 = ndeck[k4]
    fn1 = nf3 +nf4
    console.log(fn1)
    document.getElementById("pointjoueur1").innerHTML += fn1
}
console.log(calcul_carte_joueur())



btn = document.getElementById("playhitcroupier1");
btn.onclick = function hit1(){
    
    k5 = random(0,52)
    console.log(k5)
    c3(k5)
    gf3 = ndeck[k5]
    console.log(gf3)
    fg2 = fg1 + gf3 
    console.log(fg2)
    document.getElementById("pointcroupier").innerHTML = fg2
        if(fg2 === 21){
            console.log(document.getElementById("perdu").innerHTML += "perdu")
            playhitcroupier1.setAttribute("disabled","disabled")
            playhitcroupier2.setAttribute("disabled","disabled")
            playhitcroupier3.setAttribute("disabled","disabled")
            playhitjoueur1.setAttribute("disabled","disabled")
            playhitjoueur2.setAttribute("disabled","disabled")
            playhitjoueur3.setAttribute("disabled","disabled")  
                    }
        else if(fg2 > 21){
            console.log(document.getElementById("gagné").innerHTML += "gagné")
            playhitcroupier1.setAttribute("disabled","disabled")
            playhitcroupier2.setAttribute("disabled","disabled")
            playhitcroupier3.setAttribute("disabled","disabled")
            playhitjoueur1.setAttribute("disabled","disabled")
            playhitjoueur2.setAttribute("disabled","disabled")
            playhitjoueur3.setAttribute("disabled","disabled")  
            }
        else {
            playhitcroupier2.removeAttribute("disabled","disabled") 
        }
        }
        
btn = document.getElementById("playhitcroupier2");
btn.onclick = function hit2(){
            
    k8 = random(0,52)
    console.log(k8)
    c4(k8)
    gf4 = ndeck[k8]
    console.log(gf3)
    fg3 = fg2 + gf4 
    console.log(fg2)
    document.getElementById("pointcroupier").innerHTML = fg3
        if(fg3 === 21){
            console.log(document.getElementById("perdu").innerHTML += "perdu")
            playhitcroupier1.setAttribute("disabled","disabled")
            playhitcroupier2.setAttribute("disabled","disabled")
            playhitcroupier3.setAttribute("disabled","disabled")
            playhitjoueur1.setAttribute("disabled","disabled")
            playhitjoueur2.setAttribute("disabled","disabled")
            playhitjoueur3.setAttribute("disabled","disabled")  
                            }
        else if(fg3 > 21){
            console.log(document.getElementById("gagné").innerHTML += "gagné")
            playhitcroupier1.setAttribute("disabled","disabled")
            playhitcroupier2.setAttribute("disabled","disabled")
            playhitcroupier3.setAttribute("disabled","disabled")
            playhitjoueur1.setAttribute("disabled","disabled")
            playhitjoueur2.setAttribute("disabled","disabled")
            playhitjoueur3.setAttribute("disabled","disabled")  
                    }
        else {
            playhitcroupier3.removeAttribute("disabled","disabled")
                }
    }
    btn = document.getElementById("playhitcroupier3");
    btn.onclick = function hit3(){
                
        k9 = random(0,52)
        console.log(k9)
        c4(k8)
        gf5 = ndeck[k9]
        console.log(gf5)
        fg4 = fg3 + gf5 
        console.log(fg4)
        document.getElementById("pointcroupier").innerHTML = fg4
            if(fg4 === 21){
                console.log(document.getElementById("perdu").innerHTML += "perdu")
                playhitcroupier1.setAttribute("disabled","disabled")
                playhitcroupier2.setAttribute("disabled","disabled")
                playhitcroupier3.setAttribute("disabled","disabled")
                playhitjoueur1.setAttribute("disabled","disabled")
                playhitjoueur2.setAttribute("disabled","disabled")
                playhitjoueur3.setAttribute("disabled","disabled")  
                                }
            else if(fg4 > 21){
                console.log(document.getElementById("gagné").innerHTML += "gagné")
                playhitcroupier1.setAttribute("disabled","disabled")
                playhitcroupier2.setAttribute("disabled","disabled")
                playhitcroupier3.setAttribute("disabled","disabled")
                playhitjoueur1.setAttribute("disabled","disabled")
                playhitjoueur2.setAttribute("disabled","disabled")
                playhitjoueur3.setAttribute("disabled","disabled")  
                        }
            else {
                playhitcroupier3.removeAttribute("disabled","disabled")
                    }
        }
              
    
btn = document.getElementById("playhitjoueur1");
btn.onclick = function hit4(){
    
    k6 = random(0,52)
    console.log(k6)
        j3(k6)
        nf5 = ndeck[k6]
        console.log(nf5)
        fn2 = fn1 + nf5
        console.log(fn2)
        document.getElementById("pointjoueur1").innerHTML = fn2
        if (fn2 === 21){
            console.log(document.getElementById("gagné").innerHTML += "gagné")
            playhitcroupier1.setAttribute("disabled","disabled")
            playhitcroupier2.setAttribute("disabled","disabled")
            playhitcroupier3.setAttribute("disabled","disabled")
            playhitjoueur1.setAttribute("disabled","disabled")
            playhitjoueur2.setAttribute("disabled","disabled")
            playhitjoueur3.setAttribute("disabled","disabled")  
        }
        else if (fn2 > 21 ){
            console.log(document.getElementById("perdu").innerHTML += "perdu")
            playhitcroupier1.setAttribute("disabled","disabled")
            playhitcroupier2.setAttribute("disabled","disabled")
            playhitcroupier3.setAttribute("disabled","disabled")
            playhitjoueur1.setAttribute("disabled","disabled")
            playhitjoueur2.setAttribute("disabled","disabled")
            playhitjoueur3.setAttribute("disabled","disabled")  
        }   
        else {
            playhitjoueur2.removeAttribute("disabled","disabled")
        } 
            
    }   
    btn = document.getElementById("playhitjoueur2");
    btn.onclick = function hit5(){
        
        k7 = random(0,52)
        console.log(k7)
            j4(k7)
            nf6 = ndeck[k7]
            console.log(nf6)
            fn3 = fn2 + nf6
            console.log(fn2)
            document.getElementById("pointjoueur1").innerHTML = fn3
            if (fn3 === 21){
                console.log(document.getElementById("gagné").innerHTML += "gagné")
                playhitcroupier1.setAttribute("disabled","disabled")
                playhitcroupier2.setAttribute("disabled","disabled")
                playhitcroupier3.setAttribute("disabled","disabled")
                playhitjoueur1.setAttribute("disabled","disabled")
                playhitjoueur2.setAttribute("disabled","disabled")
                playhitjoueur3.setAttribute("disabled","disabled")  
            }
            else if (fn3 > 21 ){
                console.log(document.getElementById("perdu").innerHTML += "perdu")
                playhitcroupier1.setAttribute("disabled","disabled")
                playhitcroupier2.setAttribute("disabled","disabled")
                playhitcroupier3.setAttribute("disabled","disabled")
                playhitjoueur1.setAttribute("disabled","disabled")
                playhitjoueur2.setAttribute("disabled","disabled")
                playhitjoueur3.setAttribute("disabled","disabled")  
            }   
            else {
                playhitjoueur3.removeAttribute("disabled","disabled")
            } 
                
        }
        btn = document.getElementById("playhitjoueur3");
        btn.onclick = function hit6(){
            
            k8 = random(0,52)
            console.log(k8)
                j5(k8)
                nf7 = ndeck[k8]
                console.log(nf7)
                fn4 = fn3 + nf7
                console.log(fn4)
                document.getElementById("pointjoueur1").innerHTML = fn4
                if (fn4 === 21){
                    console.log(document.getElementById("gagné").innerHTML += "gagné")
                    playhitcroupier1.setAttribute("disabled","disabled")
                    playhitcroupier2.setAttribute("disabled","disabled")
                    playhitcroupier3.setAttribute("disabled","disabled")
                    playhitjoueur1.setAttribute("disabled","disabled")
                    playhitjoueur2.setAttribute("disabled","disabled")
                    playhitjoueur3.setAttribute("disabled","disabled")  
                }
                else if (fn4 > 21 ){
                    console.log(document.getElementById("perdu").innerHTML += "perdu")
                    playhitcroupier1.setAttribute("disabled","disabled")
                    playhitcroupier2.setAttribute("disabled","disabled")
                    playhitcroupier3.setAttribute("disabled","disabled")
                    playhitjoueur1.setAttribute("disabled","disabled")
                    playhitjoueur2.setAttribute("disabled","disabled")
                    playhitjoueur3.setAttribute("disabled","disabled")  
                }   
                else {
                    playhitjoueur3.removeAttribute("disabled","disabled")
                } 
                    
            }  
           







btnstandc = document.getElementById("playstandcroupier")
btnstandc.onclick = function standcroupier(hit){
    playhitcroupier1.setAttribute("disabled","disabled")
    playhitcroupier2.setAttribute("disabled","disabled")
    playhitcroupier3.setAttribute("disabled","disabled")
    
}

btnstandj= document.getElementById("playstandjoueur1")
btnstandj.onclick = function standjoueur1(hit2){
    playhitjoueur1.setAttribute("disabled","disabled")
    playhitjoueur2.setAttribute("disabled","disabled")
    playhitjoueur3.setAttribute("disabled","disabled")
    playhitcroupier1.removeAttribute("disabled","disabled")      
} 

function win_lose(){
    
    if(fn1 === 21 ){
        console.log(document.getElementById("gagné").innerHTML += "gagné")
            playhitcroupier1.setAttribute("disabled","disabled")
            playhitcroupier2.setAttribute("disabled","disabled")
            playhitcroupier3.setAttribute("disabled","disabled")
            playhitjoueur1.setAttribute("disabled","disabled")
            playhitjoueur2.setAttribute("disabled","disabled")
            playhitjoueur3.setAttribute("disabled","disabled")  
    }
    else if(fg1 === 21){
        console.log(document.getElementById("perdu").innerHTML += "perdu")
        playhitcroupier1.setAttribute("disabled","disabled")
            playhitcroupier2.setAttribute("disabled","disabled")
            playhitcroupier3.setAttribute("disabled","disabled")
            playhitjoueur1.setAttribute("disabled","disabled")
            playhitjoueur2.setAttribute("disabled","disabled")
            playhitjoueur3.setAttribute("disabled","disabled")  
    }
        
    else if (fn1 > 21){
        console.log(document.getElementById("gagné").innerHTML += "perdu")
        playhitcroupier1.setAttribute("disabled","disabled")
            playhitcroupier2.setAttribute("disabled","disabled")
            playhitcroupier3.setAttribute("disabled","disabled")
            playhitjoueur1.setAttribute("disabled","disabled")
            playhitjoueur2.setAttribute("disabled","disabled")
            playhitjoueur3.setAttribute("disabled","disabled")  
    }
    else if (fg1 > 21){
        console.log(document.getElementById("perdu").innerHTML += "perdu")
        playhitcroupier1.setAttribute("disabled","disabled")
            playhitcroupier2.setAttribute("disabled","disabled")
            playhitcroupier3.setAttribute("disabled","disabled")
            playhitjoueur1.setAttribute("disabled","disabled")
            playhitjoueur2.setAttribute("disabled","disabled")
            playhitjoueur3.setAttribute("disabled","disabled")  
    }   
}
    console.log(win_lose())

reset = document.getElementById("playstart")
reset.onclick = function start(){
   location.reload()
}

function c1(){
    var cimg = document.createElement("img");
    var cimgsrc = deck[k1];
    var cblock = document.getElementById("cartecroupier")
        cblock.appendChild(cimgsrc);
}


function c2(){   
    var jimg = document.createElement("img");
    var jimgsrc = deck[k2];
    var jblock = document.getElementById("cartecroupier")
        jblock.appendChild(jimgsrc);
}
function c3(){
    var c3img = document.createElement("img");
    var c3imgsrc = deck[k5];
    var c3block = document.getElementById("cartecroupier")
        c3block.appendChild(c3imgsrc);
}
function c4(){
    var c4img = document.createElement("img");
    var c4imgsrc = deck[k8];
    var c4block = document.getElementById("cartecroupier")
        c4block.appendChild(c4imgsrc);
}
function c5(){
    var c5img = document.createElement("img");
    var c5imgsrc = deck[k9];
    var c5block = document.getElementById("cartecroupier")
        c4block.appendChild(c5imgsrc);
}

function j1(){
    var jimg = document.createElement("img");
    var jimgsrc = deck[k3];
    var jblock = document.getElementById("cartejoueur1")
        jblock.appendChild(jimgsrc);
}

function j2(){
    var j2img = document.createElement("img");
    var j2imgsrc = deck[k4];
    var j2block = document.getElementById("cartejoueur1")
        j2block.appendChild(j2imgsrc);
}

function j3(){
    var j3img = document.createElement("img");
    var j3imgsrc = deck[k6];
    var j3block = document.getElementById("cartejoueur1")
        j3block.appendChild(j3imgsrc);
}
function j4(){
    var j4img = document.createElement("img");
    var j4imgsrc = deck[k7];
    var j4block = document.getElementById("cartejoueur1")
        j4block.appendChild(j4imgsrc);
}
function j5(){
    var j5img = document.createElement("img");
    var j5imgsrc = deck[k8];
    var j5block = document.getElementById("cartejoueur1")
        j5block.appendChild(j5imgsrc);
}
