/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let n = nums.length;
    k %= n;
    if(k === 0) return nums;
    
    reverse(nums,0,n-k-1);
    reverse(nums,n-k,n-1);
    reverse(nums,0,n-1);
};

function reverse(nums, start, end) {
    while(start < end) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        
        start++;
        end--;
    }
}

rotate([1,2,3,4,5,6,7], 3);