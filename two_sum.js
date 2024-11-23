// Cho một mảng các số nguyên nums và một số nguyên target, trả về chỉ số của hai số sao cho tổng của chúng bằngtarget .

// Ví dụ 1:
// Đầu vào: nums = [2,7,11,15], mục tiêu = 9
//  Đầu ra: [0,1]
//  Giải thích: Vì nums[0] + nums[1] == 9, nên chúng ta trả về [0, 1].
function twoSum(number, target) {
  let map = new Map();

  for (let i = 0; i < number.length; i++) {
    let complement = target - number[i]; // Tìm số bổ sung
    if (map.has(complement)) {
      // Kiểm tra xem số bổ sung đã xuất hiện chưa
      return [map.get(complement), i]; // Trả về chỉ số của 2 số
    }
    map.set(number[i], i); // Lưu số hiện tại vào map với chỉ số của nó
  }

  return []; // Nếu không tìm được cặp nào, trả về mảng rỗng
}
let number = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(number, target));
// Ví dụ 2:

// Đầu vào: nums = [3,2,4], mục tiêu = 6
//  Đầu ra: [1,2]

function newTwoSum(newNumber, newTarget) {
  let newMap = new Map();
  for (let i = 0; i < newNumber.length; i++) {
    let complement = newTarget - newNumber[i];
    if (newMap.has(complement)) {
      return [newMap.get(complement), i];
    }
    newMap.set(newNumber[i], i);
  }
  return [];
}
let newNumber = [3, 2, 4];
let newTarget = 6;
console.log(newTwoSum(newNumber, newTarget));

// Bài 1: Two Sum - Cơ bản
// Mô tả: Cho một mảng các số nguyên nums và một số nguyên target, tìm hai chỉ số sao cho tổng của chúng bằng target. Trả về chỉ số của hai số đó.
// Ví dụ:
// javascript
// Copy code
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]  // Vì nums[0] + nums[1] = 9
function newTwoSum(num, target1) {
  let map = new Map();
  for (let i = 0; i < num.length; i++) {
    let complement = target1 - num[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(num[i], i);
  }
  return [];
}
let num = [2, 7, 11, 15];
let target1 = 9;
console.log(newTwoSum(num, target1));

// Bài 2: Two Sum với số dương và âm
// Mô tả: Giống bài toán trên, nhưng mảng có thể chứa cả số dương và số âm. Lập trình sao cho không có giả
// thiết về tất cả các số đều dương hoặc âm.
// Ví dụ:
// javascript
// Copy code
// Input: nums = [-1, 3, 7, 9, 2], target = 8
// Output: [2, 3]  // Vì nums[2] + nums[3] = 8

function twoSum(num1, target2) {
  let map = new Map();
  for (let i = 0; i < num1.length; i++) {
    let complement = target2 - num1[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(num1[i], i);
  }
  return [];
}
let num1 = [-1, 3, 7, 9, 2];
let target2 = 8;
console.log(twoSum(num1, target2));
// Bài 3: Two Sum với mảng chứa các phần tử trùng lặp
// Mô tả: Xử lý trường hợp mảng có các số trùng lặp. Mảng có thể chứa nhiều số bằng target nhưng chỉ cần tìm cặp đầu tiên thỏa mãn.
// Ví dụ:
// javascript
// Copy code
// Input: nums = [1, 3, 3, 5], target = 6
// Output: [1, 2]  // Vì nums[1] + nums[2] = 6
function twoSum(num2, target3) {
  let map = new Map();
  for (let i = 0; i < num2.length; i++) {
    let complement = target3 - num2[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(num2[i], i);
  }
  return [];
}
let num2 = [1, 3, 3, 5];
let target3 = 6;
console.log(twoSum(num2, target3));

// Bài 4: Two Sum - Cặp duy nhất
// Mô tả: Bạn cần trả về chỉ số của cặp số duy nhất thỏa mãn tổng bằng target. Nếu không có cặp số nào, trả về mảng rỗng.
// Ví dụ:
// javascript
// Copy code
// Input: nums = [1, 2, 3, 4], target = 10
// Output: []  // Vì không có cặp nào có tổng bằng 10
function twoSum(num3, target4) {
  let map = new Map();
  for (let i = 0; i < num3.length; i++) {
    let complement = target4 - num3[i];
    if (map.has(complement)) {
      return push([map.get(complement), i]);
    }
    map.set(num3[i], i);
  }
  return [];
}
let num3 = [1, 2, 3, 4];
let target4 = 10;
console.log(twoSum(num3, target4));

// Bài 5: Two Sum - Tìm các cặp không trùng lặp
// Mô tả: Với một mảng các số, tìm tất cả các cặp không trùng lặp có tổng bằng target. Trả về tất cả các cặp chỉ số mà không có sự trùng lặp.
// Ví dụ:
// javascript
// Copy code
// Input: nums = [1, 2, 3, 4, 5], target = 6
// Output: [[0, 4], [1, 3]]  // Các cặp chỉ số thỏa mãn là [0, 4] và [1, 3]

function twoSum(num4, target5) {
  let map = new Map();
  let arr = [];
  for (let i = 0; i < num4.length; i++) {
    let complement = target5 - num4[i];
    if (map.has(complement)) {
      arr.push([map.get(complement), i]);
    }
    map.set(num4[i], i);
  }
  return arr;
}
let num4 = [1, 2, 3, 4, 5];
let target5 = 6;
console.log(twoSum(num4, target5));

// Bài 6: Two Sum với phép tính cộng
// Mô tả: Viết một hàm có thể tìm ra tất cả các cặp số trong mảng có tổng bằng target, nhưng thay vì sử dụng bảng băm (Map),
// bạn phải sử dụng một vòng lặp lồng nhau để kiểm tra mọi cặp.
// Ví dụ:
// Output: [[1, 4], [2, 3]]
// Input: nums = [3, 2, 4, 8, 7], target = 10
// Output: [[2, 4], [3, 7]]  // Các cặp chỉ số thỏa mãn là [2, 4] và [3, 7]
function twoSum(numbers, Target) {
  let Arr = [];
  for (i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === Target) {
        Arr.push([i, j]);
      }
    }
  }
  return Arr;
}
let numbers = [3, 2, 4, 8, 7];
let Target = 10;
console.log(twoSum(numbers, Target));

// Bài 7: Two Sum - Tìm cặp có tổng lớn nhất
// Mô tả: Tìm cặp hai số có tổng lớn nhất trong mảng. Trả về chỉ số của cặp đó.
// Input: nums = [1, 2, 3, 4], target = 7
// Output: [2, 3]  // Cặp có tổng lớn nhất là nums[2] + nums[3] = 7

// Bài 8: Two Sum với độ phức tạp O(n^2)
// Mô tả: Viết một phiên bản của Two Sum sử dụng độ phức tạp O(n^2) với việc kiểm tra tất cả các cặp số mà không sử dụng Map hoặc bất kỳ cấu trúc dữ liệu nào hỗ trợ tra cứu nhanh.

// Ví dụ:

// javascript
// Copy code
// Input: nums = [10, 20, 30, 40], target = 50
// Output: [1, 3]  // Vì nums[1] + nums[3] = 50
// Bài 9: Two Sum với mảng đã sắp xếp
// Mô tả: Nếu mảng đã được sắp xếp, bạn có thể sử dụng thuật toán "two pointers" để giải quyết bài toán này nhanh hơn.

// Ví dụ:

// javascript
// Copy code
// Input: nums = [1, 3, 4, 5, 7], target = 6
// Output: [1, 2]  // Cặp thỏa mãn là nums[1] + nums[2] = 6
