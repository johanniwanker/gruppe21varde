var modal1 = document.querySelector(".modal1");
var modal2 = document.querySelector(".modal2");
var modal3 = document.querySelector(".modal3");
var modal4 = document.querySelector(".modal4");
var modal5 = document.querySelector(".modal5");

var visModalSigurd = document.querySelectorAll(".eventSigurd");
var visModalMikkel = document.querySelectorAll(".eventMikkel");
var visModalSmed = document.querySelectorAll(".eventSmed");
var visModalHonning = document.querySelectorAll(".eventHonning");
var visModalGarn = document.querySelectorAll(".eventGarn");

var lukModal1 = document.querySelector(".luk1");
var lukModal2 = document.querySelector(".luk2");
var lukModal3 = document.querySelector(".luk3");
var lukModal4 = document.querySelector(".luk4");
var lukModal5 = document.querySelector(".luk5");


for(var i=0;i<visModalSigurd.length;i++){
visModalSigurd[i].addEventListener("click", function(event){
    modal1.style.display = "block";
})};
lukModal1.addEventListener("click", function(event){
    modal1.style.display = "none";
});

window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}


for(var i=0;i<visModalMikkel.length;i++){
visModalMikkel[i].addEventListener("click", function(event){
    modal2.style.display = "block";
})};
lukModal2.addEventListener("click", function(event){
    modal2.style.display = "none";
});
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}


for(var i=0;i<visModalSmed.length;i++){
visModalSmed[i].addEventListener("click", function(event){
    modal3.style.display = "block";
})};
lukModal3.addEventListener("click", function(event){
    modal3.style.display = "none";
});
window.onclick = function(event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}


for(var i=0;i<visModalHonning.length;i++){
visModalHonning[i].addEventListener("click", function(event){
    modal4.style.display = "block";
})};

lukModal4.addEventListener("click", function(event){
    modal4.style.display = "none";
});


for(var i=0;i<visModalGarn.length;i++){
visModalGarn[i].addEventListener("click", function(event){
    modal5.style.display = "block";
})};
lukModal5.addEventListener("click", function(event){
    modal5.style.display = "none";
});
