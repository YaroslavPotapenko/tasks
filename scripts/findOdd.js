// ***************************************************************************************************************************************************************

// Given an array, find the integer that appears an odd number of times.
// 
// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
    let result = {};
    A.forEach(function(a){
        if (result[a] != undefined) {
            result[a]++;
        } else {
            result[a] = 1;
        }
    });
    for (let key in result) {
        if (result[key] % 2 != 0) {
            return Number(key);
        }
    }
}
// console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10]));