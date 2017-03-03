// Time complexity O(N).

function odd(arr) {
  let result;
  for(let i = 0; i < arr.length; i++){
      result ^= arr[i]; // JavaScript XOR operator - "exclusive or"
  }
  return result;
}

//odd([9,3,9,3,9,7,9]);