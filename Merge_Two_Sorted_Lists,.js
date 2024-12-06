// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
function Example(l1, l2) {
  const array = [];
  for (let i = 0; i < l1.length; i++) {
    array.push(l1[i]);
  }
  for (let i = 0; i < l2.length; i++) {
    array.push(l2[i]);
  }
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        //hoan doi vi tri neu sai thu tu
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
const l1 = [1, 2, 4];
const l2 = [1, 3, 4];
console.log(Example(l1, l2));

// Example 2:
// Input: list1 = [], list2 = []
// Output: []
function Example2(a1, a2) {
  const array = [];
  for (let i = 0; i < a1.length; i++) {
    array.push(a1[i]);
  }
  for (let i = 0; i < a2.length; i++) {
    array.push(a2[i]);
  }
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
const a1 = [];
const a2 = [];
console.log(Example2(a1, a2));

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]
function Example3(list1, list2) {
  const array = [];
  for (let i = 0; i < list1.length; i++) {
    array.push(list1[i]);
  }
  for (let i = 0; i < list2.length; i++) {
    array.push(list2[i]);
  }
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
const list1 = [];
const list2 = [0];
console.log(Example3(list1, list2));
