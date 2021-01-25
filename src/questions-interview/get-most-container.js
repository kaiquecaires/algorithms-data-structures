// brute approach
function getMostContainer (height) {
  let max = 0
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      let a = height[i]
      let b = height[j]
      let area = Math.min(a, b) * (j - i)
      max = Math.max(max, area)
    }
  }

  return max
}

function getMostContainer2 (height) {
  let p1 = 0, p2 = height.length - 1, maxArea = 0

  while (p1 < p2) {
    const length = Math.min(height[p1], height[p2])
    const width = p2 - p1
    const area = length * width
    maxArea = Math.max(maxArea, area)

    if (height[p1] <= height[p2]) {
      p1++
    } else {
      p2--
    }
  }

  return maxArea
}

const result = getMostContainer2([2,3,10,5,7,8,9])
console.log(result)
