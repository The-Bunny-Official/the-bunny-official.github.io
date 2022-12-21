function loadmenubar() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("menubar").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "menubar.html", true);
    xhttp.send();
}
document.addEventListener("DOMContentLoaded", loadmenubar);