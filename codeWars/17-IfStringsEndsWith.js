'use strict';

/*

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string). 

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

Another Solution
-------------------------------------------
function solution(str, ending){
  return str.match(ending+"$")==ending;
}

--------------------------------------------
function solution(str, ending){
  return new RegExp(ending+"$", "i").test(str);
}

---------------------------------------------
function solution(str, ending){
  if (typeof(str) != "string" || typeof(ending) != "string")
    throw "wrong type";
  if (ending.length>str.length)
    return false;
  return str.substr(str.length-ending.length, ending.length) == ending;
}

*/

// function solution(str, ending) {
//   // TODO: complete
//   return str.endsWith(ending);
// }

const solution = (str, ending) => str.endsWith(ending);

console.log(solution('abc', 'bc'));
console.log(solution('abc', 'd'));
