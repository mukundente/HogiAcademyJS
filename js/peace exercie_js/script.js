// afficher hello hogi 30fois

// on peut utiliser la boucle WHILE
let i=0;
while (i<30){
    console.log("HELLO HOGI:" +i++);
}
let i=0;
 do{
console.log("hello hogi");
while(i<30)
}


// on peut utiliser la boucle for


let i=0;
for( i=0; i<30; i++);
{
    console.log("hello hogi");
}
// les objet 

const employer =[{
    nom:"keza",
    prenom:"elsa",
    age:"24",
    service:"secraitaire",
    salaire:300000
},
{
    nom:"akimana",
    prenom:"adela",
    age:"29",
    service:"etudiante",
    salaire:300000
},

{
    nom:"uwase",
    prenom:"vanessa",
    age:"20",
    service:"eleve",
    salaire:300000

},
{
    nom:"akimana",
    prenom:"lionel",
    age:"40",
    service:"commerciale",
    salaire:300000
},
{
    nom:"akiyirebwa",
    prenom:"tetha",
    age:"35",
    service:"mucisienne",
    salaire:300000 
}
];
employer.nom + "  " + employer.prenom
  

// les function  foreach

employer.forEach(Element => {
    console.log(Element.nom)
});
 let ajoutscalaire = employer.map(Element =>
    {
        return Element.salaire+=100;
    }
    )
    console.log(ajoutscalaire);


    let filtre = employer.filter(Element =>{
        return Element.age <30;
    })
    console.log(filtre);

    // 