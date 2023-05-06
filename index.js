// 12
console.log("Таблиця множення (do/while):");
let x = 1;
do {
  let y = 1;
  do {
    console.log(x + " * " + y + " = " + (x * y));
    y++;
  } while (y <= 10);
  x++;
} while (x <= 10);

// calculator 
let operator;
while (true) {
  operator = prompt("Оберіть операцію (+, -, /, *):");
  if (operator === "+" || operator === "-" || operator === "/" || operator === "*") {
    break;
  }
}

let operandCount;
do {
  operandCount = parseInt(prompt("Введіть кількість операндів (від 2 до 6):"));
} while (operandCount < 2 || operandCount > 6 || isNaN(operandCount));

let operands = [];
let i = 0;
while (i < operandCount) {
  let operand;
  do {
    operand = parseFloat(prompt("Введіть операнд " + (i + 1) + ":"));
  } while (isNaN(operand));
  operands.push(operand);
  i++;
}

let result;
if (operator === "+") {
  result = 0;
  let j = 0;
  while (j < operands.length) {
    result += operands[j];
    j++;
  }
} else if (operator === "-") {
  result = operands[0];
  let k = 1;
  while (k < operands.length) {
    result -= operands[k];
    k++;
  }
} else if (operator === "/") {
  result = operands[0];
  let l = 1;
  while (l < operands.length) {
    result /= operands[l];
    l++;
  }
} else if (operator === "*") {
  result = 1;
  let m = 0;
  while (m < operands.length) {
    result *= operands[m];
    m++;
  }
}

alert("Результат: " + result);
