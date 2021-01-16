var numOne = document.getElementById('num1');
var numTwo = document.getElementById('num2');
var button = document.getElementById('add');
var add = function (num1, num2) {
    return num1 + num2;
};
button.addEventListener('click', function () {
    console.log(add(+numOne.value, +numTwo.value));
});
