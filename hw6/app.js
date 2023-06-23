const input = document.querySelector(".input")
const btnIncrease = document.querySelector(".increase")
const btnDecrease = document.querySelector(".decrease")

input.value = 5

btnIncrease.addEventListener('click', () => Number(input.value) !== 0 ? input.value ++ : NaN)
btnDecrease.addEventListener('click', () => Number(input.value) !== 0 ? input.value -- : NaN)