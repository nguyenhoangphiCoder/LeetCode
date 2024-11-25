//de bai cho 1 mang number va sso nguyen target hay tim 2 phan tu cua mang number sao cho tong
// 2 phan tu bang target
// vd :
// input: number=[2,7,11,15]
//        target=9
//output: [0,1]

//option1: duyet mang
function twoSum(number, target) {
  for (let i = 0; i < number.length; i++) {
    for (let j = 0; j < number.length; j++) {
      if (number[i] + number[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}
const number = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(number, target));

//option2: dung hashmap
function twoSum(number1, target1) {
  let map = new Map();
  for (let i = 0; i < number1.length; i++) {
    let n = target1 - number1[i];
    if (map.has(n)) {
      return [map.get(n), i];
    }
    map.set(number1[i], i);
  }
  return [];
}
const number1 = [2, 7, 11, 15];
const target1 = 9;
console.log(twoSum(number1, target1));
