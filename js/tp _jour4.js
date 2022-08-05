/* Avec un tableau de votre choix : 
	- trier le tableaux par ordre croissant
	- cherchez le maximum et le minimum dans le tableau
	- afficher les nombres pairs du tableau seulement
	- affichez les nombres impairs du tableau seulement
	- explorez d'autres methodes possibles applicables aux tableaux  */



const tableau =[22,67,79,73,23,25,28,29,28,45,39,59]    
const compar = (a, b) =>a-b;
tableau.sort(compar);

const min =tableau =>tableau.reduce((c ,d)=> Math.min(c,d));
const max =tableau =>tableau.reduce((c,d)=> Math.max(c,d));

console.log("MIN:",min(tableau));
console.log("MAX:",max(tableau));

function check(){
    var nbr =[1,3,4,6,15,26,27,34,26,36,73,75,22,35,367,654,]
    nbr= number(document.getElementById("entier").value);
    if (nbr % 2 == 0){     
    alert ("nombre pair")
    }
    else{
        alert("nombre impair")
    }
}

