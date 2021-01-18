class Node {
  constructor (data, next) {
    this.data = data
    this.next = next
  }
}

class Queue {
  constructor () {
    this.first = null
    this.last = null
    this.length = 0
  }

  peek () {
    return this.first
  }

  enqueue (value) {
    const node = new Node(value, null)

    if (this.isEmpty()) {
      this.first = node 
      this.last = node 
    } else {
      this.last.next = node
      this.last = node
    }

    this.length++
  }

  dequeue () {
    const holdingPointer = this.first
    this.first = this.first.next

    return holdingPointer.data
  }

  isEmpty () {
    return this.length === 0
  }
}

const myQueue = new Queue()

myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.enqueue(3)
myQueue.enqueue(4)

console.log(myQueue.dequeue())
console.log(myQueue.dequeue())
