import { Queue, passGame, QueuePriority } from './queue';

// const queue = new Queue(); 

// queue.enqueue("abc");
// queue.enqueue("acb");
// queue.enqueue("bcs");
// queue.enqueue("ccc");

// console.log(queue.items);
// console.log(queue.dequeue());
// console.log(queue.items);

// console.log(passGame(["why", "Tom", "LiLei", "Lucy"], 3));

const queueP = new QueuePriority();

queueP.enqueue("asas",20);
queueP.enqueue("swds", 10);
queueP.enqueue("ppp", 40);
queueP.enqueue("ll", 25);

console.log(queueP.items)

