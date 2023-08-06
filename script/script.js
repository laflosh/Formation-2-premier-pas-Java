
const MODE_JEU_MOT = "m";
const MODE_JEU_PHRASE = "p";
const MODE_JEU_INCONNU = "i";

function lancerJeu(){
    let score = 0;
    let modeJeu = choisirPhraseOuMots();

    switch(modeJeu){
        case MODE_JEU_MOT:
            score = modeJeuMOTS();
        break;

        case MODE_JEU_PHRASE:
            score = modeJeuPHRASES();
        break;

        default:
            console.error("Mode de jeu inconnu " + modeJeu);
    }

    afficherResultat(score, nombreQuestions(modeJeu));
}

function nombreQuestions(modeJeu){
    switch(modeJeu){
        case MODE_JEU_MOT:
            return listeMots.length;

        case MODE_JEU_PHRASE:
            return listePhrases.length;
    }

    return 0;
}

function modeJeuMOTS(){
    return jeuTypeJacko("Entrez le mot", listeMots);
}

function modeJeuPHRASES(){
    return jeuTypeJacko("Entrez la phrase", listePhrases);
}

function jeuTypeJacko(question, valeurs){
    let score = 0;
    let limite = valeurs.length;

    for(i = 0; i <= limite -1; i++){

        if(prompt(question + " (" + (i +1) + "/" + limite + ") : " + valeurs[i]) === valeurs[i]){
            score++;
            console.log("Bravo !");   
        } else {
            console.warn("Erreur de saisie");
        }
    }

    return score;
}

function choisirPhraseOuMots(){

    let i = 0;
    while(true){

        let choix = prompt("Une liste de mots ou de phrase? Veuillez écrire 'mots' ou 'phrases'");

        switch(choix){

            case "mots":
                console.log("Vous avez choisi mots");
                return MODE_JEU_MOT;

            case "phrases" :
                console.log("Vous avez choisi phrases");
                return MODE_JEU_PHRASE;

            default :
                console.warn("Attention, veuillez saisir mots ou phrases");
                i++;
                if(i > 1){
                    return MODE_JEU_INCONNU
                }
        }

    }
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