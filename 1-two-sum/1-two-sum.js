/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Description
// 
var twoSum = function (nums, target) {
  const number = [];
  var soln1;
  for (var i = 0; i <= nums.length; i++) {
    soln1 = nums[i];
    for (var j = i+1; j <= nums.length; j++) {
      if (soln1 + nums[j] == target) {
        var index1 = nums.indexOf(soln1);
        number.push(index1);
        number.push(j);
        return number;
      }
    }
  }
};
const input = [2, 7, 11, 15];
var soln = twoSum(input, 9);
console.log(soln);
