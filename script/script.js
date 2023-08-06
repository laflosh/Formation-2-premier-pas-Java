/*********************************************************************************
 * 
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu. 
 * 
 *********************************************************************************/

/**
 * Cette fonction lance le jeu. 
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
 */
let btnValide = document.getElementById("btnValiderMot");
let inputEcriture = document.getElementById("inputEcriture");

function lancerJeu() {
    // Initialisations
    let score = 0;
    let listeProposition = listeMots
    let i = 0;

    let btnValide = document.getElementById("btnValiderMot");
    let inputEcriture = document.getElementById("inputEcriture");

    motsAfficher(listeProposition[i]);
    btnValide.addEventListener("click", () =>{
        console.log(inputEcriture.value)
        if(inputEcriture.value === listeProposition[i]){
            score ++;
        }
        i ++;
        afficherResultat(score, i);

        if(listeProposition[i] === undefined){
            motsAfficher("Le jeu est finis.");
            btnValide.disabled = true;

        } else{
            motsAfficher(listeProposition[i]);
        }

        afficherResultat(score, i);
    });

    let listeInputRadio = document.querySelectorAll(".optionSource input");
        for (let index = 0; index < listeInputRadio.length; index++) {
            listeInputRadio[index].addEventListener("change",(event) =>{
                if(event.target.value === "1"){
                    listeProposition = listeMots
                } else {
                    listeProposition = listePhrases
                }
                motsAfficher(listeProposition[i]);
            })
        }

}

function motsAfficher(proposition){
    let divZoneProposition = document.querySelector(".zoneProposition");
    divZoneProposition.innerText = proposition;
}

function afficherResultat(score, nombreQuestion){
    let spanScore = document.querySelector(".zoneScore span");
    spanScore = score

    let span =`
        Votre score :<span>${spanScore} / ${nombreQuestion}</span>
        `
    let divScore = document.querySelector(".zoneScore");
    divScore.innerHTML = span; 
}