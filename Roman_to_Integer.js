// Example 1:
// Input: s = "III"
// Output: 3
// Explanation: III = 3.
function Example1(s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    const x = map[s[i]];
    const y = map[s[i + 1]];
    if (y && x < y) {
      total -= x;
    } else {
      total += x;
    }
  }
  return total;
}
console.log(Example1("III"));

// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
function Example2(s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    const x = map[s[i]];
    const y = map[s[i + 1]];
    if (y && x < y) {
      total -= x;
    } else {
      total += x;
    }
  }
  return total;
}

console.log(Example2("LVIII"));

// Example 3:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

function Example3(s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    const x = map[s[i]];
    const y = map[s[i + 1]];
    if (y && y > x) {
      total -= x;
    } else {
      total += x;
    }
  }
  return total;
}
console.log(Example3("MCMXCIV"));
