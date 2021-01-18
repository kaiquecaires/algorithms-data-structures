class Node {
  constructor (data, next) {
    this.data = data
    this.next = next
  }
}

class Stack {
  constructor () {
    this.top = null
    this.bottom = null
    this.length = 0
  }

  peak () {
    return this.top
  }

  push (value) {
    let node = new Node(value, null);

    if (this.isEmpty()) {
      this.top = node
      this.bottom = node
    } else {
      this.top.next = node
      this.top = node
    }

    this.length++
    return this
  }

  pop () {
    if (this.isEmpty()) {
      return null
    }

    if (this.top === this.bottom) {
      this.bottom = null
      this.top = null
      this.length--
      return
    }

    let counter = 0;
    let currentNode = this.bottom

    while (counter < this.length - 2) {
      currentNode = currentNode.next
      counter++
    }

    currentNode.next = null
    this.top = currentNode
    this.length--

    return currentNode
  }

  isEmpty () {
    return this.length === 0
  }

  print () {
    const nodes = []
    let currentNode = this.bottom

    while (currentNode) {
      nodes.push(currentNode.data)
      currentNode = currentNode.next
    }

    console.log(nodes)
  }
}

const myStack = new Stack()

myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.pop()
myStack.pop()
myStack.pop()
