function display(){
    let number = '';
    let operations = ['%','^','÷','+','x','-'];
    const buttons = document.querySelectorAll('button');
    const display = document.querySelector('.display');

    Array.from(buttons).forEach((button)=>{
        button.addEventListener('click',(e)=>{
            console.log(e.target);
            number = number + e.target.innerHTML;
            console.log(number);
            if(e.target.innerHTML == 'C'){
              number = number.slice(0, -2)
            }
            document.querySelector('.display').innerHTML = number;
            if(number.split('').includes(operations)){
              document.querySelector(".dot").disabled = true;
            }
            
            if(number.split('').includes('.')){
              document.querySelector(".dot").disabled = false;
            }

            if(e.target.innerHTML=='AC'){
              document.querySelector('.history').innerHTML = '';
              document.querySelector('.display').innerHTML = '';
              number = '';
              // display();
            }
            if(operations.includes(e.target.innerHTML)){
                let operator = e.target.innerHTML;
                console.log(operator);
            }
            if(e.target.innerHTML == '='){
                let nums = number.split('');
                let ans = expression(nums);
                document.querySelector('.history').innerHTML = number;
                document.querySelector('.display').innerHTML = Math.round(ans * 1000000000) / 1000000000;
                // console.log(roundOffTo(ans, 10000))
            }
        })
    })
}

let arr = ["2", "8", "+", "8",'+','9','='];
// console.log(expression(arr));
// console.log('2'+'');

function expression(nums) {
  if(nums[1] == '='){
      return nums[0];
  }
  let operations = ["%", "^", "÷", "+", "x", "-",'=',];
  let ans = 0;
  let num1 = "";
  let num2 = "";
  let operator;
  //   let i = 0;
  let j;

  for (let i = 0; i < nums.length; i++) {
    if (operations.includes(nums[i])) {
      // ans = num1;
      operator = nums[i];
      j = i + 1;
      break;
    }
    num1 = num1 + nums[i];
  }

  let w;

  for (let i = j; i < nums.length; i++) {
    if (operations.includes(nums[i])) {
      w = i;
      break;
    }
    num2 = num2 + nums[i];
  }

    // ans = operate(num1, num2, operator);
//   console.log(num1);
//   console.log(operator);
//   console.log(num2);
  ans = operate(num1, num2, operator);
//   console.log(ans);
  let ans2 = ans.toString();
//   console.log(w);
//   console.log(nums)
  let arr = addAtFirst(nums.slice(w,nums.length),ans2);
  console.log(arr);
//   console.log(typeof nums);
//   console.log(typeof ans);
   
  return expression(arr);
}

//funstion to add number at start
function addAtFirst(theArray,response) {
  var newArray = [];
  newArray.push(response);

  for (var i = 0; i < theArray.length; i++) {
    newArray.push(theArray[i]);
  }

  theArray = newArray;
  delete newArray;
  return theArray;
}
// [5,2,+,6,*,=]

display();
//  console.log(operate(2,4,'+'));
//  console.log(add(2,4));

function operate(num1, num2, operator) {
  num1 = Number(num1);
  num2 = Number(num2);
  switch (operator) {
    case "+":
      return add(num1, num2);
      break;
    case "-":
      return subtract(num1, num2);
      break;
    case "x":
      return multiply(num1, num2);
      break;
    case "÷":
      return divide(num1, num2);
      break;
    case '%':
      return modulo(num1,num2);
      break;
    case '^':
      return sqrt(num1,num2);
      break;
  }
}

//function for addition
function add(a, b) {
  return a + b;
}

//function for subtraction
function subtract(a, b) {
  return a - b;
}

//function for multiplication
function multiply(a, b) {
  return a * b;
}

//function for division
function divide(a, b) {
  return a / b;
}

function sqrt(a,b){
  return a**b;
}

function modulo(a,b){
  return a%b;
}
