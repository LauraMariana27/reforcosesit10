function checkMajority() {
    var bornMonth = document.getElementById("clientBirthM").valueAsNumber;
    var bornYear = document.getElementById("clientBirthY").valueAsNumber;
    var res = document.getElementById("result");

    if (isNaN(bornYear)) {
        res.textContent = "Escreva apenas números";
        res.style.color = "red";
        return;
    }

    if (isNaN(bornMonth)) {
        res.textContent = "Escreva apenas números";
        res.style.color = "red";
        return;
    }

    const thisMonth = new Date().getMonth();
    const thisYear = new Date().getFullYear();
    var ageMonth = thisMonth + (bornMonth % 12);
    var ageYear = thisYear - bornYear;

    if(thisMonth < bornMonth){
        ageYear = ageYear - 1
    }
    document.getElementById("clientAge").innerHTML = `Você tem ${ageYear} anos e ${ageMonth} meses de idade!`

    if(ageYear >= 18){
        res.textContent = "Maior de 18! Pode entrar!"
        res.style.color = "green"
    }else{
        res.textContent = "Menor de 18! Não pode entrar!"
        res.style.color = "red"
    }
}