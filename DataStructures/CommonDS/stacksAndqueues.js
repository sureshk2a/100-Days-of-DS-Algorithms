//----Stacks------ - Browser, go back to sites
//Linear data structure 
//LIFO - last in first out
//pop,push,peek

//----Queues-------
//Queues - Cab reservation, ticket seat reservation
//FIFO - first in first out
//enqueue, dequeue, peek

class Node{
    constructor(){

    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = null;
    }

    peek(){
        return this.first;
    }

    enqueue(value){
        const newNode = new Node(value);
        if(this.length == 0){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    deqeue(){

    }
}

var q = new Queue();
q.enqueue("Google")


