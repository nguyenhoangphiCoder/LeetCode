// Example 1:
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of
// nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
function Example1(nums) {
  if (nums.length === 0) return 0;
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
}
const num = [1, 1, 2];
let k1 = Example1(num);
console.log(k1);
console.log(num);

// Example 2:
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of
// nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
function Example2(arr) {
  if (arr.length === 0) return 0;
  let a = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      arr[a] = arr[i];
      a++;
    }
  }

  return a;
}
const arr1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let a = Example2(arr1);
console.log(a);
console.log(arr1);