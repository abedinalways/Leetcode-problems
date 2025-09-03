// Number of Good Pairs
let nums = [1, 2, 4, 1, 3, 6, 5, 4, 5, 1, 2, 6];
let goodPairs=0;
for(let i=0; i<nums.length; i++){
    for(let j=1+i; j<nums.length; j++){
        if(nums[i]===nums[j]){
            goodPairs++;
        }
       
    }
}
console.log(goodPairs);

//Two Sums
const marks = [30, 39, 40, 45, 56, 84, 90, 55, 80];
const target = 84;
function matched(marks, target) {
    for (let i = 0; i < marks.length; i++){
        for (let j = 1 + i; j < marks.length; j++){
            if (marks[i] + marks[j] === target) {
                return [i, j]
            }
        }
    }
}
console.log(matched(marks, target));

//palindrome number
let x = 767;
function isPalindrome(x) {
    let x1 = x.toString();
    let reversed = x1.split('').reverse().join('');
    if (x1 === reversed) {
        return true
    } else {
        return false
    }
}
console.log(isPalindrome(x))

//Roman to Integer
let romanTointeger = function (s) {
    let romanValue = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let total = 0;
    for (let i = 0; i < s.length; i++){
        let currentValue = romanValue[s[i]];
        let nextValue = romanValue[s[i + 1]];
        if (nextValue > currentValue) {
            total += nextValue - currentValue;
            i++;
        } else {
            total += currentValue;
        }
    }
    return total;
}
console.log(romanTointeger('MCMXCIV'));

//Longest Common Prefix

function longestCommonPrefix(strs) {
  if (!strs.length) return "";

  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char) {
        return strs[0].slice(0, i);
      }
    }
  }

  return strs[0];
}

// Example usage
const words = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(words)); // Output: "fl"


