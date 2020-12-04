class TreeNode {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

export class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    // inset(key)：向树中插入一个新的key
    insert(key) {
        const newNode = new TreeNode(key);

        if(this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }
    // 递归调用
    insertNode(node, newNode) {
        if(newNode.key > node.key){
            if(node.right === null){
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode)
            }
        }else if(newNode.key <= node.key){
            if(node.left === null){
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        }
    }

    // preOrderTraverse()：先序遍历树：根-->左子树-->右子树
    preOrderTraverse(){
        this.preOrderTraverseNode(this.root);
    }
    preOrderTraverseNode(node){
        if(node === null ) return;// 如果是空树，直接返回
        console.log(node.key); //对节点做的响应操作
        this.preOrderTraverseNode(node.left);//递归调用遍历左子树
        this.preOrderTraverseNode(node.right);
    }

    // midOrderTraverse()：中序遍历树：左子树-->根节点-->右子树
    midOrderTraverse(){
        this.midOrderTraverseNode(this.root);
    }
    midOrderTraverseNode(node){
        if(node === null) return;
        this.midOrderTraverseNode(node.left);
        console.log( node.key);//对节点做的响应操作
        this.midOrderTraverseNode(node.right);
    }

    // postOrderTraverse()：后序遍历树：左子树-->右子树-->根节点
    postOrderTraverse(){
        this.postOrderTraverseNode(this.root);
    }
    postOrderTraverseNode(node){
        if(node === null) return;
        this.postOrderTraverseNode(node.left);
        this.postOrderTraverseNode(node.right);
        console.log(node.key);
    }

    // min():获取二叉搜索树中的最小值的key：在左子树中
    min(){
        if(this.root === null) return null;
        let min = this.root;
        while(min.right !== null){
            min = min.left;
        }
        return min.key;
    }

    // max()：获取二叉搜索树中的最大值key：在右子树中
    max(){
        if(this.root === null) return null;
        let max = this.root;
        while(max.right !== null){
            max = max.right;
        }

        return max.key;
    }

    // search(key)：获取二叉树中是否存在某个键值
    search(key){
        return this.searchNode(this.root, key);
    }
    searchNode(node, key){
        if(node === null) return false;
        if(node.key > key){
            return this.searchNode(node.left, key);
        } else if(node.key < key){
            return this.searchNode(node.right, key);
        } else {
            return true;
        }
    }

    search2(key){
        if(this.root === null) return false;

        let node = this.root;
        while(node !== null) {
            if(node.key > key){
                node = node.left
            } else if(node.key < key) {
                node = node.right;
            } else {
                return true;
            }
        }
        return false;
       
    }

    // 删除元素
    remove(key){
        // 1.定义一些变量记录状态
        let current = this.root;
        let parent = null;
        let isLeftChild = true;

        // 如果是空树，返回false
        if(this.root === null) return false;

        // 寻找该元素
        while(current.key !== key){
            parent = current;
            if(key < current.key){
                isLeftChild = true;
                current = current.left
            } else {
                isLeftChild = false;
                current = current.right;
            }

            if(current === null) return false;
        }

        //此时已经找到该节点
        // 1）如果该节点没有子元素
        if(current.left === null && current.right === null){
            // 如果是根节点
            if(current === this.root){
                this.root = null;
            }else{
                if(isLeftChild){
                    parent.left = null;
                }else{
                    parent.right = null;
                }
            }
        }
        // 2）如果该节点有一个子节点
        else if(current.right === null){ //节点的右子节点为空
            if(current === this.root){
                this.root = current.left;
            }else{
                if(isLeftChild){
                    parent.left = current.left;
                }else{
                    parent.right = current.left;
                }
            }
        }else if(current.left === null){ //节点的左子节点为空
            if(current === this.root){
                this.root = current.right;
            }else {
                if(isLeftChild){
                    parent.left = current.right;
                }else{
                    parent.right = current.right;
                }
            }
        }
        // 3）该节点有两个节点（找到该节点的后继）
        else {
            // 1.获取其后继节点
            let successor = this.getSuccessor(current);
            if(this.root === current){
                this.root = successor;
            }else if(isLeftChild){
                parent.left = successor;
            }else {
                parent.right = successor;
            }

            successor.left = current.left;
        }
        return true;
    }

    // 得到删除节点的后继，在其右子树的最小值
    getSuccessor(delNode){
        // 1.定义变量，来存储临时节点
        let successorParent = delNode;
        let successor = delNode;
        let current = delNode.right;

        // 2.寻找节点
        while(current !== null){
            successorParent = successor;
            successor = current;
            current = current.left;
        }

        // 3.如果后继节点不是删除节点的右子节点
        if(successor !== delNode.right){
            successorParent.left = successor.right;
            successor.right = delNode.right;
        }


        return successor;
    }
}
