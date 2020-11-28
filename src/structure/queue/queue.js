export class Queue {
    constructor(){
        this.items = [];
    }
    // enqueue(element)：向队列尾部添加一个（或着）多个新的项
    enqueue(element){
        this.items.push(element);
    }
    // dequeue()：移除队列的第一个（即排在队列最前面的）项，并返回被移除的项目
    dequeue(){
        return this.items.shift();
    }
    // front()：返回队列中第一个元素——最先被添加，也是最先被移除的元素，此时队列不作任何变动
    front(){
        if(this.isEmpty()) return null;
        return this.items[0];
    }
    // isEmpty：如果队列中不包含任何元素，返回true，否则返回false
    isEmpty(){
        return !this.items.length;
    }
    // size()：返回队列中包含的元素个数，与数组的length属性相似
    size() {
        return this.items.length;
    }
}

/**
  * 击鼓传花---利用队列的性质
  */
export function passGame(nameList, num) {
    const queue = new Queue();

    nameList.forEach(name=>{
        queue.enqueue(name);
    })
    /**
     * 击鼓传花---利用队列的性质
     * 最终留下的只有一个元素，所以循环条件为queue.size()>1
     * 先出队列再进队列
     * */
    while(queue.size()>1){
        for(let i = 0; i < num-1; i++ ){
            queue.enqueue(queue.dequeue());
        }
        // 将喊到数字的同学出队列
       queue.dequeue();
    }

    // 最后队列中只剩下一个同学了
    return queue.front();
}



// 优先级队列元素
class QueueElement {
    constructor(element, priority ){
        this.element = element;
        this.priority = priority;
    }
}

export class QueuePriority extends Queue{
    constructor(){
        super()
    }
    // 只需要重写进入队列方法
    enqueue(element, priority){
        const queueElement = new QueueElement(element, priority);
        if(this.isEmpty()) {
            this.items.push(queueElement);
        }else {
            // 标志符，记录是否添加
            let added = false;
            this.items.forEach((item, index) => {
                // 如果当前元素优先级大于等于插入元素的优先级，便将其插入
                if(item.priority >= queueElement.priority){
                    this.items.splice(index, 0, queueElement);
                    added = true;
                    return;
                }
            });
            if(!added) {
                this.items.push(queueElement);
            }
        }
    }
}