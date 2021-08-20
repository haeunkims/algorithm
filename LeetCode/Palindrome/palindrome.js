function isPalindrome(x) {
  let num = x.toString().split("");
  const half = num.length / 2;
  const a = num.splice(0, half).join("");
  const b = num.splice(-half).reverse("").join("");

  if (x < 0) {
    return false;
  } else if (x >= 0 && x <= 9) return true;

  if (a !== b) {
    return false;
  } else {
    return true;
  }
}

console.log(isPalindrome(9));
