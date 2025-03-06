let maxLeft;
let maxTop;
const minLeft = 0;
const minTop = 0;
let timeDelta;
let imgs =[
    "media/img/arboles/arbo11.png",
    "media/img/arboles/arbo12.png",
    "media/img/arboles/arbo13.png",
    "media/img/arboles/arbo14.png",

];
var originalX;
var originalY;

window.onload = function(){
    document.onmousedown = startDrag;
    document.onmouseup = stopDrag;
}

function sensorClick(){
    if(Date.now() - timeDelta < 150){
        createPopUp(this);
    }
}

function createPopUp(parent){
    let p = document.getElementById("popup");

    if(p){
        p.parentNode.removeChild(p);
    }

    let popup = document.createElement("div");
    popup.id = "popup";
    popup.className = "popup";
    popup.style.top = parent.y - 110 + "px";
    popup.style.left = parent.x - 75 + "px";

    let text = document.createElement("span")
    text.textContent = parent.id;
    popup.appendChild(text);

    var map = document.getElementsByClassName("map")[0];
    map.appendChild(popup);

}

function baseOnLoad(){
    var map = document.getElementsByClassName("map")[0];
    let base = document.getElementsByClassName("base")[0];
    maxLeft = base.width - 50;
    maxTop = base.height -50;
}