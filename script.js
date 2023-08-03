const listeMots = ["Cachalot","Pétunia","Serviette"];
const listePhrases = ["Pas de panique !", "La vie, l'univers et le reste", "Merci pour le poisson"];
let score = 0;
let i = 0;
let w = 0

while (w < 1){
    let choix = prompt("Une liste de mots ou de phrase? Veuillez écrire 'mots' ou 'phrases'");

    if (choix === "mots"){
        while (i < 3){
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
        
        console.log("Votre score est de : " +score+" sur 3");
        w++;
    }

    if (choix === "phrases"){
        while (i < 3){
            let motUtilisateur =  prompt("Entrez le mot :" + listePhrases[i]);
        
            if(motUtilisateur === listePhrases[i]){
            score++;
        
            console.log("Bravo !");
            
        
            } 
            else {
            console.log("Erreur de frappe");
        
            }
        
            i++;
        }
        
        console.log("Votre score est de : " +score+" sur 3");
        w++;
    }

    else {
        console.log("Veuillez choisir une liste de most ou de phrases.");

    }
}
