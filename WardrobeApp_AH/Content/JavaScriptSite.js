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
    x.style.fontsize = "100px";

}

function HoverOut(x) {
    x.style.color = "darkgreen";
    x.stlye.fontsize = "100%";
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

function GetGame() {
    var gameArray = new Array(0);
    var userResponse = confirm('Would you like to play a game?');
    while (userResponse) {
        var guess = prompt('Please guess Dobbys favorite clothing item');
        userResponse = confirm('Would you like to add another guess');
        gameArray.push(guess);

    }

    var fav = 'sock';

    if (guess == 'sock') {
        //x.getElementById('gr').innerHTML = 'You have guessed Dobbys favorite clothing item!';
        alert('You guessed Dobbys favorite item!');
    }

    else if (guess != 'sock') {
        //x.getElementById('gr').innerHTML = 'You lose the game.';
        alert('You lose the game!');
    }

}


function RemoveImg(x) {
    x.style.display = "none";
}


function AddFunction() {
    var x = document.getElementById("mainsection");
    var userResponse = prompt('Welcome to Dobbys Closet. What is your name?');
    x.getElementsByTagName('h1')[0].innerText = 'Welcome to Dobbys Closet ' + userResponse;
}

function backgroundSwitch() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        document.getElementById("bgimg1").className = "scrollhanger";
    }

    else {
        document.getElementById("bgimg1").className = "";
    }
}



function displayitem() {
    var aTags = document.getElementsByTagName("a");
    var searchText = "Summer";
    var foundArray = new Array;


    for (var i = 0; i < aTags.length; i++) {
        if (aTags[i].innerHTML == summer) {
            foundArray.push(atag);
        }
    }
    console.log(foundArray);
}