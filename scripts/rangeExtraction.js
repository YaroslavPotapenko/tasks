
// ***************************************************************************************************************************************************************

// A format for expressing an ordered list of integers is to use a comma separated list of either
//
// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example ("12, 13, 15-17")
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.
//
// Example:
//
// solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-6,-3-1,3-5,7-11,14,15,17-20"


function solution(list){
    let result = [];
    let i, j;
    
    for (i = 0; i < list.length; i = j + 1) {
        result.push(list[i]);
        for (j = i + 1; j < list.length && list[j] == list[j-1] + 1; j++);
        j--;
        if (i == j) {
            result.push(",");
        } else if (i + 1 == j) {
            result.push(",", list[j], ",");
        } else {
            result.push("-", list[j], ",");
        }
    }
    result.pop();
    return result.join("");
}// console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));