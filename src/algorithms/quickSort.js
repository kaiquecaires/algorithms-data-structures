function quickSort (nums) {
  if (nums.length < 2) {
    return nums
  }

  const left = []
  const right = []
  const pivot = nums[0]

  for (let i = 1; i < nums.length; i++) {
    if (pivot < nums[i]) {
      right.push(nums[i])
    } else {
      left.push(nums[i])
    }
  }

  return quickSort(left).concat([pivot]).concat(quickSort(right))
}

console.log(quickSort([5,7,9,4,2,1,3,8,6]))
