//Spot check

// class MyStack {
//     constructor () {
//         this.stack = []
//         this.stackSize = 0
//     }

//     push(item) {
//         this.stack[this.stackSize] = item
//         this.stackSize ++
//     }

//     isEmpty() {
//         return this.stackSize == 0 ? true : false
//     }

//     peek() {
//         return this.stack[this.stackSize - 1]
//     }

//     pop() {
//         let item = this.peek()
//         delete this.stack[this.stackSize - 1]
//         this.stackSize --
//         return item
//     }

//     print() {
//         console.log(this.stack)
//     }
// }


// let myStack = new MyStack()
// console.log(myStack.isEmpty())    //true
// myStack.print()                    //[]
// myStack.push(2)      
// console.log(myStack.isEmpty())     //false
// myStack.push(4)      
// myStack.print()                    //[2,4]
// console.log(myStack.peek())        //4
// myStack.pop()
// myStack.pop()
// console.log(myStack.peek())       //null
// console.log(myStack.isEmpty())    //true



//Ex. 2

class MinStack {
    constructor () {
        this.stack = { arr: [], size: 0 }
        this.minima = { arr: [], size: 0 }
    }

    getLast(selectedArray) {
        return selectedArray.arr[selectedArray.size - 1]
    }

    getMin() {
        return this.getLast(this.minima)
    }

    pushAndUpdateSize(selectedArray, item) {
        selectedArray.arr[selectedArray.size] = item
        selectedArray.size ++
    }

    popAndUpdateSize(selectedArray) {
        delete selectedArray.arr[selectedArray.size -1]
        selectedArray.size --
    }

    push(item) {
        this.pushAndUpdateSize(this.stack, item)
        if (this.getMin() && item >= this.getMin()) {
            return
        }
        else {
            this.pushAndUpdateSize(this.minima, item)        }
    }

    isEmpty() {
        return this.stack.size === 0 ? true : false
    }

    peek() {
        return this.getLast(this.stack)
    }

    pop() {
        let item = this.peek()
        this.popAndUpdateSize(this.stack)
        if (item === this.getMin()) {
            this.popAndUpdateSize(this.minima)
        }
        return item
    }

    print() {
        console.log(this.stack)
    }
}

let ms = new MinStack()
ms.push(17)
ms.push(12)
ms.push(31)
console.log(ms.getMin())    //12
ms.pop()
ms.pop()
ms.pop()
console.log(ms.getMin())    //null
ms.push(19)
ms.push(21)
console.log(ms.getMin())    //19
ms.push(3)
console.log(ms.getMin())    //3
ms.pop()
ms.pop()
console.log(ms.getMin())    //19