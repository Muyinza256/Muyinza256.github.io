var animationSelectBox = document.getElementById("animationSelect");
//var mainTextArea = document.getElementById("mainTextArea");
//var fontSizeSelectBox = document.getElementById("fontSizeSelect");

window.onload = function(){
    document.getElementById("animationSelect").onchange = onAnimationChange;
    document.getElementById("fontSizeSelect").onchange = onFontSizeChange;
}

function onAnimationChange(){        
    selectedOption = document.getElementById("animationSelect").value;
    document.getElementById("mainTextArea").value = ANIMATIONS[selectedOption];
}

function onFontSizeChange(){        
    document.getElementById("mainTextArea").style.fontSize = document.getElementById("fontSizeSelect").value;
}