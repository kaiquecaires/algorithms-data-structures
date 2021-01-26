// brute approach
const getTrappedRainWater = function (heights) {
  let totalWater = 0

  for (let p = 0; p < heights.length; p++) {
    let leftP = p, rightP = p, maxLeft = 0, maxRight = 0

    while (leftP >= 0) {
      maxLeft = Math.max(heights[leftP], maxLeft)
      leftP--
    }

    while (rightP < heights.length) {
      maxRight = Math.max(heights[rightP], maxRight)
      rightP++
    }

    const currentValue = Math.min(maxLeft, maxRight) - heights[p]

    if (currentValue > 0) {
      totalWater += currentValue
    }
  }

  return totalWater
}

console.log(getTrappedRainWater([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]))
