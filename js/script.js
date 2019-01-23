console.log("ok");


document.write("hello with javascript");//ca écrit un html sur la page html
document.write("hey youu....\n là ya retour a la ligne");
document.write("oops je veux dire <br/> comme ca ");
document.write("<h1>un autre titre avec js</h1>");

/*cherhcer un élément /pointer dans le html
il faut lui donner un nom, id ou la class .class
 */

let h1 = document.getElementById("titreH1"); //il faut le stocker dans une variable pour lui appliquer un traitement
console.log(h1);

console.log(h1.innerHTML);//inner html dégage les balises et prends juste le texte
h1.innerHTML= "hello"; //change le contenu du h1

//getelementbyid prend qu'un seul élément
let paraph = document.getElementById("paraph");
console.log(paraph);
console.log(paraph.innerHTML);

paraph.innerHTML="compris ?";

paraph.innerHTML="";

paraph.click()//si quelqu'un clique sur l'élément...

let paras= document.getElementsByClassName("paragraphes");//pointe sur plusieurs éléments

console.log(paras);

// etant donné qu'ona  +sieur class , elles sont automatiquement stockée dans un tableaux, il nous faut donc saisir leur ince pour pouvoir récupéer une seule valrur par ex

paras[0].innerHTML="je remplace le contenu du 1er paragraphe";
paras[1].innerHTML="je remplace aussi le contenu mais du 2e paragraphe";

//si on veut parcourir tous les élement de la meme class et donc du tableau en question, il faut utiliser une boucle :

for (let i = 0; i < paras.length ; i++) {
    paras[i].innerHTML = "Même texte pour tout le monde";
}

let lienVersGoogle = document.getElementById("googlelien");

//recupere l'attribu et non l'élément (class,; id...)
    let href = lienVersGoogle.getAttribute("href");//lattribu d'un a c'est href, on récupere donc son attribu et ca l'affiche dans la console, ca peut etre pour une img : src, title...

//affiche le contenu de cet attribu, donc le lien
console.log(href);

//change l'url du lien href : changer la valeur de l'attribu : nom de lattribu virgule la valeur
lienVersGoogle.setAttribute("href","https://apple.com");

//on change ici l'image de base (src) et la description (title)
let image = document.getElementById("image");
image.setAttribute("src","http://www.monlapinnain.net/img/livre.jpg");
image.setAttribute("title","image de deux lapins");
image.setAttribute("alt","image de deux  petits lapins");

/*click.click(alert('Hello !'));*/

let mesTitres = document.getElementsByTagName("h1");//recupere tous les elments qui ont ce tag , ici les h1 et on leur applique toutes le smeme styles

for (let i = 0; i < mesTitres.length ; i++) {

    mesTitres[i].innerHTML = " Un titre h1";

}