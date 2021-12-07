function containsDuplicate(nums) {
  const set1 = new Set([...nums]);
  const arr = [...set1];
  if (JSON.stringify(nums) == JSON.stringify(arr)) return false;
  else return true;
}
containsDuplicate([1, 2, 3, 1]);
