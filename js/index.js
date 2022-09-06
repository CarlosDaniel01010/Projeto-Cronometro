var hh = 0;
var mm = 0;
var ss = 0;

function ativarContagem(){
    tempo = setInterval(interval, 1000);
}
function pararContagem(){
    clearTimeout(tempo);
}
function zerarContagem(){
    clearInterval(tempo);
    document.getElementById('tempo').innerHTML = "00:00:00";
}

function interval(){
    ss++;
    var cronometro = document.getElementById('tempo').innerHTML;
    if(ss == 60){
        mm++;
        ss = 0;
        if(mm == 60){
            hh++;
            mm = 0;
        }
    }
    document.getElementById("tempo").innerHTML = doisDigitos(hh)+":"+doisDigitos(mm)+":"+doisDigitos(ss);
}
function doisDigitos(digito){
    if(digito < 10){
        return("0"+ digito);
    }else{
        return(digito);
    }
}