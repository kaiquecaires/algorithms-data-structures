class Node {
  constructor (value , next = null, child = null) {
    this.value = value;
    this.next = next;
    this.child = child;
  } 
}

let var6 = new Node(6)
let var5 = new Node(5)
let var4 = new Node(4, var5)
let var3 = new Node(3, var6, var4)
let var2 = new Node(2, var3)
let var1 = new Node(1, var2)

const merge = (child, next) => {
  let current = child;

  while (current.next) {
    current = current.next;
  }

  current.next = next;
  return child;
}

const flatten = (head) => {
  let current = head;
  let list = []

  while (current) {
    list.push(current.value)
    if (current.child) {
      const child = flatten(current.child);
      current.next = merge(child, current.next);
      current.child = null;
    }

    current = current.next;
  }

  return head;
}

flatten(null);