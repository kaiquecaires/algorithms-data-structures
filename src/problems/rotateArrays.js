const rotate = (nums, k) => {
  const final = nums.splice(nums.length - k)
  
  for (let i = 0; i < final.length; i++) {
    nums.splice(i, 0, final[i])
  }

  return nums
}

rotate([1,-1,-100,3], 2)

