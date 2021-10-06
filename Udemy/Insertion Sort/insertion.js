function insert(arr) {
  for (let i = 0; i < arr.length; i++) {
    let key = i;
    let insertVal = arr[i];
    while (key >= 0 && arr[i - 1] > insertVal) {
      arr[key + 1] = arr[key];
      key = key - 1;
    }
    arr[key + 1] = insertVal;
  }
  return arr;
}
console.log(insert([2, 22, 11, 33, 12, 1]));
// DOES NOT WORK NEED FIXING
