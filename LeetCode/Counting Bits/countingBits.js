var countBits = function (n) {
  let ans = [];
  let arr = [];
  let num = 0;
  for (let i = 0; i <= n; i++) {
    arr.push(i);
    if (arr[i].toString(2) == 1) {
      num++;
    }
    ans.push(num);
  }
  return num;
};
countBits(5);
//incompleted. Can't get num++ to work properly.
