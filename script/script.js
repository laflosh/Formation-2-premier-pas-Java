let i = 0;
let choix = "";

function lancerJeu(){
    choix = choisirPhraseOuMots();
    let score = 0;
    let nombreQuestion = 0;

    if (choix === "mots"){
        score = lancerBoucleDeJeu(choix);
        nombreQuestion = listeMots.length;
    }

    else (choix === "phrases");{
        score = lancerBoucleDeJeu(choix);
        nombreQuestion = listePhrases.length;
    }

    afficherResultat(score,nombreQuestion);

}

function lancerBoucleDeJeu(choix){
    if (choix === "mots"){
        while (i < 3){
            let score = 0;
           let motUtilisateur =  prompt("Entrez le mot :" + listeMots[i]);
           
           if(motUtilisateur === listeMots[i]){
           score++;
           
           console.log("Bravo !");
               
           
           } 
           else {
           console.log("Erreur de frappe");
           
           }
           
           i++;
       }
       return score
   }
   
   else (choix === "phrases");{
       while (i < 3){
            let score = 0;
            let motUtilisateur =  prompt("Entrez la phrase :" + listePhrases[i]);
           
           if(motUtilisateur === listePhrases[i]){
           score++;
           
           console.log("Bravo !");
               
           
           } 
           else {
            console.log("Erreur de frappe");
           
            }
           
       i++;
       }
   }
}

function afficherResultat(score,nombreQuestion){
    console.log("Votre score est de : "+score+" sur "+nombreQuestion);

}

function choisirPhraseOuMots(){
    while (choix !== "mots" && choix !=="phrases"){
        choix = prompt("Une liste de mots ou de phrase? Veuillez écrire 'mots' ou 'phrases'");
    }    
    
    return choix
}