// Solution using "_.reduce()"
// Time complexity O(N).

function odd(arr) {
  return arr.reduce((prev,curr) => prev^curr);
}

//odd([9,3,9,3,9,7,9]);