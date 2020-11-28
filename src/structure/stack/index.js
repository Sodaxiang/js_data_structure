import {Stack, decimal2binary} from './stack';

const stack = new Stack();

stack.push("abc");
stack.push("nbc");
stack.push("cbc");
stack.push("bcc");

console.log(stack.items);
console.log(stack.pop());
console.log(stack.items);

console.log(decimal2binary(100));