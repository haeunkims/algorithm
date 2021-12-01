const hammingWeight = function (n) {
  let num = 0;
  const str = n.toString(2);
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    if (str[i] == 1) num++;
  }
  return num;
};
console.log(hammingWeight(11111111111111111111111111111101));
