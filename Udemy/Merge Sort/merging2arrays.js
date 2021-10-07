function merge(arr1, arr2) {
  let curr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      curr.push(arr1[i]);
      i++;
    } else {
      curr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    curr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    curr.push(arr2[j]);
    j++;
  }
  return curr;
}
console.log(merge([1, 10, 50], [2, 14, 99, 100]));
