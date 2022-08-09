function ajouter(){
    const child = document.createElement("div");
    child.setAttribute("class","umwibutsa");
    const umwibutsa=document.getElementById("input");
    child.innerHTML=umwibutsa.value;
    const parent = document.getElementById("conteneur");
    parent.appendChild(child);
} 
function supprimer(){
    var supp=document.getElementById("conteneur");
    var b=document.getElementById(conteneur.value);
    supp.remove(b);
}
