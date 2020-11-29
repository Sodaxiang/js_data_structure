import { LinkedList } from './linked_list';

const linkedList = new LinkedList();

linkedList.append("aaa");
linkedList.append("bb");
linkedList.append("ff");

linkedList.insert(0,"ccc");
linkedList.insert(2,"kk");


console.log(linkedList);
// console.log(linkedList.get(2), linkedList.get(0));
console.log(linkedList.indexOf('aaa'));

// console.log(linkedList.removeAt(3));
// console.log(linkedList.remove("bb"))
// console.log(linkedList.remove("aaa"))
console.log(linkedList.update(2,"kkk"))
console.log(linkedList)


