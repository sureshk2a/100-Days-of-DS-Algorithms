//Every node will have a pointer to next node and the previous node
class DoublyLinkedList{
    constructor(value){
        this.head = {
            value : value,
            next : null,
            prev : null
        } 
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = {
            value: value,
            next: null,
            prev: null
        }
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    
    prepand(value){
        const newNode = {
            value: value,
            next: this.head
        }
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index,value){
        if(index>=this.length){
            return this.append(value)
        }

        const newNode = {
            value: value,
            next: null,
            prev: null
        }

        const leader = this.traverseToTheIndex(index-1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;


    }

    traverseToTheIndex(index){
        var currentNode = this.head;
        var counter = 0;
        while(counter != index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    
    remove(index){
        var leader = this.traverseToTheIndex(index-1);
        var nodeToDelete = leader.next;
        head.next = nodeToDelete.next;
        this.length--;
        return this;
    }
 
}
const doublyLinkList = new DoublyLinkedList(10);
doublyLinkList.append(5);
console.log(doublyLinkList)