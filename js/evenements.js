//pour un evenemnt on utilise une fonciton (un traitement) . On peut lier un evnement à nimporte quel élément html

console.log("ok");

//on va appeler cette fonction dans le html
function gestionClick() {
    console.log("début de la fonction");
    let image = document.getElementById("eventsImg");

    image.className="";
    console.log("fin de la fonction");
   /* let image = document.getElementById("eventsImage");
    image.style.display="none";*/
}


//sans oublier de déclarer cetet fonction du onclick dans le html, lorsque l'on claique le texte il est rose
function changerTextColor() {
    console.log("changement couleur texte");
    let paraph = document.getElementById("eventsParaph");
    paraph.className="texteRose";

}

//fonction pour agrandir une image avec le double click ______ ondblclick="agrandirImage()"
function  agrandirImage() {

    let image = document.getElementById("eventsImage");
    image.className="grandeImage";


}
function retricir(){//ici l'image reprends sa forme intialeb
    let image =
        document.getElementById("eventsImage");
    image.className = "";
}

function agrandir() {
    let image =
        document.getElementById
        ("eventsImg");
    image.className =
        "grandeImage";
}



