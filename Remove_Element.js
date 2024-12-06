// Example 1:
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).
function Example1(array, val) {
  if (array.length == 0) return 0;
  let k = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== val) {
      array[k] = array[i];
      k++;
    }
  }
  for (let i = k; i < array.length; i++) {
    array[i] = "_";
  }
  return k;
}
const array1 = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;
let k2 = Example1(array1, val);
console.log(k2);
console.log(array1);

// Example 2:
// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).
function Example2(arr, a) {
  if (arr.length == 0) return 0;
  let k = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== a) {
      arr[k] = arr[i];
      k++;
    }
  }
  for (let i = k; i < arr.length; i++) {
    arr[i] = "_";
  }
  return k;
}
const arr1 = [0, 1, 2, 2, 3, 0, 4, 2];
const a = 2;
let k1 = Example2(arr1, a);
console.log(k1);
console.log(arr1);
