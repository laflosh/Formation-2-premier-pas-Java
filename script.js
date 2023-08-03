const listeMots = ["Cachalot","Pétunia","Serviette"];
let score = 0;

let motUtilisateur =  prompt("Entrez le mot :" + listeMots[0]);

    
if(motUtilisateur === listeMots[0]){
    score++;

    console.log("Bravo !");
    console.log("Votre score est de : " +score);

    } 
    else {
    console.log("Erreur de frappe");

    }

    motUtilisateur =  prompt("Entrez le mot :" + listeMots[1]);

    
if(motUtilisateur === listeMots[1]){
    score++;

    console.log("Bravo !");
    console.log("Votre score est de : " +score);

    } 
    else {
    console.log("Erreur de frappe");

    }

    motUtilisateur =  prompt("Entrez le mot :" + listeMots[2]);

    
if(motUtilisateur === listeMots[2]){
    score++;

    console.log("Bravo !");
    console.log("Votre score est de : " +score);
    
    } 
    else {
    console.log("Erreur de frappe");
    
    }
    