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

    let i = 0;

    let btnValide = document.getElementById("btnValiderMot");
    let inputEcriture = document.getElementById("inputEcriture");

    motsAfficher(listeMots[i]);
    btnValide.addEventListener("click", () =>{
        console.log(inputEcriture.value)
        if(inputEcriture.value === listeMots[i]){
            score ++;
        }
        i ++;
        afficherResultat(score, i);

        if(listeMots[i] === undefined){
            motsAfficher("Le jeu est finis.");
            btnValide.disabled = true;

        } else{
            motsAfficher(listeMots[i]);
        }

        afficherResultat(score, i);
    });


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