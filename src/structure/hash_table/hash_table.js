const MAX_LOAD_FACTOR = 0.75;
const MIN_LOAD_FACTOR = 0.25;

export function hashFunc(str, max){
    // 1.定义hashCode
    let hashCode = 0;

    // 2.霍纳算法
    for(let i = 0; i<str.length; i++){
        hashCode = 31 * hashCode + str.charCodeAt(i);
    }

    // 取余操作
    hashCode = hashCode % max;

    return hashCode;
}

// 判断一个数是否为质数

// export function isPrime(num){
//     for(let i=2; i<num; i++){
//         if(num%i === 0){
//             return false;
//         }
//     }
//     return true;
// }

// 对以上判断的优化
export function isPrime(num){
    // 1.获取num的平方根，向上取整，对原来质数判断的优化
    let temp = Math.ceil(Math.sqrt(num));
    // 2.质数的判断，则如下条件变为<=
    for(let i=2; i<=temp; i++){
        if(num%i === 0){
            return false;
        }
    }
    return true;
}

export function getPrime(num){
    while(!isPrime(num)){
        num ++;
    }
    return num;
}


// hash表的定义
export class HashTable {
    constructor(){
        this.storage = [];
        this.count = 0; //记录hash表的长度
        this.limit = 7; //记录数组的长度，最好为质数，降低冲突
    }   

    // hash函数
    hashFunc(str, max){
        // 1.定义hashCode
        let hashCode = 0;
    
        // 2.霍纳算法
        for(let i = 0; i<str.length; i++){
            hashCode = 31 * hashCode + str.charCodeAt(i);
        }
    
        // 取余操作
        hashCode = hashCode % max;
    
        return hashCode;
    }

    // 对质数的判断
    isPrime(num){
        // 1.获取num的平方根，向上取整，对原来质数判断的优化
        let temp = Math.ceil(Math.sqrt(num));
        // 2.质数的判断，则如下条件变为<=
        for(let i=2; i<=temp; i++){
            if(num%i === 0){
                return false;
            }
        }
        return true;
    }

    // 获取质数
    getPrime(num){
        while(!this.isPrime(num)){
            num ++;
        }
        return num;
    }

    // put(key, value)：新增或修改操作
    put(key, value) {
        // 1.根据key映射到index
        let index = this.hashFunc(key, this.limit);

        // 2.取出数组
        let bucket = this.storage[index];
        if(bucket === undefined) {
            bucket = [];
            this.storage[index] = bucket;
        }

        // 3.判断是插入还是修改操作
        let override = false;
        for(let i = 0; i < bucket.length; i++){
            let tuple = bucket[i];
            // 修改值的操作
            if(tuple[0] === key){
                tuple[1] = value;
                override = true;
            }
        }

        // 4.如果没有覆盖，就是插入操作
        if(!override){
            bucket.push([key, value]);
            this.count ++;
            if(this.count > MAX_LOAD_FACTOR * this.limit){
                // 扩容操作
                let newLimit = this.getPrime(this.limit * 2);
                this.resize(newLimit);
            }
        }
    }

    // get(key)：查找元素
    get(key){
        // 1.根据key获得index
        const index = this.hashFunc(key, this.limit);
        
        const bucket = this.storage[index];
        if(bucket === undefined) return null;
        for(let i = 0; i<bucket.length; i++){
            let tuple = bucket[i];
            if(tuple[0] === key){
                return tuple[1];
            }
        }
        return null;
    }

    // remove(key)：删除元素
    remove(key){
        // 如果该键不存在，则返回null
        if(!this.get(key)) return null;

        // 1.根据key获得index
        const index = this.hashFunc(key, this.limit);

        const bucket = this.storage[index];
        for(let i=0; i<bucket.length; i++){
            let tuple = bucket[i];
            if(tuple[0] === key){
                bucket.splice(i, 1);
                this.count --;
                if(this.limit > 8 && this.count < MIN_LOAD_FACTOR * this.limit){
                    // 缩容操作,要将其转换为质数
                    let newLimit = this.getPrime(Math.floor(this.limit / 2));
                    this.resize(newLimit);
                }
                return tuple[1];
            }
        }
    }
    // isEmpty()：判断该hash表是否为空
    isEmpty(){
        return !this.count;
    }
    // size()：获得该hash表的长度
    size(){
        return this.count
    }
    
    // resize()：对哈希表进行扩容
    resize(newLimit){
        // 1.先获得旧的数组中的内容
        let oldStorage = this.storage;

        // 2.重置属性
        this.limit = newLimit;
        this.storage = [];
        this.count = 0;

        // 将原来oldStorage中的元素放入新的storage中
        oldStorage.forEach(bucket => {

            if(bucket === null ) return;

            bucket.forEach(tuple => {
                // 将元素放入扩容后的storage中
                this.put(tuple[0], tuple[1]);
            })
        })
    }
}