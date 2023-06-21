// Write a custom function power ( a, b ), to calculate the value of
// a raised to b.
function power(a, b) {
    let number = 1;
    
    for (let i = 0; i < b; i++) {
      number *= a;
    }
    
    return number;
  }
  
  console.log(power(6, 2)); 
  
  