let api = ('https://v6.exchangerate-api.com/v6/c9cf8ef2211ad1c1e3aa6f8d/latest/USD')

const fromDropDown = document.getElementById('from-currency-select');
const toDropDown = document.getElementById('to-currency-select'); 

// creating the from drop-down options from the currencies array
currencies.forEach((currency) => {
    const option = document.createElement('option');
    option.value = currency;
    option.text = currency;
    fromDropDown.add(option); 
    
});

// creating the to-drop-down menu 
currencies.forEach((currency) => {
    const option = document.createElement('option'); 
    option.value = currency;
    option.text = currency; 
    toDropDown.appendChild(option); 
})

// setting default values
fromDropDown.value = "USD";
toDropDown.value = "INR";

let convertCurrency = () => {
    // create references
    const amount = document.querySelector('#amount').value;
    const fromCurrency = fromDropDown.value;
    const toCurrency = toDropDown.value; 

    // A condition to check if the user type in a value or not
    if (amount.length != 0){
        fetch(api)
        .then((response) => response.json())
        .then((data) => {
            let fromExchangeRate = data.conversion_rates[fromCurrency];
            let toExchangeRate = data.conversion_rates[toCurrency];
            let convertedValue = (amount / fromExchangeRate) * toExchangeRate;
            document.querySelector('#result').innerHTML = `${amount} ${fromCurrency} = ${convertedValue.toFixed(2)} ${toCurrency}`;
        })
    } else {
        alert('Please Enter The Amount You Wish To Convert!');
    }
}

document.querySelector('#convert-button').addEventListener('click', convertCurrency);
window.addEventListener('load', convertCurrency);

