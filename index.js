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

