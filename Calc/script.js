

// Accessing the html elements
const numberButtons = document.querySelectorAll('[number]');
const operationButtons = document.querySelectorAll('[operation]');
const equalButton = document.querySelector('[equalsBtn]');
const deleteButton = document.querySelector('[deleteBtn]');
const clearButton = document.querySelector('[clearBtn]');

numberButtons.forEach(function(button){
    button.addEventListener('click', function(){
        console.log(button.innerText);
    })
});

operationButtons.forEach(function(button){
    button.addEventListener('click', function(){
        console.log(button.innerText);
    })
});

