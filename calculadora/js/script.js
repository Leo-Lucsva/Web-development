var buttons = document.querySelectorAll('.button');
var display = document.querySelector('#display');

var result = document.querySelector('#result');
var back = document.querySelector('#back');
var delet = document.querySelector('#delete');


function insert (event) {
    display.innerHTML += event.target.textContent;
    console.log(event.target.textContent);
}

buttons.forEach((button) => {
    if (button.textContent !== '<' && button.textContent !== 'C' && button.textContent !== '='){
        button.addEventListener('click', insert);
    }
});

back.addEventListener('click', function() {
    display.textContent = display.textContent.substring(0,display.textContent.length - 1);
})

delet.addEventListener('click', function () {
    display.textContent = '';
});

result.addEventListener('click', function () {
    display.textContent = eval(display.textContent);
})