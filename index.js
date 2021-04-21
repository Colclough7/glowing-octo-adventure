const currencyOne = document.querySelector('#currency-one')
const currencyTwo = document.querySelector('#currency-two')
const amountOne = document.querySelector('#amount-one')
const amountTwo = document.querySelector('#amount-two')
const rate = document.querySelector('#rate')
const swap = document.querySelector('#swap')

//Fetch exchange rates and update the DOM 
const calculate = ()=>{
    const one = currencyOne.value
    const two = currencyTwo.value
    fetch(`https://v6.exchangerate-api.com/v6/36fe98b4ac6c41315f653ada/latest/${one}`)
    .then(res => res.json())
    .then(data => {
        const rates = data.conversion_rates[two]
        rate.innerText = `1 ${one} = ${rates} ${two}`
        amountTwo.value = (amountOne.value * rates).toFixed(2)
    })
}
//Swap Handler
const swapHandler = ()=>{
    const tempVar = currencyOne.value
    currencyOne.value = currencyTwo.value
    currencyTwo.value = tempVar 
    calculate()
}


//EVENTLISNTERS 
currencyOne.addEventListener('change',calculate)
amountOne.addEventListener('input',calculate)
currencyTwo.addEventListener('change',calculate)
amountTwo.addEventListener('input',calculate)
swap.addEventListener('click',swapHandler)
