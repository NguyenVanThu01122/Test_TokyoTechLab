const diablo = (m, d, k, c) => {
  if (d === k && m > d) {
    return -1;
  }
  if (d < k) {
    return -1;
  }
  let count = 0;
  const maxKill = Math.round((d - 1) / k);
  while (m > maxKill) {
    count++;
    m -= maxKill;
    if (m * k === d) {
      break;
    }
  }
  return count * c;
};

console.log("- Diablo -");

console.log(diablo(10, 5, 1, 2)); // 4

console.log(diablo(10, 4, 1, 2)); // 4

console.log(diablo(10, 5, 2, 2)); // 8

console.log(diablo(10, 7, 8, 1)); // -1
