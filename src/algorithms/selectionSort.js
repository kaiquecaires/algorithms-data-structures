function selectionSort (nums) {
  const length = nums.length
  
  for (let i = 0; i < length; i++) {
    let index = i

    for (let j = i; j < length; j++) {
      if (nums[index] > nums[j]) {
        index = j
      }
    }
    
    let temp = nums[i]
    nums[i] = nums[index]
    nums[index] = temp
  }

  return nums
}

console.log(selectionSort([10, 5, 8, 11, 60, 40, 11, 1]))
