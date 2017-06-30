module.exports = LinkedListDeque = (function () {
  let Node = {
    next: null,
    prev: null,
    data: null
  };
  let Deque = {
    head: null,
    tail: null,
    length: 0
  };

  function pushFront(deque, item) {
    // Create a new Node
    const newNode = Object.create(Node);
    newNode.data = item;

    // Grab the current head
    let oldHead = deque.head;
    deque.head = newNode;
    if (oldHead) {
      // We have at least one item. Prepend new Node in the front
      oldHead.prev = newNode;
      newNode.next = oldHead;
    } else {// The deque is empty. Just assign tail.
      deque.tail = newNode;
    }
    // Update length
    deque.length += 1;

    return deque;
  }

  function pushBack(deque, item) {
    // Create a new Node
    const newNode = Object.create(Node);
    newNode.data = item;

    // Grab the current tail
    let oldTail = deque.tail;
    deque.tail = newNode;
    if (oldTail) {
      // We have at least one item. Append new Node at the back
      oldTail.prev = newNode;
      newNode.prev = oldTail;
    } else {// The deque is empty. Just assign head.
      deque.head = newNode;
    }
    // Update length
    deque.length += 1;

    return deque;
  }

  function create() {
    return Object.create(Deque);
  }

  function isEmpty(deque) {
    return deque.length === 0
  }

  function popFront(deque) {// EXERCISE
  }

  function popBack(deque) {// EXERCISE
  }

  return {
    create: create,
    isEmpty: isEmpty,
    pushFront: pushFront,
    pushBack: pushBack,
    popFront: popFront,
    popBack: popBack
  }
  // need to return the public api here
})();