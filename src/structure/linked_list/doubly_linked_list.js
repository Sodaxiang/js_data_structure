import { Node, LinkedList } from './linked_list';

class DoublyNode extends Node {
    constructor(element){
        super(element);
        this.prev = null; //前一个指针
    }
}

export class DoublyLinkedList extends LinkedList{
    constructor(){
        super();
        this.tail = null; //记录尾部
    }
    // append(element)：向链表末尾添加一个新的项
    append(element){
        const newNode = new DoublyNode(element);
        // 1.当为空链表时
        if(!this.head){
           this.head = newNode;
           this.tail = newNode; 
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length ++;
    }

    // insert(position, element)：向链表的特定位置插入一个新的项
    insert(position, element){
        // 1.越界处理
        if(position < 0 || position > this.length) return false;
        // 2.插入处理
        const newNode = new DoublyNode(element);
        // 当position===0时候，分两种情况
        if(position === 0){
            // 1.当链表为空时
            if(!this.head){
                this.head = newNode;
                this.tail = newNode;
            }else{ //链表不为空时
                newNode.next = this.head;
                this.head.prev = newNode;
                this.head = newNode;
            }
        } else if(position === this.length){ //当position为链表的长度时，在链表末尾插入元素
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            let index = 0; //记录位置
            let current = this.head;
            let previous = null;
            while(index < position){
                previous = current;
                current = current.next;
                index ++; 
            }
            // 交换节点位置
            newNode.next = current;
            current.prev = newNode;
            newNode.prev = previous;
            previous.next = newNode;
        }

        this.length ++;
    }
    
    // get(poisition)：获取对应位置的元素；该方法不用重写，使用linked_list父类的方法就可

    // indexOf(element)：返回元素在列表中的位置，如果列表中没有存在该元素则返回-1;该方法不用重写，使用linked_list父类的方法就可

    // removeAt(position)：从列表中特定位置删除一项
    removeAt(position){
        // 1.越界处理
        if(position < 0 || position > this.length) return false;
        //2.节点处理
        // 当移除第一位节点
        let current = this.head; //记录删除的节点
        if(position === 0){
            this.head.next.prev = null;
            this.head = this.head.next;  
        }else if(position === this.length-1){//移除最后一位节点时候
            current = this.tail;
            this.tail.prev.next = null;
            this.tail = this.tail.prev;
        }else {
            let index = 0;
            let previous = null;
            while(index < position){
                previous = current;
                current = current.next;
                index ++;
            }
            // 移除节点
            previous.next = current.next;
            current.next.prev = previous;
        }
        
        this.length --;

        return current.element;
    }
    // remove(element)：从列表中删除一项；不用重写

    // update(positon, element)：修改某个位置的元素；不用重写

    // isEmpty()：如果链表中不存在任何元素，则返回true；否则返回false；不用重写

    // size()：返回链表所包含的元素个数；不用重写
}