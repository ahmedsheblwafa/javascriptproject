var subCat1 = document.getElementById("sub-cat1");

// creating elements :-

var subCat1Data = document.createElement("ul");

// subCat1Data.setAttribute("")
var brand1 = document.createElement("li");
var brand2 = document.createElement("li");
var brand3 = document.createElement("li");
var brand4 = document.createElement("li");

// entering elements value

function pic1(){

    brand1.innerHTML = '<a href="#sub-cat1" onclick="samsung()"> samsung </a>';
    brand2.innerText = "nokia";
    brand3.innerText = "shaome";
    brand4.innerText = "oppo";

    subCat1.appendChild(subCat1Data);

    subCat1Data.appendChild(brand1);
    subCat1Data.appendChild(brand2);
    subCat1Data.appendChild(brand3);
    subCat1Data.appendChild(brand4);



}
 
var leftButton = document.createElement("button");
var rightButton = document.createElement("button");
var containerDiv = document.createElement("div");
containerDiv.setAttribute("id","temp");

function samsung(){
    subCat1.appendChild(containerDiv);
    console.log("alaa")




}




