// Example 1:
// Input: s = "()"
// Output: true
function Example(s) {
  const stack = [];
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map[char]) {
      // neu dau ngoac mo , day vao ngan xep
      stack.push(char);
    } else {
      const top = stack.pop();
      if (map[top] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
console.log(Example("()"));

// Example 2:
// Input: s = "()[]{}"
// Output: true
function Example2(x) {
  const stack = [];
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let i = 0; i < x.length; i++) {
    const char = x[i];
    if (map[char]) {
      stack.push(char);
    } else {
      const top = stack.pop();
      if (map[top] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
console.log(Example2("(){}[]"));

// Example 3:
// Input: s = "(]"
// Output: false
// Example 4:
// Input: s = "([])"
// Output: true
function Example3(x) {
  const stack = [];
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let i = 0; i < x.length; i++) {
    const char = x[i];
    if (map[char]) {
      stack.push(char);
    } else {
      const top = stack.pop();
      if (map[top] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
console.log(Example3("([])"));
