function calcular(){

    var n1 = document.getElementById("num1").valueAsNumber;
    var n2 = document.getElementById("num2").valueAsNumber;
    var res = document.getElementById("resposta1");
    
    if(isNaN(n1) && isNaN(n2)) {
        alert("Esse caractere não é válido. Insira somente números")
        return;
    }
    res.innerHTML = n1 + n2
    if(isNaN(res)) {
        alert("Esse caractere não é válido. Insira somente números")
        return;
    }
}

function calcular(){
    var n1 = document.getElementById("nota1").valueAsNumber;
    var n2 = document.getElementById("nota2").valueAsNumber;
    var n3 = document.getElementById("nota3").valueAsNumber;
    var media = document.getElementById("resposta2");
    res = (n1+n2+n3)/3

    if (res >= 7) {
        media.innerHTML = res.toFixed(2)
        media.style.color = "green";
    } else{
        media.innerHTML = res.toFixed(2)
        media.style.color = "red";
    }
}