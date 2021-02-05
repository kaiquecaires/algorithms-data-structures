class Node {
  constructor (value) {
    this.value = value
    this.prev = null
    this.next = null
    this.child = null
  }
}

let var6 = new Node(6);
let var5 = new Node(5);
let var4 = new Node(4);
let var3 = new Node(3);
let var2 = new Node(2);
let var1 = new Node(1);

var1.next = var2;
var2.next = var3;
var2.prev = var1;
var3.next = var6;
var3.prev = var2;
var3.child = var4;
var4.next = var5;
var5.prev = var4;

const merge = (child, next) => {
  if (!next) return child;

  let current = child;

  while (current.next) {
    current = current.next;
  }

  current.next = next;
  next.prev = current;

  return child;
}

const flatten = (head) => {
  let current = head;

  while (current) {
    if (current.child) {
      const child = flatten(current.child);

      if(child) {
        const merged = merge(child, current.next);
        current.next = merged;
        merged.prev = current;
      }

      current.child = null;
    }

    current = current.next;
  }

  return head;
}

//  Course solution
const flattenV2 = (head) => {
  if (!head) return head;
  let currentNode = head;
  while(currenNode !== null) {
    if(currentNode.child === null) {
      currentNode = currentNode.next;
    } else {
      let tail = currentNode.child;
      while (tail.next !== null) {
        tail = tail.next;
      }
      tail.next = currentNode.next;
      if (tail.next !== null) {
        tail.next.prev = tail;
      }
      currentNode.next = currentNode.child;
      currentNode.next.prev = currentNode;
      currentNode.child = null;
    }
  }

  return head;
}

// Space O(1), Time O(n)
