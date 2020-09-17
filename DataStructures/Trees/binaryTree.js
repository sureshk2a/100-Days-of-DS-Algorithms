function Node(value){
    this.root = value;
    this.right = null;
    this.left = null;
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(value){
        const newNode = Node(value)
        if(this.root == null){
            this.root = newNode;
        }else{
            let currentNode = this.root;
            while(true){
                if(value < currentNode){
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                }else{
                    if(currentNode.right){
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode  = currentNode.right;
                }
            }
        }
    }
    lookup(){
        const newNode = Node(value)
    }
}

const tree = new BinarySearchTree();
console.log(tree.insert(8))
