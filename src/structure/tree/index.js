import { BinarySearchTree } from './tree';

const bst = new BinarySearchTree();

bst.insert(7);
bst.insert(4);
bst.insert(3);
bst.insert(6);
bst.insert(8);
bst.insert(6);
bst.insert(9);
bst.insert(10);

console.log(bst)
// bst.preOrderTraverse();
// bst.midOrderTraverse();                                                          
// bst.postOrderTraverse();

// console.log(bst.min());
// console.log(bst.max());
console.log(bst.search(0))
console.log(bst.search2(10))