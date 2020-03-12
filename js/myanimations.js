"use strict"

var currentAnimation = "Blank";
var currentFontSize = "12pt";
var currentCustomText = "";
var animationInterval;
var animationSpeed = 250;
var isAnimationRunning = false;

window.onload = function(){
    document.getElementById("animationSelect").onchange = onAnimationChange;
    document.getElementById("fontSizeSelect").onchange = onFontSizeChange;
    document.getElementById("start").onclick = onStartBtnClick;
    document.getElementById("stop").onclick = onStopBtnClick;
    document.getElementById("mainTextArea").onkeypress = setCustomText;
    document.getElementById("turboCheckbox").onclick = onClickTurboBtn;
}

function onClickTurboBtn()
{
    if(document.getElementById("turboCheckbox").checked)
    {
        animationSpeed = 50;
    }
    else
    {
        animationSpeed = 250;
    }
    if(isAnimationRunning)
    {
        onStopBtnClick();
        onStartBtnClick();
    }
}

function onAnimationChange(){        
    selectedOption = document.getElementById("animationSelect").value;
    changeAnimation(selectedOption);
}

function setCustomText()
{
    currentCustomText = document.getElementById("mainTextArea").value;    
}

function getNextAnimation()
{    
    if(currentAnimation == "Blank")
    {
        return "Custom";
    }
    else if(currentAnimation == "Custom")
    {
        return "Exercise";
    }
    else if(currentAnimation == "Exercise")
    {              
        return "Juggler";
    }
    else if(currentAnimation == "Juggler")
    {              
        return "Bike";
    }
    else if(currentAnimation == "Bike")
    {
        return "Dive";        
    }
    else if(currentAnimation == "Dive")
    {
        return "Blank";
    }
}

function changeAnimation(option){    
    if(option == "Custom")
    {
        document.getElementById("mainTextArea").value = currentCustomText;
    }
    else
    {
        document.getElementById("mainTextArea").value = ANIMATIONS[option];
    }    
    currentAnimation = option;
}

function onStartBtnClick()
{
    animationInterval = setInterval(startAnimation,animationSpeed);
}

function onStopBtnClick()
{
    clearInterval(animationInterval);
    isAnimationRunning = false;
    (function(){
        document.getElementById("start").disabled = false;
        document.getElementById("animationSelect").disabled = false;
    })();
}

function startAnimation()
{
    var anime = getNextAnimation();
    changeAnimation(anime);
    isAnimationRunning = true;
    (function(){
        document.getElementById("start").disabled = true;
        document.getElementById("animationSelect").disabled = true;
    })();
}

function setFontSize(newFontSize){
    document.getElementById("mainTextArea").style.fontSize = newFontSize;
}

function onFontSizeChange(){
    setFontSize(document.getElementById("fontSizeSelect").value);
}