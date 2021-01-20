function bubbleSort (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      let biggest = 0
      if (nums[j + 1]) {
        if (nums[j] > nums[j + 1]) {
          biggest = nums[j]
          nums[j] = nums[j + 1]
          nums[j + 1] = biggest
        }
      }
    }
  }

  return nums
}

console.log(bubbleSort([10, 9, 8, 7, 10, 10, 8]))
