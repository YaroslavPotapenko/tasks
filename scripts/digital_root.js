// ***************************************************************************************************************************************************************
//
// In this kata, you must create a digital root function.
//
// A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.
//
// Here's how it works:
//
// digital_root(16)
// => 1 + 6
// => 7
//
// digital_root(942)
// => 9 + 4 + 2
// => 15 ...
// => 1 + 5
// => 6
//
// digital_root(132189)
// => 1 + 3 + 2 + 1 + 8 + 9
// => 24 ...
// => 2 + 4
// => 6
//
// digital_root(493193)
// => 4 + 9 + 3 + 1 + 9 + 3
// => 29 ...
// => 2 + 9
// => 11 ...
// => 1 + 1
// => 2

function digital_root(n) {

    let digital = n.toString().split('');

    if (digital.length === 1) {
        return n; // if the n has only one digit return the n
    }
    
    // checking as along as the number has more than one digits
    while (digital.length > 1) {

        // sum of each value in digital
        let sum = 0;

        // when one single number in sum the while breaks and we return to if statement which contais only one element
        for (let i = 0; i < digital.length; i++) {
            let elem = Number(digital[i]);
            sum += elem;
        }
        digital = sum.toString().split('');
    }
    return Number(digital);
    
}
// console.log(digital_root(493193));