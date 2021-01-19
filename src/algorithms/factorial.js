const factorial = (num) => {
  if (num === 2) {
    return 2
  }

  return num * factorial(num - 1)
}

console.log(factorial(5))
