var ImgBox = document.querySelector(".box");
var ImgWrap = document.querySelector(".imgwrap");
var originalImg = document.getElementById("original");
var line = document.getElementById("vline");


originalImg.style.width = ImgBox.offsetWidth + "px";
var leftSpace = ImgBox.offsetLeft
ImgBox.onmousemove = function(e){
    var boxWidth = (e.pageX - leftSpace) + "px";
    ImgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
}