import { LinkedList } from './linked_list';

import { DoublyLinkedList } from './doubly_linked_list';

const linkedList = new LinkedList();


// linkedList.append("aaa");
// linkedList.append("bb");
// linkedList.append("ff");

// linkedList.insert(0,"ccc");
// linkedList.insert(2,"kk");


// console.log(linkedList);
// // console.log(linkedList.get(2), linkedList.get(0));
// console.log(linkedList.indexOf('aaa'));

// // console.log(linkedList.removeAt(3));
// // console.log(linkedList.remove("bb"))
// // console.log(linkedList.remove("aaa"))
// console.log(linkedList.update(2,"kkk"))
// console.log(linkedList)

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.append("aaaa");
doublyLinkedList.append("bbbb");
doublyLinkedList.append("cccc");
console.log(doublyLinkedList, "00");
// console.log(doublyLinkedList.insert(0,"ppp"));
// doublyLinkedList.insert(0,"ppp")
// doublyLinkedList.insert(4,"f'f")
// console.log(doublyLinkedList.get(0));
// console.log(doublyLinkedList.indexOf("f'f"));
// console.log(doublyLinkedList.removeAt(0));
console.log(doublyLinkedList.remove("bbbb"));
// doublyLinkedList.update(0,"bsssb")
console.log(doublyLinkedList);