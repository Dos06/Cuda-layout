function menuFunc() {
    var x = document.getElementById("header-menu");
    if (x.className === "header-menu") {
        x.className += " responsive";
    }
    else {
        x.className = "header-menu";
    }
}