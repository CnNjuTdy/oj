/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    var i = 0, j = 0;
    var result = [];
    for (var k = 0; i < nums1.length && j < nums2.length; k++) {
        if (nums1[i] < nums2[j]) {
            result[k] = nums1[i]; i++;
        } else {
            result[k] = nums2[j]; j++;
        }
    }
    if (i == nums1.length) {
        for (; j < nums2.length; k++) {
            result[k] = nums2[j]; j++;
        }
    } else if (j == nums2.length) {
        for (; i < nums1.length; k++) {
            result[k] = nums1[i]; i++;
        }
    }

    if (result.length % 2 == 1) {
        return parseFloat(result[(result.length - 1) / 2]);
    } else {
        return parseFloat((result[result.length / 2] + result[result.length / 2 - 1]) / 2);
    }
};

console.log(findMedianSortedArrays([1, 3], [2]));