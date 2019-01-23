console.log("ok");

//maniere plus simple pour récupérer des pointeurs . on utilise ca souvent sur les href les src mais surtout sur les attributs class. ex :

let image = document.getElementById("attributeImage");
console.log(image.src);
//console.log(image.getAttribute("src"));

console.log(image.title);
//console.log(image getAttribute("title"));

console.log(image.alt);
//console.log(image getAttribute("alt"));

image.alt="Images sur les attributs";
//image.setAttribute("alt","Images sur les attributs");

image.title="Images sur les attributs mdrrrrrrrrrrrrrrrrrrrrrrrrr";


//on va donner une class au h1 dynamiquement avec le js

//on recup dabord l'élement

let lienH1 = document.getElementById("attributeTitle");
console.log(lienH1);



lienH1.className ="test"; //lélément.nouvel attribut : className avec le nom test. on utilise ça avec les formulaires par ex
//on a ecrit un css dont on aura besoin plus tard. on peut lappliquer uniquement dans certains cas ex: bordure en rouges quand on ne remplis pas le formulaire


let imageAttr = document.getElementById("attributeImage");

imageAttr.className="taille";

let paraph = document.querySelector("#attributeParaph");

    paraph.className="textColor";