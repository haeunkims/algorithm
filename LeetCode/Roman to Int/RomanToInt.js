var romanToInt = function (s) {
  const arr = s.split("");
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    console.log(typeof arr[i]);
    if ([i] == "I") console.log(1);
    // if ([i] == "V") return 5;
    // if ([i] == "X") return 10;
    // if ([i] == "L") return 50;
    // if ([i] == "C") return 100;
    // if ([i] == "D") return 500;
    // if ([i] == "M") return 1000;
  }
};
console.log(romanToInt("I"));

//still in the process of
