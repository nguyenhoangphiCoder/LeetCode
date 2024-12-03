// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
function Example(str) {
  if (str.length === 0) return "";
  let prefix = str[0];
  for (let i = 0; i < str.length; i++) {
    while (str[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }
  return prefix;
}
const str = ["flower", "flow", "flight"];
console.log(Example(str));
// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
function Example2(string) {
  if (string.length === 0) return "";
  let prefix = string[0];
  for (let i = 0; i < string.length; i++) {
    while (string[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
      if (prefix == "") return 0;
    }
  }
  return prefix;
}
const string = ["dog", "racecar", "car"];
console.log(Example2(string));

function Example1(strl) {
  if (strl.length === 0) return 0;
  let prefix = strl[0];
  for (let i = 0; i < strl.length; i++) {
    while (strl[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
      if (prefix === "") return 0;
    }
  }
  return prefix;
}
const strl = ["abcd", "abdc", "abch"];
console.log(Example1(strl));
