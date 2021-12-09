const isPalindrome = function (str) {
  const a = str.toLowerCase().split(" ");
  const a2 = a
    .toString()
    .split(/[^A-Za-z0-9]/g)
    .join("");
  const b = a2.split("").reverse().join("");
  if (a2 === b) return true;
  else return false;
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));
