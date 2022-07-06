/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  var pow = 0;
  var numReverse = 0;
  var newNum = x;
  function numberOfDigits(num) {
    while (num > 0) {
      num = Math.floor(num / 10);
      pow++;
    }
    return pow;
  }
  power = numberOfDigits(newNum) - 1;
  console.log(power);
  while (newNum >= 1) {
    var lastDigit = Math.floor(newNum % 10);
    newNum = newNum / 10;
    numReverse += lastDigit * Math.pow(10, power);
    console.log("numReverse: " + numReverse);
    power--;
  }
  if (numReverse === x) {
    return true;
  }
  return false;
};
console.log("res:" + isPalindrome(121));
