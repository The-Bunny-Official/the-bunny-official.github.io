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

function loadfooter() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("foot").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "footer.html", true);
    xhttp.send();
}

document.addEventListener("DOMContentLoaded", loadmenubar);
document.addEventListener("DOMContentLoaded", loadfooter);

function menu(x) {
    x.classList.toggle("change");
    document.getElementsByClassName("mobile-menu")[0].classList.toggle("mobile-view");
}

document.addEventListener("DOMContentLoaded", function(){
    width = window.innerWidth;
    if (width <= 600){
        document.getElementsByClassName("menubar").classList.toggle("hidden");
    }
});
