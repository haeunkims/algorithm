const reverse = function (x) {
  recievedNum = Math.abs(x).toString().split("").reverse().join("");

  last = Number(recievedNum);

  if (last <= 2147483647 && last >= -2147483648)
    return x < 0 ? last * -1 : last;
  else {
    return 0;
  }
};
console.log(reverse(-123));
