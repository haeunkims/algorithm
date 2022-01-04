const multiplesOf = function (n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (i % 5 === 0 || i % 3 === 0) {
      sum += i;
    }
  }
  console.log(sum);
};
console.log(multiplesOf(10));
