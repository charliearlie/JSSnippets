/*
    JS SNIPPETS
*/


/* 
    Arrays
*/

let arr = [3, 2, 4, 11, 0, 8, 17, 9, false, 8, 5, 13, 1, -4, 14, null, '', 12];

//Max value in an array
const arrMax = arr => Math.max(...arr);

//Minimum value in an array
const arrMin = arr => Math.min(...arr);

//Remove falsy values
const compact = arr => arr.filter(Boolean);

const numOfOccurrences = (arr, value) => arr.reduce((acc, currentValue) => currentValue === value ? acc + 1 : acc + 0, 0);

const difference = (a, b) => { 
    const set = new Set(b); 
    return a.filter(x => !set.has(x)); 
}

const almostEqual = (a, b) => Math.abs(a - b) <= 1e-4;

const uniqueItems = arr => arr.filter(x => arr.indexOf(x) === arr.lastIndexOf(x));

const nthItem = (arr, n) => arr.filter((x, i) => i % n === 0);

console.log(nthItem(arr, 5));

module.exports = {
    arrMax,
    arrMin,
    compact,
    numOfOccurrences,
    difference,
    almostEqual,
    uniqueItems,
    nthItem
};

