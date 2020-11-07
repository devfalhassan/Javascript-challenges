'use strict';

/**
 * 
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

Another solution
-----------------------------------------------
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

Another solution
-----------------------------------------------
  function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}

Another solution
-----------------------------------------------

function XO(str) {
  var sum = 0;
  for(var i=0; i<str.length; i++){
    if(str[i].toLowerCase() == 'x') sum++;
    if(str[i].toLowerCase() == 'o') sum--;
  }
  return sum == 0;
}
*
 */

const XO = str => {
  let totalX = '';
  let totalO = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === 'x') totalX += str[i];
    if (str[i].toLowerCase() === 'o') totalO += str[i];
  }

  return totalX.length === totalO.length ? true : false;
};
console.log(XO('zpzpzpp'));

console.log(XO('ooxx'));
console.log(XO('xooxx'));
console.log(XO('ooxXm'));
console.log(XO('zpzpzpp'));
console.log(XO('zzoo'));
