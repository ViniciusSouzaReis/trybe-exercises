document.querySelector("header").style.backgroundColor = "lime";
document.getElementById("container").style.backgroundColor= "whitesmoke";
document.querySelector(".emergency-tasks").style.backgroundColor = "coral";
document.querySelector(".no-emergency-tasks").style.backgroundColor = "yellow";
document.getElementsByTagName("h3");

let h3 = document.getElementsByTagName('h3');
for (let i = 0; i < h3.length; i += 1) {
    if (i < 2) {
        h3[i].style.backgroundColor = "purple";
    } else {
        h3[i].style.backgroundColor = "black";
    }
}
console.log(h3.length);

document.getElementById("footer-container").style.backgroundColor = "green";