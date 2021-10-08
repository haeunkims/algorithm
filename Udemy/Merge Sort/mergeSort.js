function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let half = Math.floor(arr.length / 2);
  let firstHalf = mergeSort(arr.slice(0, half));
  let secHalf = mergeSort(arr.slice(half));
  return merge(firstHalf, secHalf);
}
