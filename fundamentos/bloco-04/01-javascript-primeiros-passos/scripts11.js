let salarioBruto = 10000;
let salarioLiquidoINSS = null;
let aliquota8 = salarioBruto * 8 / 100;
let aliquota9 = salarioBruto * 9 / 100;
let aliquota11 = salarioBruto * 11 / 100;
let aliquotaMaxima = salarioBruto - 570.88;

if (salarioBruto <= 1556.94){
    salarioLiquidoINSS = salarioBruto - aliquota8;
}
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    salarioLiquidoINSS = salarioBruto - aliquota9;
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    salarioLiquidoINSS = salarioBruto - aliquota11;
}
else {
    salarioLiquidoINSS = aliquotaMaxima;
}

let salarioFinal = null;
let aliquota75 = salarioLiquidoINSS * 7.5 / 100 + 142.80;
let aliquota15 = salarioLiquidoINSS * 15 / 100 + 354.80;
let aliquota225 = salarioLiquidoINSS * 22.5 / 100 + 636.13;
let aliquota275 = salarioLiquidoINSS * 27.5 / 100 + 869.36;

if (salarioLiquidoINSS <= 1903.98) {
    salarioFinal = salarioLiquidoINSS;
    console.log("R$" + " " + salarioFinal);
}
else if (salarioLiquidoINSS >= 1903,99 && salarioLiquidoINSS <= 2826.65) {
    salarioFinal = salarioLiquidoINSS - aliquota75;
    console.log("R$" + " " + salarioFinal);
}
else if (salarioLiquidoINSS >= 2826.66 && salarioLiquidoINSS <= 3751.05) {
    salarioFinal = salarioLiquidoINSS - aliquota15;
    console.log("R$" + " " + salarioFinal);
}
else if (salarioLiquidoINSS >= 3751.06 && salarioLiquidoINSS <= 4664.68) {
    salarioFinal = salarioLiquidoINSS - aliquota225;
    console.log("R$" + " " + salarioFinal);
}
else {
    salarioFinal = salarioLiquidoINSS - aliquota275;
    console.log("R$" + " " + salarioFinal);
}