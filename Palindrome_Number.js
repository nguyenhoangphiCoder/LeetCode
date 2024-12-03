// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
function Example1(x) {
  if (x < 0) return false;
  const str = x.toString();
  const reverse = str.split("").reverse().join("");
  return str === reverse;
}
const x = 121;
console.log(Example1(x));
// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-.
//Therefore it is not a palindrome.
function Example2(x1) {
  if (x1 < 0) return false;
  const str = x.toString();
  const reverse = str.split("").reverse().join("");
  return str === reverse;
}
const x1 = -121;
console.log(Example2(x1));

// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
function Example3(x2) {
  if (x2 < 0) return false;
  const str = x2.toString();
  const reverse = str.split("").reverse().join("");
  return str === reverse;
}
const x2 = 10;
console.log(Example3(x2));
