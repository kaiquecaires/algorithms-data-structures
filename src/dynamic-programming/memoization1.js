function memoizedAdd80 () {
  let cache = {}

  return function (n) {
    if (cache[n]) {
      console.log('Fast')
      return cache[n]
    } else {
      console.log('Slow')
      cache[n] = n + 80
      return cache[n]
    }
  }
}

const memoized = memoizedAdd80()

console.log(memoized(10))
console.log(memoized(10))
console.log(memoized(10))
console.log(memoized(10))
console.log(memoized(10))
