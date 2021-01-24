// brute approach
function twoSum1 (array, sum) {
  if (!array || array.length <= 1) {
    return null
  }

  for (let i = 0; i < array.length; i++) {
    let target = sum - array[i] 
    for (let j = i; j < array.length; j++) {
      if (array[j] === target) {
        return [i, j]
      }
    }
  }

  return null
}

const array = [0, 2, 4, 6, 8, 10]

console.log(twoSum1([1], 1))
