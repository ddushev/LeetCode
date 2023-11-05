/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const half = nums.length / 2;
    nums.sort((a, b) => a - b);
    let counter = 1;
    let num1;
    let num2;
    while(counter <= half) {
        num1 = nums[0];
        num2 = nums[1];
        if(num1 == num2) {
            counter++
        }else{
            counter = 1;
        }
        nums.shift();
    }
    return nums[0];
};

console.log(majorityElement([3,2,3]));