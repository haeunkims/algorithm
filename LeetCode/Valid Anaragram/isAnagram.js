const isAnagram = function (s, t) {
  if (s.length != t.length) return false;
  const first = s.split("").sort().join();
  const second = t.split("").sort().join();
  if (first !== second) return false;
  return true;
};
console.log(isAnagram("rat", "cat"));
