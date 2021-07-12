const input = document.getElementById("input");
const button = document.getElementById("button");
const resultDiv = document.getElementById("result");

button.addEventListener("click", getPrice);

// get a list of currencies from: `https://free.currconv.com/api/v7/currencies?apiKey=${apiKey}`
// I've already done it here for you...
const currencies = Currencies.AllCurrencies;
console.log(currencies);

async function getPrice() {
    var price = input.value;
    const result = await convert(price);
    resultDiv.innerHTML = `$${result}`;
}

async function convert(price) {    
    // obtain from https://free.currencyconverterapi.com/
    var apiKey = Key;
    var fromCurrency = "GBP";
    var toCurrency = "USD";
    var query = `${fromCurrency}_${toCurrency}`;
    const res = await fetch(
      `https://free.currconv.com/api/v7/convert?q=${query}&compact=ultra&apiKey=${apiKey}`
    );
    var response = await res.json();
    var conversionRate = response[query];
    var convertedPrice = price * conversionRate;
    return convertedPrice.toFixed(2);
}