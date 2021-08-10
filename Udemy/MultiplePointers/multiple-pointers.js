const countUniqueValues = function (arr) {
  const set1 = new Set(arr);
  return set1.size;
};
countUniqueValues([1, 2, 3, 4, 5, 5, 6, 6, 12, 12, 13]);
