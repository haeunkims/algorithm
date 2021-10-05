function sort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    // console.log(arr[min]);
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
        // console.log(arr[min]);
      }
      if (min !== arr[i]) swap(arr, i, min);
    }
  }
  return arr;
}
console.log(sort([5, 987, 123, 45, 2, 7, 1]));
