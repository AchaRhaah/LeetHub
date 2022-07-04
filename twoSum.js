/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Description
var twoSum = function (nums, target) {
  const number = [];
  var soln1;
  for (var i = 0; i <= nums.length; i++) {
    soln1 = nums[i+1];
    for (var j = 0; j <= nums.length; j++) {
      if (soln1 + nums[j] == target) {
        var index1 = nums.indexOf(soln1);
        var index2 = nums.indexOf(nums[j]);
        number.push(index1);
        number.push(index2);
        return number;
      }
    }
  }
};
const input = [0, 2, 4, 7];
var soln = twoSum(input, 11);
console.log(soln);
