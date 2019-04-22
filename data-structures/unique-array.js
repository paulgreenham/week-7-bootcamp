class UniqueArray {
    constructor () {
        this.arr = []
        this.arrLength = 0
        this.items = {}
    }

    add(item) {
        if (this.items[JSON.stringify(item)]) {
                return
        }
        else {
            this.arr[this.arrLength] = item
            this.arrLength ++
            this.items[JSON.stringify(item)] = item
        }
    }

    showAll() {
        console.log(this.arr)
    }

    exists(item) {
        return console.log(this.items[item] ? true : false)
    }

    get(index) {
        return this.arr[index]
    }
}


const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.exists("toy") //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"
uniqueStuff.add({x: 3, y: 4, z: 5})
uniqueStuff.add({x:3,y:4,z:5})
uniqueStuff.add({x: 3, y: 4, z: 5, a: 6})
uniqueStuff.showAll()