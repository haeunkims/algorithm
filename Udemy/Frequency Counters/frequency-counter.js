const validAnagram = function (str1, str2) {
  const a = str1.split("").sort();
  const b = str2.split("").sort();

  if (str1.length !== str2.length) return false;

  for (i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
};

console.log(validAnagram("grace", "ecarg"));
