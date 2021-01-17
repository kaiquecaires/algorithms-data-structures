class Node {
  constructor (data, prev, next) {
    this.data = data
    this.prev = prev
    this.next = next
  }
}

class DoublyLinkedList {
  constructor () {
    this.head = null
    this.tail = null
    this.length = 0
  }

  _traverseToIndex (index) {
    let currentNode = this.head
    let counter = 0

    while (counter !== index) {
      currentNode = currentNode.next
      counter++
    }

    return currentNode
  }

  prepend (value) {
    const node = new Node(value, null, this.head)
    node.next.prev = node
    this.head = node
    this.length++
  }

  append (value) {
    if (this.length === 0) {
      let node = new Node(value, null, null) 
      this.head = node
      this.tail = node
      this.length++
    } else {
      let node = new Node(value, this.tail, null)
      this.tail.next = node
      this.tail = node
      this.length++
    }
  }

  insert (value, index) {
    if (index > this.length - 1) {
      return this.append(value)
    }

    if (index === 0) {
      return this.prepend(value)
    }

    const currentNode = this._traverseToIndex(index)
    const node = new Node(value, currentNode.prev, currentNode)
    currentNode.prev.next = node

    this.length++
  }

  remove (index) {
    if (index === 0) {
      this.head = this.head.next
      this.length--
      return
    }

    const currentNode = this._traverseToIndex(index)

    currentNode.prev.next = currentNode.next

    if (!currentNode.next) {
      this.length--
      return
    }

    currentNode.next.prev = currentNode.prev

    this.length--
  }

  reverse () {
    if (!this.head.next) {
      return this.head
    }

    let first = this.head
    this.tail = first
    let second = first.next

    while (second) {
      const temp = second.next
      second.next = first
      first = second
      second = temp
    }

    this.head.next = null
    this.head = first
  }

  print () {
    let items = []
    let currentNode = this.head

    while (currentNode) {
      items.push(currentNode)
      currentNode = currentNode.next
    }

    console.log(items)
  }
}

const myDoublyLinkedList = new DoublyLinkedList()

myDoublyLinkedList.append(1)
myDoublyLinkedList.append(2)
myDoublyLinkedList.append(3)
myDoublyLinkedList.append(4)
myDoublyLinkedList.reverse()
myDoublyLinkedList.print()
