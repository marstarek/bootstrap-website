let body = document.querySelector("html");
let dir = body.getAttribute("dir");

function setAr() {
    body.setAttribute("dir", "rtl");
}

function setEr() {
    body.setAttribute("dir", "ltr");
}