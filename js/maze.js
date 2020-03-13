var failedTouches = 0;

$(document).ready(function(){    
    $(".boundary").mouseover(turnDivRed);
    $("#end").mouseover(reachEndDiv);
    $("#start").click(startGame);
});

function turnDivRed()
{
    failedTouches++;
    $(this).addClass("youlose");
}

function startGame()
{
    failedTouches = 0;
    $(".boundary").removeClass("youlose");
    $("#status").text("Click 'S' to begin");
    $("#maze").mouseleave(turnAllDivsRed);
}

function turnAllDivsRed()
{
    failedTouches = 4;
    $(".boundary").addClass("youlose");
    $("#status").text("Sorry, you lost. :[");
}

function reachEndDiv()
{
    if(failedTouches > 0)
    {
        $("#status").text("Sorry, you lost. :[");
    }
    else
    {
        $("#status").text("You win! :]");
    }
}