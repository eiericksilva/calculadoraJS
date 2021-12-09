function inserir(num){
    var numero = document.getElementById("tela").innerHTML;
    document.getElementById("tela").innerHTML = numero + num;
}
function limparTela(tela){
    document.getElementById("tela").innerHTML="";
}
function limparUltimo(){
   var tela = document.getElementById("tela").innerHTML;
   document.getElementById("tela").innerHTML = tela.substring(0, tela.length -1)
}
function calcular(){
    var tela = document.getElementById("tela").innerHTML;
    if(tela){
        document.getElementById("tela").innerHTML = eval(tela);
    }else{
        document.getElementById('tela').innerHTML = "Sem dados..."
    }
}