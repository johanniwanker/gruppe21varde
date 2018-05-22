var modal = document.querySelector(".modal");
var visModal = document.querySelectorAll(".event");
var lukModal = document.querySelector(".luk");

visModal[0].addEventListener("click", function(event){
    modal.style.display = "block";
});

lukModal.addEventListener("click", function(event){
    modal.style.display = "none";
});

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
