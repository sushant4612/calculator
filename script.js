function display(){
    let number = '';
    const buttons = document.querySelectorAll('button');
    // const display = document.querySelector('.display');
    Array.from(buttons).forEach((button)=>{
        button.addEventListener('click',(e)=>{
            console.log(e.target);
            number = number + e.target.innerHTML;
            // console.log(number);
            document.querySelector('.display').innerHTML = number;
        })
    })
}

display();

function operate(num1,num2,operator){
    switch(operator){
        case '+':
            add(num1,num2);
            break;
        case '-':
            subtract(num1,num2);
            break;
        case '*':
            multiply(num1,num2);
            break;
        case '/':
            divide(num1,num2);
            break;
    }
}

//function for addition
function add(a,b){
    return a+b;
}

//function for subtraction
function subtract(a,b){
    return a-b;
}

//function for multiplication
function multiply(a,b){
    return a*b;
}

//function for division
function divide(a,b){
    return a/b;
}