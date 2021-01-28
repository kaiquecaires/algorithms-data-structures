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

console.log(longestSubstring('a'))
