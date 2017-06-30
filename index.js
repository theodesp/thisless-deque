const LinkedListDeque = require('./lib/deque');

d = LinkedListDeque.create();
LinkedListDeque.pushFront(d, '1'); // [1]
LinkedListDeque.popFront(d); // []
LinkedListDeque.pushFront(d, '2'); // [2]
LinkedListDeque.pushFront(d, '3'); // [3]<=>[2]
LinkedListDeque.pushBack(d, '4'); // [3]<=>[2]<=>[4]
LinkedListDeque.isEmpty(d); // false
