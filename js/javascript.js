




var modal = document.getElementById('modalProg');

var div = document.getElementById("event");

var span = document.getElementsByClassName("luk")[0];

div.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
