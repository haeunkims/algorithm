function sameFrequency(int1, int2) {
  const toArr1 = int1.toString().split("").sort().join("");
  const toArr2 = int2.toString().split("").sort().join("");
  if (toArr1.length != toArr2.length) {
    return false;
  }

  const toNum1 = Number(toArr2);
  const toNum2 = Number(toArr1);

  if (toNum2 == toNum1) {
    return true;
  } else return false;
}

console.log(sameFrequency(182, 281));
