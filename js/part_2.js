let x = parseFloat(prompt("Введите число 1"));
let y = parseFloat(prompt("Введите число 2"));
let znak = prompt("Введите математический знак", "+ - * / %");

function doMath(x, znak, y) {
  const noCorrect = 'Не корректные данные'
    if (isNaN(x) || isNaN(y)) {
      return NaN;
    }
  
    switch (znak) {
      case "+":
        return x + y;
      case "-":
        return x - y;
      case "*":
        return x * y;
      case "/":
        if (y === 0) {
          return NaN;
        }
        return x / y;
      case "%":
        if (y === 0) {
          return NaN;
        }
        return x % y;
      
      default:
        return NaN;
    }
  }
 
  let result = doMath(x, znak, y);
  if (isNaN(result)) {
    console.log("Не коректные данные");
  } else {
    console.log(result);
  }
    

