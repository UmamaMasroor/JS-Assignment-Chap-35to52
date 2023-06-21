// question 4
// Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.
function calculator(num1, num2, operator) {
    let result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        return "Invalid operator";
    }
  
    return result;
  }
  
  const num1 = prompt("Enter number 1");
  const num2 =  prompt("Enter number 2");
  const operator =  prompt("Enter operator");
  const result = calculator(num1, num2, operator);
  document.write("Result: " + result);
  