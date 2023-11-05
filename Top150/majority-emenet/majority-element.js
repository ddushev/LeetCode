/**
 * @param {number[]} nums
 * @return {number}
 */
// ~300ms runtime solution
// var majorityElement = function(nums) {
//     const half = nums.length / 2;
//     nums.sort((a, b) => a - b);
//     let counter = 1;
//     let num1;
//     let num2;
//     while(counter <= half) {
//         num1 = nums[0];
//         num2 = nums[1];
//         if(num1 == num2) {
//             counter++
//         }else{
//             counter = 1;
//         }
//         nums.shift();
//     }
//     return nums[0];
// };


//~50ms runtime solution
var majorityElement = function(nums) {
    nums.sort((a, b) => a - b);
    return nums[Math.floor(nums.length / 2)];
};

console.log(majorityElement([1]));