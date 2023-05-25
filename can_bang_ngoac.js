const isBalance = (a, b) => {
  if (
    (a === "(" && b === ")") ||
    (a === "[" && b === "]") ||
    (a === "{" && b === "}")
  ) {
    return true;
  } else {
    return false;
  }
};

// n là số test case
// testCases là một mảng có n testCase, mỗi testCase là một chuỗi
// Hàm trả về một mảng chứa đầu ra tương ứng của mỗi testCase
const can_bang_ngoac = (n, testCases) => {
  const results = [];
  testCases.forEach((testCase) => {
    if (!testCase) {
      results.push(true);
    } else if (testCase.length % 2 === 1) {
      results.push(false);
    } else {
      const length = testCase.length;
      let isBalanceString = true;
      for (let i = 0; i < length / 2; i++) {
        if (!isBalance(testCase[i], testCase[length - 1 - i])) {
          isBalanceString = false;
          break;
        }
      }
      results.push(isBalanceString);
    }
  });
  return results;
};

console.log("- Cân bằng ngoặc -");

console.log(can_bang_ngoac(5, ["()", "{[()]}", "{[()}]", "()(", "]()["])); // [true, true, false, false, false]

console.log(can_bang_ngoac(6, ["", "(", ")(", "((()))", "({)}", "(({{[]}}))"])); // [true, false, false, true, false, true]
