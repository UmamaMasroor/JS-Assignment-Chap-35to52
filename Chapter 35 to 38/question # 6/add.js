// Write a function that computes factorial of a number.
// 
function factorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      let result = 1;
      for (let i = 2; i <= number; i++) {
        result *= i;
      }
      return result;
    }
  }
  const num =prompt("Enter number of your own choice");
  const factorialNum = factorial(num);
  console.log(factorialNum)
  