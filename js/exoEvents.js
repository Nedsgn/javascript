console.log("ok");

let bleuBtn = document.getElementById("bleu");

bleuBtn.onclick = function () {

    let bg = document.querySelector("#paraph");

    bg.className="bleu";
};


let rougeBtn = document.getElementById("rouge");
rougeBtn.onclick = function () {


    let bg = document.querySelector("#paraph");

    bg.className="rouge";
};

let vertBtn = document.getElementById("vert");
vertBtn.onclick = function () {


    let bg = document.querySelector("#paraph");

    bg.className="vert";
};

let initBtn = document.getElementById("init");
initBtn.onclick = function () {


    let bg = document.querySelector("#paraph");

    bg.className="";
};

