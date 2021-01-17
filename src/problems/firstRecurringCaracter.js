function firstRecurringCaracter (chars) {
  // [2, 1, 1, 2, 3, 5, 1, 2, 4] It should return 1
  // [2,5,1,2,3,5,1,2,4] It should return 2
  // [2,3,4,5] It should return undefined
  let hashTable = {}

  for (let i = 0; i < chars.length; i++) {
    if (hashTable[chars[i]] !== undefined) {
      return chars[i]
    } else {
      hashTable[chars[i]] = true
    }
  }

  return undefined
}
