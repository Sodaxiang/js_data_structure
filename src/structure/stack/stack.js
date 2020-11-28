export class Stack{
    constructor(){
        this.items = [];
    }
    // push(element)：添加一个元素到栈顶
    push(element){
        this.items.push(element);
    }
    // pop()：移除栈顶元素，同时返回被移除的元素
    pop(){
        return this.items.pop();
    }
    // peek()：返回栈顶元素，对栈不做任何的修改
    peek(){
        if(this.isEmpty()) return null;
        return this.items[this.items.length - 1];
    }
    // isEmpty()：如果栈里没有元素就返回true，否则返回false
    isEmpty(){
        return !this.items.length;
    }
    // size：但会栈里的元素个数，这个方法和数组的length很类似
    size(){
        return this.items.length;
    }
}

// 利用栈的性质设计十进制转二进制
export function decimal2binary(num){
    const stack = new Stack();
    let res = '';
    while(num > 0){
        let remainder = num % 2;
        stack.push(remainder);
        num = Math.floor(num/2);
    }
    while(!stack.isEmpty()){
        res += stack.pop();
    }

    return res;
}