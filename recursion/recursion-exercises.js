//Ex. 1

// const factorial = function (number, currentFact = 1) {
//     if (number === 0) {
//         return 1
//     }
//     else if (number === 1) {
//         return currentFact
//     }

//     currentFact = currentFact*number
//     return factorial(number -1, currentFact)
// }

// console.log(factorial(8))
// console.log(factorial(5))
// console.log(factorial(0))
// console.log(factorial(1))
// console.log(factorial(2))
// console.log(factorial(15))



//Ex. 2

// const strReverse = function (str, reversedStr = "") {
//     if (str.length === 0) {
//         return reversedStr
//     }
//     let endIndex = str.length - 1
//     reversedStr = reversedStr + str.substring(endIndex)
//     return strReverse(str.substring(0, endIndex), reversedStr)
// }

// console.log(strReverse("My name is Paul"))


//Ex. 3

// const swap = function (stack1, stack2) {
//     if (stack1.length === 0) {
//         return 
//     }

//     stack2.push(stack1.shift())
//     return swap(stack1, stack2)
// }

// const arr1 = [1, 2, 3]
// const arr2 = []

// swap(arr1, arr2)
// console.log(arr1) //[]
// console.log(arr2) //[1, 2, 3]


//Extension

class Stack {
    constructor () {
        this.stack = []
        this.stackSize = 0
    }

    push(item) {
        this.stack[this.stackSize] = item
        this.stackSize ++
    }

    isEmpty() {
        return this.stackSize == 0 ? true : false
    }

    peek() {
        return this.stack[this.stackSize - 1]
    }

    pop() {
        let item = this.peek()
        delete this.stack[this.stackSize - 1]
        this.stackSize --
        return item
    }

    print() {
        console.log(this.stack)
    }
}

const swap = function (stack1, stack2) {
    if (stack1.isEmpty()) {
        return 
    }

    stack2.push(stack1.pop())
    return swap(stack1, stack2)
}

const stk1 = new Stack()
for (let i = 1; i < 6; i ++) {
    stk1.push(i)
}
const stk2 = new Stack()

stk1.print()
stk2.print()

swap(stk1, stk2)
stk1.print()
stk2.print()