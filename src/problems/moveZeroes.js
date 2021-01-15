const moveZeroes = (nums) => {
  let len = nums.length

  for (let i = 0; i < len; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      nums.push(0)
      i--
      len--
    }
  }

  return nums
}

console.log(moveZeroes([0,1,0,3,12]))
