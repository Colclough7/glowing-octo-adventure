const currencyOne = document.querySelector('#currency-one')
const currencyTwo = document.querySelector('#currency-two')
const amountOne = document.querySelector('#amount-one')
const amountTwo = document.querySelector('#amount-two')
const rate = document.querySelector('#rate')
const swap = document.querySelector('#swap')

//Fetch exchange rates and update the DOM 
const calculate = async()=>{
    const one = currencyOne.value
    const two = currencyTwo.value
    try {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/36fe98b4ac6c41315f653ada/latest/${one}`)
    const data = await response.json()
    const {conversion_rates} = data 
    const currancyRate = conversion_rates[two]
    rate.innerHTML = `1 ${one} = ${currancyRate} ${two}`
    amountTwo.value = (amountOne.value * currancyRate).toFixed(2)
    } catch (error) {
    console.log(error)   
    }  
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
