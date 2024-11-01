function verde(){
    document.getElementById("corpo").style.backgroundColor="#0f0";
}
function amarelo(){
    document.getElementById("corpo").style.backgroundColor="#FFFF00";
}
function laranja(){
    document.getElementById("corpo").style.backgroundColor="#FFA500";
}
function branco(){
    document.getElementById("corpo").style.backgroundColor="#fff";
}
function nome(){
        if(document.getElementById("cxnome").value=="" || document.getElementById("cxemail").value==""){
            alert("Digite um valor, campo em branco");
        }
        else{
            alert("Gravado com sucesso!");
        }
}