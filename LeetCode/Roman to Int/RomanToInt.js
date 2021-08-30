var romanToInt = function (s) {
  const arr = s.split("");
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    console.log(typeof arr[i]);
    if ("I" == [i]) console.log(1);
    // if ([i] == "V") return 5;
    // if ([i] == "X") return 10;
    // if ([i] == "L") return 50;
    // if ([i] == "C") return 100;
    // if ([i] == "D") return 500;
    // if ([i] == "M") return 1000;
  }
};
console.log(romanToInt("I"));

// ----------------NOTE-------------
/* Answer found on the internet: 
var romanToInt = (str) => {
  const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let num = 0;
  if (str.includes("CM")) num -= 200;
  if (str.includes("CD")) num -= 200;
  if (str.includes("XC")) num -= 20;
  if (str.includes("XL")) num -= 20;
  if (str.includes("IX")) num -= 2;
  if (str.includes("IV")) num -= 2;
  for (var i = 0; i < str.length; i++) {
    num += roman[str[i]];
  }
  return num;
};

console.log(romanToInt("IV"));
console.log(romanToInt("VIII"));
console.log(romanToInt("LXXIX"));
console.log(romanToInt("MCMXLIV"));


Why I couldn't solve: 
Had issues initializing the corresponding letters to the numbers. My thoughts were to initialize in the if statement, learned that it doesn't work like that. 😔
Could have used a hashmap, this (answer)code was simpler. 

*/
