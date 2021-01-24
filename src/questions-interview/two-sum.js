// brute approach
function twoSum1 (array, sum) {
  if (!array || array.length <= 1) {
    return null
  }

  for (let i = 0; i < array.length; i++) {
    let target = sum - array[i] 
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === target) {
        return [i, j]
      }
    }
  }

  return null
}

const array = [3,2,4]

console.log(twoSum1(array, 6))
