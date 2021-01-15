// 2 parameters, array <number> and sum <sumber>
// sum = 8
// [1, 2, 4, 5] return false
// [1, 2, 4, 4] return true


function hasSumInArray (arr, sum) {
  const hashTable = new Object()

  for (const number of arr) {
    if(hashTable.hasOwnProperty(number)) {
      return true
    } else {
      let comp = sum - number
      hashTable[comp] = true
    }
  }

  return false
}

// O(n)

const case1 = hasSumInArray([1, 2, 4, 5], 9)
const case2 = hasSumInArray([1, 2, 4, 4], 8)

console.log(case1)
console.log(case2)
