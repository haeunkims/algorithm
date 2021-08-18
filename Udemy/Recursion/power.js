function power() {
  function power(num, expo) {
    if (expo == 0) return 1;
    return power(num, expo - 1) * num;
  }
}
console.log(power(2, 5));
