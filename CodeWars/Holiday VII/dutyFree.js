function dutyFree(normPrice, discount, hol) {
  let disc = normPrice * (discount * 0.01);
  let saved = hol / disc;
  return Math.floor(saved);
}
console.log(dutyFree(10, 10, 500));
