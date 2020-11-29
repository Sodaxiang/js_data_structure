class Node {
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

export class LinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }

    // append(element)：向链表末尾添加一个新的项
    append(element){
        const node = new Node(element);
        // 如果是空链表，则插入再第一个
       if(!this.head){
           this.head = node;
       } else {
           let current = this.head;
           while(current.next){
               current = current.next;
           }
           current.next = node;
       }
       this.length ++;
    }

    // insert(position,element):向链表的特定位置加入一个元素
    insert(position, element) {
        const node = new Node(element);
        // 1.处理越界
        if(position < 0 || position > this.length) return;
        // 2.当position = 0的时候
        if(position === 0){
            // 让该节点的next指向原来头部的节点，再将head指向该节点
            node.next = this.head;
            this.head = node;
        } else {
            let current = this.head;
            let previous = null; //记录前一次的节点
            let index = 0; //记录位置
            while(index < position) {
                previous = current;
                current = current.next;
                index ++;
            }
            // 让之前的上一个节点的next指向新节点,新节点的next指向原来那个位置的节点
            previous.next = node;
            node.next = current;
        }

        this.length ++;
    }

    // get(position)：返回特定位置的元素,从0开始
    get(position) {
        // 1.处理越界
        if(position<0 || position > this.length-1) return null;
        if(position === 0){
            return this.head.element;
        } else {
            let current = this.head;
            let index = 0;
            while(index < position){
                current = current.next;
                index ++;
            }
            return current.element;
        }     
    }

    // indexOf(element)：返回元素再列表中的索引，如果链表中没有该元素则返回-1
    indexOf(element) {
        let current = this.head;
        let index = 0;
        // 循环遍历，利用链表重点current.next===null的条件
        while(current){
            if(element === current.element){
                return index;
            }else{
                current = current.next;
                index ++;
            }
        }
        return -1;
    }

    // removeAt(position)：从列表中特定位置移除一个项,并返回该项
    removeAt(position) {
        // 1.处理越界
        if(position<0 || position > this.length-1) return null;
        let current = this.head;
        if(position===0) {
            this.head = current.next;
        } else {
            let previous = null;
            let index = 0;
            while(index < position){
                previous = current;
                current = current.next;
                index++;
            }
            previous.next = current.next;
        }
        this.length--;
        return current.element;
    }

    // remove(element): 从列表中移除一项
    remove(element){
        // 先找到该元素有位置，再调用removeAt();
        const index = this.indexOf(element);
        if(index===-1) return null;
        return this.removeAt(index);
    }
    
    // update(position, element)：修改某个位置的元素
    update(position, element){
        const result = this.removeAt(position);
        this.insert(position, element);
        return result;

    }

    // isEmpty()：如果链表中不包含任何元素，返回true，否则返回false
    isEmpty(){
        return !this.length;
    }
    
    // size()：返回链表的长度
    size(){
        return this.length;
    }
}