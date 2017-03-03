// Time complexity O(N^2) - not the best one.

function odd(arr){  
  for (let i = 0; i < arr.length; i++){
    let arr1 = arr.slice();
    arr1.splice(i, 1);
    if (!arr1.includes(arr[i])){
      return arr[i];
    }
  }
}

//odd([9,3,9,3,9,7,9]);