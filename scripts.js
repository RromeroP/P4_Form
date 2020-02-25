// window.onload = function () {
//     document.getElementById("tel").setAttribute("required", "");
// }

function change() {
    var before = document.getElementById("before").checked
    var book = document.getElementById("book");
    var tel = document.getElementById("tel");
    var options = document.getElementById("options");

    if (before == true) {
        book.style.display = "none";
        book.removeAttribute("required");
        tel.style.display = "unset";
        tel.setAttribute("required", "");
        options.style.display = "unset";
    } else if (before == false) {
        book.style.display = "unset";
        book.setAttribute("required", "");
        tel.style.display = "none";
        tel.removeAttribute("required");
        options.style.display = "none";
    }
}