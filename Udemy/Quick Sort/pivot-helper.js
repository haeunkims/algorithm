function pivot(arr, start = 0, end = arr.length - 1) {
  let piv = arr[start];
  let swapIdx = start;
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  for (let i = 0; i < arr.length; i++) {
    if (piv > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
    swap(arr, start, swapIdx);
  }
  return swapIdx;
}
console.log(pivot([6, 5, 1, 2, 77, 12, 3, 99]));
