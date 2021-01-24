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

// optimized approach

function twoSum2 (nums, target) {
  let complements = {}

  for (let i = 0; i < nums.length; i++) {
    let key = nums[i]
    if (complements.hasOwnProperty(key)) {
      return [complements[key], i]
    } else {
      let complement = target - nums[i]
      complements[complement] = i
    }
  }

  return null
}


const array = [2,7,11,15]

console.log(twoSum1(array, 9))
