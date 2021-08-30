function binarySearch(arr, num) {
  let a = 0;
  let b = arr.length - 1;
  let mid = Math.floor((a + b) / 2);
  while (arr[mid] !== num) {
    if (arr[mid] < num) {
      a = mid + 1;
    } else {
      b = mid - 1;
    }
    mid = Math.floor((a + b) / 2);
  }
  return mid;
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); //3

// ------------NOTE -----------------------
/*
  Pseudo code used for binary search: 
  while x not found
      if upperBound < lowerBound 
         EXIT: x does not exists.
   
      set midPoint = lowerBound + ( upperBound - lowerBound ) / 2
      
      if A[midPoint] < x
         set lowerBound = midPoint + 1
         
      if A[midPoint] > x
         set upperBound = midPoint - 1 

      if A[midPoint] = x 
         EXIT: x found at location midPoint
   end while
   
   Reasons for getting stuck while solving: 
   The return aspect of the algorithm where you have to return mid. And mid is updated every loop. 
   Was trying to add +1/-1 from mid and not update new mid. 
  */
