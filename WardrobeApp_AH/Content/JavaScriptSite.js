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

function GetGame() {
    var gameArray = new Array(0);
    var userResponse = confirm('Would you like to play a game?');
    while (userResponse) {
        var guess = prompt('Please guess Dobbys favorite clothing item');
        userResponse = confirm('Would you like to add another guess');
        gameArray.push(guess);
       
    }
   
    if (guess == 'sock') {
        
        getElementById('gameresult').innertext = 'You have guessed Dobbys favorite clothing item!';
    }

    else if (gameArray != 'sock') {
        getElementById('gameresult').innertext = 'You lose the game.';
    }

}













function FUNCTION() {
    var x = document.getElementById("mainsection");
    var userResponse = prompt('Welcome to Dobbys Closet. What is your name?');
    x.getElementsByTagName('h1')[0].innerText = 'Welcome to Dobbys Closet ' + userResponse;
}