function checkIfNumberIsSmaller (n1, n2) {
  if (!n2 || n1 < n2) {
    return true
  }

  return false
}

function mergeSortedArrays (arr1, arr2) {
  const mergedArray = []
  let item1 = arr1[0]
  let item2 = arr2[0]
  let countItem1 = 1;
  let countItem2 = 1;

  if (arr1.length === 0) {
    return arr1
  }

  if (arr2.length === 0) {
    return arr2
  }

  while (item1 || item2) {
    if (checkIfNumberIsSmaller(item1, item2)) {
      mergedArray.push(item1)
      item1 = arr1[countItem1]
      countItem1++
    } else {
      mergedArray.push(item2)
      item2 = arr2[countItem2]
      countItem2++
    }
  }

  return mergedArray
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]))