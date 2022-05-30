let bodyWay = document.getElementsByTagName('body');
function changeBodyColor(color) {
    bodyWay[0].style.backgroundColor = color;
}
changeBodyColor('blue');

function changeLetterColor(color) {
    bodyWay[0].style.color = color
}
changeLetterColor('yellow');

function changeFontSize(string) {
    bodyWay[0].style.fontSize = string;
}
changeFontSize('18px');

 function changeSpaceLine(string) {
     bodyWay[0].style.lineHeight = string;
 }
 changeFontSize('15px');

 function changeFontFamily(string) {
     bodyWay[0].style.fontFamily = string;
 }
 changeFontFamily('monospace');