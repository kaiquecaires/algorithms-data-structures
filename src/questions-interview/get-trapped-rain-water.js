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

// optimized approach

const getTrappedRainWater2  = (heights) => {
  let pl = 0, pr = heights.length - 1, maxLeft = 0, maxRight = 0, total = 0

  while (pl < pr) {
    if (heights[pl] <= heights[pr]) {
      if (heights[pl] < maxLeft) {
        total += maxLeft - heights[pl]
      } else {
        maxLeft = Math.max(maxLeft, heights[pl])
      }
      pl++
    } else {
      if (heights[pr] < maxRight) {
        total += maxRight - heights[pr]
      } else {
        maxRight = Math.max(maxRight, heights[pr])
      }
      pr--
    }
  }

  return total
}

console.log(getTrappedRainWater2([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]))
