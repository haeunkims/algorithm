function selectionSort(arr) {
  let min;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      min = arr[i];
      if (min !== arr[i]) {
        const swap = (arr, idx1, idx2) => {
          [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
        };
      }
    }
  }
  return arr;
}
console.log(selectionSort([12, 1, 3, 5, 2]));
