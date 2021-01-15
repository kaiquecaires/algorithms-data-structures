function commonItemsInArrays (arr1, arr2) {
  let hashTable = {}

  for (let element of arr1) {
    hashTable[element] = true;
  }

  for (let element of arr2) {
    if (hashTable[element]) {
      return true
    }
  }

  return false 
}

// O(n + m) Time Complexity
// O(n) Space Complexity

function commonItemsInArrays2 (arr1, arr2) {
  return arr1.some(item => arr2.includes(item))
}

// O(n) Time Complexity
// O(1) Space Complexity

const case1 = commonItemsInArrays2(['a','b','c','x'], ['z','y', 'x'])
const case2 = commonItemsInArrays2(['a','b','c','x'], ['z','y', 'i'])

console.log(case1)
console.log(case2)
