'use strict';

/*

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case

Another Solution
---------------------------------------
function isIsogram(str){ 
  return !/(\w).*\1/i.test(str)
}

---------------------------------------
function isIsogram(str){
  return new Set(str.toUpperCase()).size == str.length;
}

------------------------------------------
function isIsogram(str){
  return !str.match(/([a-z]).*\1/i);
}

*/

function isIsogram(str) {
  const newSet = new Set();
  for (let i = 0; i < str.length; i++) {
    if (newSet.has(str[i].toLowerCase())) {
      return false;
    } else {
      newSet.add(str[i]);
    }
  }
  return true;
}

console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('aba'));
console.log(isIsogram('moOse'));
