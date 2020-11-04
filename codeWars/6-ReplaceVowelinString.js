'use strict';
/*

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

*/

const disemvowel = str => {
  // 1) Understand the problem 100%
  //  Remove all vowel from str [a,e,i,o,u]
  // - How to remove a character in a string?
  // --------------------------------------------
  // 2) Divide and Conquer
  // - convert a,e,i,o,u to lower case
  return str
    .replace(/a/g, '')
    .replace(/A/g, '')
    .replace(/e/g, '')
    .replace(/E/g, '')
    .replace(/i/g, '')
    .replace(/I/g, '')
    .replace(/o/g, '')
    .replace(/O/g, '')
    .replace(/u/g, '')
    .replace(/U/g, '');

  // str.replace(/[aeiou]/gi, '');

  // return (str || "").replace(/[aeiou]/gi, "");

  // str.split('').filter(function(el) {
  //   return vowels.indexOf(el.toLowerCase()) == -1;
  // }).join('');
};

console.log(disemvowel('This website is for losers LOL!'));
