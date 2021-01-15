const contaisDuplicate = (arr) => {
  const hashMap = {}

  for (i = 0; i < arr.length; i++) {
    if(hashMap.hasOwnProperty(arr[i])) {
      return true
    } else {
      hashMap[arr[i]] = true
    }
  }

  return false
}

