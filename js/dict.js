$(document).ready(function(){
    $("#lookUp").click(function(){
        handleLookUp();
    });
});

function handleLookUp(){
    $("#resultsList").empty();
    var text = $("#searchTxtBx").val();    
    $.ajax({
        type:'GET',
        url:'http://localhost:8084/WebDictionary/dictServlet?searchWord='+text,        
        error:function() {
            alert("error");
        },
        success:function(data) {
            var obj = JSON.parse(data);
            for (i = 0; i < obj.length; i++) { 
                $("#resultsList").append('<li>'+obj[i].definition+'</li>');
            }
        }
    });
}