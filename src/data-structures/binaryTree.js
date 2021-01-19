/*
  Level 0: 2 ^ 0 = 1
  Level 1: 2^1 = 2
  Level 2: 2^2 = 4
  Level 3: 2^3 = 8
  
  # of nodes = 2 ^ h - 1
  log nodes = height

  log 100 = 2
  10 ^ 2 = 100

  O(log n)

  Unbalanced

  lookup: O(n)
  insert: O(n)
  delete: O(n)
*/

function traverse (node) {
  const tree = { value: node.value }
  tree.left = node.left === null ? null : traverse(node.left)
  tree.right = node.right === null ? null : traverse(node.right)
  return tree
}

class Node {
  constructor (value) {
    this.left = null
    this.right = null
    this.value = value
  }
}


class BinarySearchTree {
  constructor () {
    this.root = null
  }

  insert (value) {
    const node = new Node(value)

    if (this.root === null) {
      this.root = node
    } else {
      let currentNode = this.root

      while(true) {
        if (value < currentNode.value) {
          // left
          if (!currentNode.left) {
            currentNode.left = node
            return this;
          }

          currentNode = currentNode.left
        } else {
          // right
          if (!currentNode.right) {
            currentNode.right = node
            return this
          }

          currentNode = currentNode.right
        }
      }
    }
  }

  lookup (value) {
    let currentNode = this.root

    if (!currentNode) {
      return false
    }

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode
      }

      if (value < currentNode.value) {
        // left
        currentNode = currentNode.left
      } else {
        // right
        currentNode = currentNode.right
      }
    }

    return false
  }
}

const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log(tree.lookup(220))
/*
        9
      4   20
     1 6 15 170
*/
