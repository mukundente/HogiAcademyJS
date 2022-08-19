function creerBoutonElement(innerHTML,classe){
    const btn = document.createElement("button")
    btn.innerHTML=innerHTML
    btn.setAttribute("class",classe)
    return btn
}
function addBoutons(parent){
    const btnDiv = document.createElement("div")
    btnDiv.setAttribute("class","buttons-group")

    const btnDelete = creerBoutonElement("Supprimer","btn-delete")
    const btnModifiy = creerBoutonElement("Modifier","btn-modify") 

    //ajout des fonctions quand on clique sur modifier ou supprimer
    //supprimer : 
    
    btnDelete.addEventListener("click",()=>{
        //vous ecrivez votre code de suppression ici !
        alert("Supprime cliqué ")
    },false)

    btnModifiy.addEventListener("click",()=>{
        //vous ecrivez votre code de modification ici !
        alert("Modifié cliqué ")
    },false)


    btnDiv.appendChild(btnDelete)
    btnDiv.appendChild(btnModifiy)

    parent.appendChild(btnDiv)

    //afficher les boutons quand le curseur survole le div
    parent.addEventListener("mouseenter",()=>{
        btnDiv.style.display="flex";
    },false)

    // enlever les boutons quand le curseur sort du div
    parent.addEventListener("mouseleave",()=>{
        btnDiv.style.display="none";
    },false)
};
function ajouter(){
    const child = document.createElement("div")
    const umwibutsa = document.getElementById("input-value")
    if(umwibutsa.value.trim()=="" || umwibutsa.value.trim().length<10)
        alert("Proverbe invalide !")
    else{
        child.innerHTML=umwibutsa.value
        child.setAttribute("class","umwibutsa")
        const parent = document.getElementById("conteneur")
        addBoutons(child)
        parent.appendChild(child);
    }
}
