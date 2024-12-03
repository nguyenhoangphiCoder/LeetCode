// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
function twoSum(num, target) {
  const map = new Map();
  for (let i = 0; i < num.length; i++) {
    const n = target - num[i];
    if (map.has(n)) {
      return [map.get(n), i];
    }
    map.set(num[i], i);
  }
  return [];
}
const num = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(num, target));
// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
function twoSum1(num1, target1) {
  const map = new Map();
  for (let i = 0; i < num1.length; i++) {
    const n = target1 - num1[i];
    if (map.has(n)) {
      return [map.get(n), i];
    }
    map.set(num1[i], i);
  }
  return [];
}
const num1 = [3, 2, 4];
const target1 = 6;
console.log(twoSum1(num1, target1));
// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]
function twoSum2(num2, target2) {
  const map = new Map();
  for (let i = 0; i < num2.length; i++) {
    const n = target2 - num2[i];
    if (map.has(n)) {
      return [map.get(n), i];
    }
    map.set(num2[i], i);
  }
  return [];
}
const num2 = [3, 3];
const target2 = 6;
console.log(twoSum2(num2, target2));
