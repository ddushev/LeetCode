var merge = function(nums1, m, nums2, n) {
    // Initialize two pointers, one for nums1 and one for nums2
    let p1 = m - 1;
    let p2 = n - 1;
    let p = m + n - 1;

    // While both arrays have elements
    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] >= nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }

    // If there are remaining elements in nums2, copy them to nums1
    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }
};

merge([1,2,3,0,0,0], 3, [2, 5, 6], 3);