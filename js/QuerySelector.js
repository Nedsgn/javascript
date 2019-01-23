//Les queryselector s'uiltiser avec les selecteurs css., par contre il nosu renvoie le 1er element sur lequel il tombe

let titre = document.querySelector("#titreH1")

console.log(titre);

titre.innerHTML="Js avec querySelector";

let image = document.querySelector(".image");//query slector renvoie le 1er element qu'il trouve

console.log(image);

let images = document.querySelectorAll(".image");//recupere tous les elements qui ont cette class

console.log(images);

//la boucle for est indispensable pour appliquer à tous elemnts le même traitement

for (let i = 0; i < images.length ; i++) {
    images[i].setAttribute("title","une image de lapins");
}

//on recupere ici toutes les images, pas uniquement celles qui ont une class

let toutesLesImages = document.querySelectorAll("img");

console.log(toutesLesImages);

image.style.display="none";


let lienRetour = document.querySelector("#retourLien"); //on selectionne l'id
    let hrefLien = lienRetour.getAttribute("href");
console.log(hrefLien);
/*ou
let hrefLien = lienRetour.href; -> beaucoup plus simple a tuiliser il faut l'utilsier


lienRetour.setAttribute("href","nouvelle valeur");
lienRetour.href ="nouvelle valeur";*/

lienRetour.href ="../html/index.html"; // ona  changé le contenu de l'href du html qui était vide