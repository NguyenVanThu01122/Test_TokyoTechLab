// Hàm combination tính số cách sắp xếp k phần tử giống nhau trong n phần tử
const combination = (k, n) => {
  if (k === 0 || k === n) {
    return 1;
  } else {
    return combination(k - 1, n - 1) + combination(k, n - 1);
  }
};

// n là số test case
// testCases là một mảng có n testCase, mỗi testCase là một mảng chứa 2 số đại diện cho tỉ số của hai đội
// Hàm trả về một mảng chứa đầu ra tương ứng của mỗi testCase
const giao_huu_bong_da = (n, testCases) => {
  const results = [];
  testCases.forEach((testCase) => {
    const [tt, ttLab] = testCase;
    results.push(combination(tt, tt + ttLab));
  });
  return results;
};

console.log("- Giao hữu bóng đá -");

console.log(
  giao_huu_bong_da(2, [
    [2, 0],
    [1, 3],
  ])
); // [1, 4]

console.log(
  giao_huu_bong_da(3, [
    [1, 1],
    [2, 2],
    [1, 4],
  ])
); // [2, 6, 5]
