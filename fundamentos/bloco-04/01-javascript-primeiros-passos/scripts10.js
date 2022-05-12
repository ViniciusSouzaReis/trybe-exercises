const costPrice = 200;
const costSell = 250;
let taxes = costPrice * 20 / 100;
let finalPrice = costPrice + taxes;
let profit = costSell - finalPrice;
let totalProfit = profit * 1000;

if (totalProfit > 0) {
    console.log("Terá um lucro total de" +" "+totalProfit);
}
else {
    console.log("erro");
}
