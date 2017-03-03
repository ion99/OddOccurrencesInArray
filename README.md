# OddOccurrencesInArray

Arr is a non-empty zero-indexed array. "arr" consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.

For example, in array "arr" such that:

  arr[0] = 9  arr[1] = 3  arr[2] = 9
  arr[3] = 3  arr[4] = 9  arr[5] = 7
  arr[6] = 9

the elements at indexes 0 and 2 have value 9,
the elements at indexes 1 and 3 have value 3,
the elements at indexes 4 and 6 have value 9,
the element at index 5 has value 7 and is unpaired.
Write a function:

function odd(arr);

that, given an array "arr" consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.

For example, given array "arr" such that:

  arr[0] = 9  arr[1] = 3  arr[2] = 9
  arr[3] = 3  arr[4] = 9  arr[5] = 7
  arr[6] = 9

the function should return 7, as explained in the example above.

