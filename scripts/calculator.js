// Create a simple calculator that given a string of operators  +, -, *, / and numbers separated by spaces returns the value of that expression

// Example:

// Calculator().evaluate("2 / 2 + 3 * 4 - 6") # => 7
// Remember about the order of operations! Multiplications and divisions have a higher priority and should be performed left-to-right.
// Additions and subtractions have a lower priority and should also be performed left-to-right.


class Calculator2 {
    constructor() {
        this.evaluate = string => eval(string);
    }
}
let calculate2 = new Calculator2();

// console.log(calculate2.evaluate('10 * 5 / 2'));

// ********************************************************************************************************************************************************
class Calculator {
    constructor() {
        this.evaluate = string => {
      
		if (!string.match(/^\d+( [\+\-\/\*] \d+)*$/)) return null;

		let ops = string.split(" ");
		let opsSimple = [];

		for (let i = 0; i < ops.length; i++) {
			if (ops[i] === '*') {
			const val = opsSimple.pop();
			opsSimple.push(val * Number(ops[i+1]).toFixed(15));
			i++;
			} else if (ops[i] === '/') {
			// do not allow division by zero!
			if (ops[i+1] === "0") return "Error! Division by zero!";
			const val = opsSimple.pop();
			opsSimple.push(val / Number(ops[i+1]).toFixed(15));
			i++;
			} else {
			opsSimple.push(ops[i]);
			}
		}
		
		let result = parseInt(opsSimple[0]);
		
		for (let i = 1; i < opsSimple.length; i = i + 2) {

			if (opsSimple[i] === '+') {

			result += parseFloat(opsSimple[i+1]);

			} else {

			result -= parseFloat(opsSimple[i+1]);
			
			}
		}

		return result
		}
    }
}
let calculate = new Calculator();
// console.log(calculate.evaluate('10 * 5 / 2'));