//Ex. 1

// class Queue {
//     constructor () {
//         this.queue = []
//         this.queueSize = 0
//     }

//     enqueue(item) {
//         this.queue[this.queueSize] = item
//         this.queueSize ++
//     }

//     isEmpty() {
//         return this.queueSize === 0 ? true : false
//     }

//     peek() {
//         return this.queue[0]
//     }

//     dequeue() {
//         let item = this.queue[0]
//         this.queue.shift()
//         this.queueSize --
//         return item
//     }

//     print() {
//         console.log(this.queue)
//     }
// }

// let q = new Queue()
// console.log(q.isEmpty())    //true
// q.print()                   //[]
// q.enqueue(2)
// console.log(q.isEmpty())    //false
// q.enqueue(4)
// q.print()                   //[4,2]
// console.log(q.peek())       //2
// q.dequeue()
// q.dequeue()
// console.log(q.peek())       //null
// console.log(q.isEmpty())    //true


//Ex. 3

// class OrderedQueue {
//     constructor (ordinal) {
//         this.queue = []
//         this.queueSize = 0
//         this.orderNum = ordinal
//     }

//     enqueue(item) {
//         this.queue[this.queueSize] = item
//         this.queueSize ++
//     }

//     isEmpty() {
//         return this.queueSize === 0 ? true : false
//     }

//     peek() {
//         return this.queue[0]
//     }

//     dequeue() {
//         let item = this.queue[0]
//         this.queue.shift()
//         this.queueSize --
//         return item
//     }

//     print() {
//         console.log(this.queue)
//     }

//     getOrderNum() {
//         return this.orderNum
//     }

//     getQueueLength() {
//         return this.queueSize
//     }
// }


// class DuoQueue {
//     constructor () {
//         this.queues = {
//             1 : new OrderedQueue(1),
//             2 : new OrderedQueue(2)
//         }
//     }

//     enqueue(person, qNum) {
//         this.queues[qNum].enqueue(person)
//     }    

//     dequeue(qNum) {
//         return this.queues[qNum].dequeue()
//     }

//     getLongestQueue() {
//         return this.queues[1].getQueueLength() > this.queues[2].getQueueLength() ? this.queues[1] : this.queues[2]
//     }

//     getShortestQueue() {
//         return this.queues[1].getQueueLength() < this.queues[2].getQueueLength() ? this.queues[1] : this.queues[2]
//     }

//     balanceQueues() {
//         let longOrdinal = this.getLongestQueue().getOrderNum()
//         let shortOrdinal = this.getShortestQueue().getOrderNum()
//         while (this.queues[longOrdinal].getQueueLength() - this.queues[shortOrdinal].getQueueLength() > 1) {
//             this.enqueue(this.dequeue(longOrdinal), shortOrdinal)
//         }
//     }
// }

// let mq = new DuoQueue()
// mq.enqueue(1, 1)
// mq.enqueue(1, 1)
// mq.enqueue(1, 1)
// mq.enqueue(2, 2)
// mq.enqueue(2, 2)
// mq.dequeue(1)
// mq.dequeue(1)

// console.log(mq.getLongestQueue()) //Queue { queue: [ 2, 2 ] }
// console.log(mq.getShortestQueue()) //Queue { queue: [ 1 ] }

// mq.enqueue(1, 1)
// mq.enqueue(1, 1)
// mq.enqueue(1, 1)
// mq.enqueue(1, 1)
// mq.enqueue(1, 1)
// mq.enqueue(1, 1)

// console.log(mq.getLongestQueue()) //Queue { queue: [ 1, 1, 1, 1, 1, 1, 1 ] }
// console.log(mq.getShortestQueue()) //Queue { queue: [ 2, 2 ] }

// mq.balanceQueues()
// console.log(mq.getLongestQueue()) //Queue { queue: [ 1, 1, 1, 1, 1 ] }
// console.log(mq.getShortestQueue()) //Queue { queue: [ 1, 1, 2, 2 ] }




//Extension

class OrderedQueue {
    constructor (ordinal) {
        this.queue = []
        this.queueSize = 0
        this.orderNum = ordinal
    }

    enqueue(item) {
        this.queue[this.queueSize] = item
        this.queueSize ++
    }

    isEmpty() {
        return this.queueSize === 0 ? true : false
    }

    peek() {
        return this.queue[0]
    }

    dequeue() {
        let item = this.queue[0]
        this.queue.shift()
        this.queueSize --
        return item
    }

    print() {
        console.log(this.queue)
    }

    getOrderNum() {
        return this.orderNum
    }

    getQueueLength() {
        return this.queueSize
    }
}



class MultiQueue {
    constructor (n) {
        this.queues = {}
        for (let i = 1; i <= n; i ++) {
            this.queues[i] = new OrderedQueue(i)
        }
        this.totalQueues = n
    }

    enqueue(person, qNum) {
        if (this.totalQueues < qNum) {
            return null
        }
        this.queues[qNum].enqueue(person)
    }    

    dequeue(qNum) {
        if (this.totalQueues < qNum) {
            return null
        }
        return this.queues[qNum].dequeue()
    }

    getLongerQueueNum(ord1, ord2) {
        return this.queues[ord1].getQueueLength() > this.queues[ord2].getQueueLength() ? this.queues[ord1].getOrderNum() : this.queues[ord2].getOrderNum()
    }

    getLongestQueue() {
        if (this.totalQueues < 1) {
            return null
        }
        else {
            let longestOrdinal = this.queues[1].getOrderNum()
            for (let i = 1; i <= this.totalQueues; i ++) {
                longestOrdinal = this.getLongerQueueNum(i, longestOrdinal)
            }
            return this.queues[longestOrdinal]
        }
    }

    getShorterQueueNum(ord1, ord2) {
        return this.queues[ord1].getQueueLength() < this.queues[ord2].getQueueLength() ? this.queues[ord1].getOrderNum() : this.queues[ord2].getOrderNum()
    }

    getShortestQueue() {
        if (this.totalQueues < 1) {
            return null
        }
        else {
            let shortestOrdinal = this.queues[1].getOrderNum()
            for (let i = 1; i <= this.totalQueues; i ++) {
                shortestOrdinal = this.getShorterQueueNum(i, shortestOrdinal)
            }
            return this.queues[shortestOrdinal]
        }
    }

    queuesUnbalanced(ord1, ord2) {
        return this.queues[ord1].getQueueLength() - this.queues[ord2].getQueueLength() > 1
    }

    balanceTwoQueues(longOrdinal, shortOrdinal) {
        while (this.queuesUnbalanced(longOrdinal, shortOrdinal)) {
            this.enqueue(this.dequeue(longOrdinal), shortOrdinal)
        }
    }

    balanceQueues() {
        if (this.totalQueues < 1) {
            return null
        }
        let longOrdinal = this.getLongestQueue().getOrderNum()
        let shortOrdinal = this.getShortestQueue().getOrderNum()
        while (this.queuesUnbalanced(longOrdinal, shortOrdinal)) {
            this.balanceTwoQueues(longOrdinal, shortOrdinal)
            longOrdinal = this.getLongestQueue().getOrderNum()
            shortOrdinal = this.getShortestQueue().getOrderNum() 
        }
    }
}

let mq = new MultiQueue(3)
console.log(mq.queues) /*[  Queue { queue: [] },
                            Queue { queue: [] },
                            Queue { queue: [] },
                            Queue { queue: [] } ]
                            */

mq.enqueue(1, 1)
mq.enqueue(1, 1)
mq.enqueue(1, 1)
mq.enqueue(2, 2)
mq.enqueue(2, 2)
mq.dequeue(1)
mq.dequeue(1)

console.log(mq.getLongestQueue()) //Queue { queue: [ 2, 2 ] }
console.log(mq.getShortestQueue()) //Queue { queue: [] }

mq.enqueue(1, 1)
mq.enqueue(1, 1)
mq.enqueue(1, 1)
mq.enqueue(1, 1)
mq.enqueue(1, 1)
mq.enqueue(1, 1)

console.log(mq.getLongestQueue()) //Queue { queue: [ 1, 1, 1, 1, 1, 1, 1 ] }
console.log(mq.getShortestQueue()) //Queue { queue: [] }

mq.balanceQueues()
console.log(mq.getLongestQueue())
console.log(mq.getShortestQueue())

console.log(mq.queues)