class Node {
    constructor(value) {
          this.value = value;
          this.leftChild = null;
          this.rightChild = null;
    }
    
    insertLeft(value) {
          if (!this.leftChild) {
                this.leftChild = new Node(value);
          } else {
                let newNode = new Node(value);
                newNode.leftChild = this.leftChild;
                this.leftChild = newNode
          }
    }

    insertRight(value) {
        if (!this.rightChild) {
              this.rightChild = new Node(value);
        } else {
              let newNode = new Node(value);
              newNode.rightChild = this.rightChild;
              this.rightChild = newNode
        }
  }
}

// const H = new Node("H")

// H.insertRight("Y")
// H.insertRight("S")
// H.rightChild.insertLeft("I")
// H.rightChild.insertLeft("L")
// H.insertLeft("E")
// H.leftChild.insertRight("G")

// console.log(H)

class BSNode {
    constructor(value) {
        this.value = value;
        this.leftChild;
        this.rightChild;
    }

    insertNode(newVal) {
        if (!this.value) {
            this.value = newVal
        }
        else if (newVal > this.value && this.rightChild) {
            this.rightChild.insertNode(newVal)
        }
        else if(newVal <= this.value && this.leftChild) {
            this.leftChild.insertNode(newVal)
        }
        else if (newVal <= this.value) {
            this.leftChild = new BSNode(newVal)
        }
        else {
            this.rightChild = new BSNode(newVal)
        }
    }

    findNode(searchVal) {
        if (this.value == searchVal) {
            return true
        }
        else if (searchVal > this.value && this.rightChild) {
            return this.rightChild.findNode(searchVal)
        }
        else if(searchVal < this.value && this.leftChild) {
            return this.leftChild.findNode(searchVal)
        }
        else {
            return false
        }
    }

    getParent(searchVal) {
        if ((this.leftChild && this.leftChild.value == searchVal) || (this.rightChild && this.rightChild.value == searchVal)) {
            return this.value
        }
        else if (searchVal > this.value && this.rightChild) {
            return this.rightChild.getParent(searchVal)
        }
        else if(searchVal < this.value && this.leftChild) {
            return this.leftChild.getParent(searchVal)
        }
        else {
            return null
        }
    }

    findCommonParent(val1, val2) {
        if (this.leftChild.findNode(val1) && this.rightChild.findNode(val2)) {
            return this.value
        }
        else if (this.leftChild.value == val1 || this.leftChild.value == val2 || this.rightChild.value == val2 || this.rightChild.value == val1) {
            return this.value
        }
        else if (this.leftChild.findNode(val1) && this.leftChild.findNode(val2)) {
            return this.leftChild.findCommonParent(val1, val2)
        }
        else {
            return this.rightChild.findCommonParent(val1, val2)
        }
    }
}

//Ex. 1

// const letters = ["H", "E", "S", "G", "L", "Y", "I"]
// let bSTree = new BSNode()
// letters.forEach(l => bSTree.insertNode(l))

// console.log(bSTree);

// console.log(bSTree.findNode("E"))
// console.log(bSTree.findNode("I"))
// console.log(bSTree.findNode("M"))
// console.log(bSTree.findNode("H"))


//Ex. 2
const letters = ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"]
let bSTree = new BSNode()
letters.forEach(l => bSTree.insertNode(l))

console.log(bSTree)


console.log(bSTree.findCommonParent("B", "I")) //should return "H"
console.log(bSTree.findCommonParent("B", "G")) //should return "E"
console.log(bSTree.findCommonParent("B", "L")) //should return "J"
console.log(bSTree.findCommonParent("L", "Y")) //should return "R"
console.log(bSTree.findCommonParent("E", "H")) //should return "J"
console.log(bSTree.findCommonParent("Y", "S")) //should return "R"