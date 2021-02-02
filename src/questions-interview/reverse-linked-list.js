const reverseLinkedList = function (head) {
  let currentNode = head;
  let prev = null, next = null;

  while (currentNode) {
    next = currentNode.next;
    currentNode.next = prev;
    prev = currentNode;
    currentNode = next;
  }

  return prev
}