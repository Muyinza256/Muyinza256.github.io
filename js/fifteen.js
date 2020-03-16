$(document).ready(function(){
    init();
});

var freeSpace ={x: 300,y:300};
var currOccupied = freeSpace;

function  clickImage(){    
    $(this).css("background-image",'url(images/background.jpg)');
    $(this).css("background-position",(-300)+'px '+(-300)+'px');
}

 function init() {
    $("#puzzlearea").find("div").each(function(i){
        // calculate x and y for this piece
        var x = ((i % 4) * 100) ;
        var y = (Math.floor(i / 4) * 100) ;

        // set basic style and background
        $(this).addClass("puzzlepiece");
        $(this).css("left",x+'px');
        $(this).css("top",y+'px');
        $(this).css("background-image",'url(images/background.jpg)');
        $(this).css("background-position",(-x)+'px '+(-y)+'px');
        $(this).attr("pzzleId",""+i);
    });
};