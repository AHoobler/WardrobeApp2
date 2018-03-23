function SwapDivsWithHover(div1, div2) {
    d1 = document.getElementById(div1);
    d2 = document.getElementById(div2);
    if (d2.style.display == "none") {
        d1.style.display = "none";
        d2.style.display = "flex";
    }
    else {
        d1.style.display = "flex";
        d2.style.display = "none";
    }
}

function TextHover(x) {
    x.style.color = "red";

}

function HoverOut(x) {
    x.style.color = "darkgreen";
}


function Redirect(x) {
    var confirmButton = document.getElementById(x);
    var userResponse = confirm('You are about to leave this site. If you want to stay, please select cancel.');
    var displayContainer = document.getElementById('confirmResponse');
    var displayMessage = '';
    alert(userResponse);
    if (userResponse) {
        var win = window.open("https://www.pottermore.com/explore-the-story/dobby", '_blank');
        win.focus();
    }
}