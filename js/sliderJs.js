console.log("ok");


let sliderImages = document.getElementsByClassName("slide");
console.log(sliderImages);
sliderImages[0].style.display="inline";//limage à la place zero sera la seule affichée


let compteur = 0;

let droiteBtn = document.querySelector("#arrow-right");

droiteBtn.onclick = function(){// ici c'est une fonction anonyme, elle n'a pas de nom car elle est liée a cet evenemnt
    if(compteur < 4)     {//s'il vaut 4 j'incremente pas , s'il vaut 3 je l'incremente
        compteur++;
        console.log(compteur);
    }else{
compteur =0;//le fait de réinitialiser à zéro, il repart en boucle et effectue ce qu'il y a en dessous
    }
    console.log("next" + compteur);

    for (let i = 0; i < sliderImages.length ; i++) {
        if (i !== compteur) {
            sliderImages[i].style.display = "none";//.style appliquer un changement de style a toutes le simg
        }else{
            sliderImages[i].style.display="inline";
        }
    }

};

let gaucheBtn = document.querySelector("#arrow-left");

gaucheBtn.onclick = function(){
    if(compteur > 0) {
        compteur--;
    }else{
        compteur = 4;
    }
    console.log("prev" + compteur);
    for (let i = 0; i < sliderImages.length ; i++) {
        if (i !== compteur) {
            sliderImages[i].style.display = "none";//.style appliquer un changement de style a toutes le simg
        }else{
            sliderImages[i].style.display="inline";
        }
    }

};

