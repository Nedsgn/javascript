console.log("OK.");


let toutesLesImages =
    document.getElementsByClassName("slide");
toutesLesImages[0].style.display = "inline";

let compteur = 0 ;

setInterval(function () {
    if(compteur < 4){
        compteur++;
    } else {
        compteur = 0;
    }

    console.log("Suivant " + compteur);
    for (let i = 0; i <toutesLesImages.length ; i++) {
        if(i === compteur){
            toutesLesImages[i]
                .style
                .display =
                "inline";

        }else{
            toutesLesImages[i]
                .style
                .display = "none";

        }

    }
}, 1000);