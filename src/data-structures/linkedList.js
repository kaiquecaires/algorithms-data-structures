class Node {
  constructor (value, next) {
    this.data = value
    this.next = next
  }
}

class LinkedList {
  constructor () {
    this.head = null
    this.tail = null
    this.length = 0
  }

  traverseToIndex (index) {
    let counter = 0
    let currentNode = this.head

    while (counter !== index) {
      currentNode = currentNode.next
      counter++
    }

    return currentNode
  }

  append (value) {
    const node = new Node(value, null)
  
    if (this.length === 0) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }

    this.length++
  }

  prepEnd (value) {
    const node = new Node(value, this.head)
    this.head = node

    if (this.length === 0) {
      this.tail = node
    }

    this.length++
  }

  insert (value, index) {
    if (index < 0) {
      return
    }

    if (index > this.length) {
      return this.append(value)
    }

    if (index === 0) {
      return this.prepEnd(value)
    }

    let prev = this.traverseToIndex(index - 1)

    prev.next = new Node(value, prev.next)

    this.length++
  }

  get (index) {
    if (index < 0) {
      return
    }

    if (index > this.length) {
      return this.tail
    }

    if (index === 0) {
      return this.head
    }

    return this.traverseToIndex(index).data
  }

  remove (index) {
    if (this.length === 1) {
      this.tail = null
      this.head = null
      this.length--
      return
    }

    if (index === 0) {
      this.head = this.head.next
      return
    }

    if (index >= this.length) {
      return
    }

    let prevNode = this.traverseToIndex(index - 1)
    let nextNode = this.traverseToIndex(index + 1)

    prevNode.next = nextNode

    if (index === (this.length - 1)) {
      this.tail = prevNode
    }

    this.length--
  }

  printList () {
    let values = []

    let node = this.head

    while (node) {
      values.push(node.data)
      node = node.next
    }

    console.log(values)
  }
}

