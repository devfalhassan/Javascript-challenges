'use strict';

/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

Another Methods
----------------------------------------------------
var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}

---------------------------------------------------------------

*/

var uniqueInOrder = function (iterable) {
  const final = [];
  for (let i = 0; i < iterable.length; i++)
    if (iterable[i + 1] !== iterable[i]) final.push(iterable[i]);
  return final;
};

uniqueInOrder([1, 2, 2, 3, 3]);
uniqueInOrder('ABBCcAD');
uniqueInOrder([
  'A',
  'A',
  'A',
  'A',
  'B',
  'B',
  'B',
  'C',
  'C',
  'D',
  'A',
  'A',
  'B',
  'B',
  'B',
]);
