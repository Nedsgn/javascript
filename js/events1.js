console.log("ok");

// il faut agrendir et retrecir une image


//au moment du click voila ma fonction a executer


let plusBtn = document.getElementById("plus");
plusBtn.onclick = function(){// ici c'est une fonction anonyme, elle n'a pas de nom car elle est liée a cet evenemnt
    console.log("plus");
    //on récupere l'image en declarant une variable
    let image = document.querySelector("#img");

    image.className="grande";


};


let moinsBtn = document.getElementById("moins");
moinsBtn.onclick = function () {
    console.log("moins");

    let image = document.querySelector("#img");

    image.className="petite";
}

let initBtn = document.getElementById("init");
initBtn.onclick = function () {

    console.log("init");
    let image = document.querySelector("#img");

    image.className="";//on enleve la classe

}


function agrandir() {
    console.log("agrandir");
}

function rectrecir() {
    console.log("rectrecir");
}


let img = document.getElementById("img");

img.onmouseover= function () {
    console.log("mouse over sur l'image");
    let h1 = document.getElementById("titre1");
    h1.className="cache";
};

img.onmouseout=function () {
    let h1 = document.getElementById("titre1");
    h1.className="";}

