// brute personal approach

const longestSubstring = (string) => {
  let total = 0

  if (string.length === 1) {
    return 1
  }
  
  for (let p1 = 0; p1 < string.length; p1++) {
    let p2 = p1, count = 0
    let letters = new Object()

    while (!letters.hasOwnProperty(string[p2]) && p2 < string.length) {
      letters[string[p2]] = true
      p2++
      count++
    }

    total = Math.max(total, count)
  }

  return total
}


// optmized solution
const longestSubstring2 = (string) => {
  if (string.length <= 1) return string.length

  const chars = {}
  let longest = 0, left = 0

  for (let right = 0; right < string.length; right++) {
    let currentValue = string[right]
    let seenChar = chars[currentValue]
    
    if (seenChar >= left) {
      left = seenChar + 1
    }

    chars[currentValue] = right

    longest = Math.max(longest, right - left + 1)
  }

  return longest
}

console.log(longestSubstring2('abcb'))
