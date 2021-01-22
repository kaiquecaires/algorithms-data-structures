

function fibonacciMemoization () {
  let cache = {}

  const fibonacci = (n) => {
    if (cache[n]) {
      return cache[n]
    } else {
      if (n < 2) {
        return n
      }
    
      cache[n] = fibonacci(n - 1) + fibonacci(n - 2)
      return cache[n]
    }
  }

  return fibonacci
}

const fibonacci = fibonacciMemoization()

console.log(fibonacci(6))
console.log(fibonacci(5))
