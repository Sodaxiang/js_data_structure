import {hashFunc, HashTable, isPrime, getPrime} from './hash_table';

// console.log(hashFunc('abc', 11));
// console.log(hashFunc('name', 11));
// console.log(hashFunc('cba', 11));
// console.log(hashFunc('npc', 11));
// console.log(hashFunc('mba', 11));

const hashTable = new HashTable();

hashTable.put("name","Lucy");
hashTable.put("age","18");
hashTable.put("add","China");
hashTable.put("gender","female");
hashTable.put("age","10");
hashTable.put("ssss","bbb");
hashTable.put("hhh","lll");
hashTable.put("asead","lll");
// console.log(hashTable.get("name"))
// console.log(hashTable.remove("age"))
// console.log(hashTable.isEmpty())
console.log(hashTable);
// console.log(isPrime(4));
// console.log(getPrime(4))



