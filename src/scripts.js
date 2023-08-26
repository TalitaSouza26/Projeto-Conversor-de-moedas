const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector('.currency-select')

function convertValues() {
    const inputCurrencyValue = document.querySelector('.input-currency').value
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert')
    const currencyValueConvertd = document.querySelector('.currency-value')
    console.log(currencySelect.value)
    const dolarToday = 5.2
    const euroToday = 6.4



    if (currencySelect.value == 'dolar') {
        currencyValueConvertd.innerHTML = new Intl.NumberFormat('en-US', { style: "currency", currency: 'USD' }).format(inputCurrencyValue / dolarToday)

    }
    if (currencySelect.value == 'euro') {
        currencyValueConvertd.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(inputCurrencyValue / euroToday)

    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', { style: "currency", currency: 'BRL' }).format(inputCurrencyValue)
}
function changeCurrency() {
    const currencyName = document.getElementById('currency-name')
    const currencyimg = document.querySelector('.currency-img')

    if (currencySelect.value == 'dolar') {
        currencyName.innerHTML = 'Dólar americano'
    }
    currencyimg.src = './css/img/estados-unidos (1) 1.png'

    if (currencySelect.value == 'euro') {
        currencyName.innerHTML = 'Euro'
        currencyimg.src = './css/img/Design sem nome 3.png'
    }

    convertValues()

}
currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues)