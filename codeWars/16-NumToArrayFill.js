'use strict';

/*

Get the number n (n>0) to return the reversed sequence from n to 1.

Example : n=5 >> [5,4,3,2,1]

Another Methods
-------------------------------

const reverseSeq = n => {
  return Array(n).fill(0).map((e, i) => n - i );

-------------------------------
const reverseSeq = length => Array.from({length}, () => length--);

-----------------------------------
const reverseSeq = num => {
  return new Array(num)
      .fill()
      .map((d, i) => i + 1)
      .reverse()
};
};

*/

const reverseSeq = n => {
  // const final = [];
  // if (n > 0) for (let i = n; i >= 1; i--) final.push(i);
  // return final;
};

console.log(reverseSeq(5));
