/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  var k = nums.length;
  for (var i = 0; i < k; i++) {
    var num = nums[i];
    for (var j = 0; j < k; ) {
      if (i != j && typeof nums[j] != 'undefined') {
        if (num == nums[j] && i != j) {
          nums.splice(j, 1);
        }
        if (nums[j] === nums[j + 1]) {
          nums.splice(j + 1, 1);
        }
      }
      j++
    }
  }
  return nums.length;
};