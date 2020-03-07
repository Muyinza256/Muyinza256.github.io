var textArea = document.getElementById("text");
var checkbox = document.getElementById('bling');
function biggerDecorationsOnClick(){    
    if (textArea.style.fontSize == "") {
        textArea.style.fontSize = "12pt";
    }
    textArea.style.fontSize = parseFloat(textArea.style.fontSize) + (2)+ "pt";
    setInterval(biggerDecorationsOnClick,500);
}
function checkBoxOnChange(){    
    var isChecked = checkbox.checked;
    if(isChecked){ //checked
        textArea.style.fontWeight = "bold";
        textArea.style.color = "green";
        textArea.style.textDecoration = "underline";
        document.body.style.backgroundImage = "url('images/hundred-dollar-bill.jpg')";
    }
}