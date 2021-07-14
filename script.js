const input = document.getElementById("input");
const button = document.getElementById("button");
const resultDiv = document.getElementById("result");
const gbpValue = document.getElementById("gbp-value");
const convertedValue = document.getElementById("converted-value");

button.addEventListener("click", getPrice);

// get a list of currencies from: `https://free.currconv.com/api/v7/currencies?apiKey=${apiKey}`
// I've already done it here for you...
const currencies = Currencies.AllCurrencies;
//console.log(currencies);

setPriceOnLoad();

async function getPrice() {
  const price = input.value;
  const result = await convert(price);
  resultDiv.innerHTML = `$${result}`;
}

async function convert(price) {
  const apiKey = Key;
  const fromCurrency = "GBP";
  const toCurrency = "USD";
  const query = `${fromCurrency}_${toCurrency}`;
  const res = await fetch(
    `https://free.currconv.com/api/v7/convert?q=${query}&compact=ultra&apiKey=${apiKey}`
  );
  const response = await res.json();
  const conversionRate = response[query];
  const convertedPrice = price * conversionRate;
  return convertedPrice.toFixed(2);
}

async function setPriceOnLoad() {
  const price = gbpValue.innerText;
  const convertedPrice = await convert(price);
  convertedValue.innerHTML = convertedPrice;
}