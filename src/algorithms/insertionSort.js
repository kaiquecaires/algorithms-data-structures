const numbers = [1, 2, 4, 6, 3];

function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    // move numbers to the first position
    if (array[i] < array[0]) {
      array.unshift(array.splice(i, 1)[0])
    } else {
      // find number position
      for (let j = 1; j < i; j++) {
        if (array[i] < array[j] && array[i] > array[j - 1]) {
          array.splice(j, 0, array.splice(i, 1)[0])
        }
      }
    }
  }
}

insertionSort(numbers);
console.log(numbers);
