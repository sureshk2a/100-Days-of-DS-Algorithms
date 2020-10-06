class Stack{
    constructor(){
        this.top=null;
        this.bottom=null;
        this.length=0;
    }

    peek(){ //View the value on top
        return this.top;
    }

    push(value){
        const newNode = {
            value : value,
            next : null
        }

        if(this.bottom==null){
            this.bottom = newNode;
            this.top = newNode;
            newNode.next = null;
            this.length++;
            return this;
        }
        const nxt = this.top;
        newNode.next = nxt;
        this.top = newNode;
        this.length++;
        return this;
    }

    pop(){

    }
}

const stack = new Stack();
stack.push("google")
stack.push("Udemy")
stack.push("Discord")
console.log(stack)