const numOne = document.getElementById('num1')! as HTMLInputElement
const numTwo = document.getElementById('num2')! as HTMLInputElement
const button = document.getElementById('add')

const add = (num1: number, num2: number) => {
  return num1 + num2
}

button.addEventListener('click', () => {
  console.log(add(+numOne.value, +numTwo.value))
})