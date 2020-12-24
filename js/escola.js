var boxZoom = document.getElementById("box_zoom");
var zoomImg = document.getElementById("imgZoom");
var images = document.querySelectorAll(".box img");

function ampliarImagem(indice){
    boxZoom.style.display = "block";
    zoomImg.src = images[indice].src;
}

boxZoom.onclick = function(){
    boxZoom.style.display = "none";
}