class Matrix {
    constructor (numRows, numColums) {
        this.matrix = this.generateMatrix(numRows, numColums)
    }


    generateMatrix(numRows, numColumns) {
        let matrix = []
        let num = 1
        
        for (let r = 0; r < numRows; r++) {
            matrix.push([])
            for (let c = 0; c < numColumns; c++) {
                matrix[r].push(num++)
            }
        }
        return matrix
    }

    print() {
        for (let r = 0; r < this.matrix.length; r ++) {
            let rowStr = ""
            for (let c = 0; c < this.matrix[r].length; c ++) {
                rowStr += `${this.matrix[r][c]}\t`
            }
            console.log(rowStr)
        }
    }

    get(rowNum, colNum) {
        return this.matrix[rowNum][colNum]
    }

    getColumn(colNum) {
        let column = []
        for (let i = 0; i < this.matrix.length; i++) {
            column.push(this.matrix[i][colNum])
        }
        return column
    }

    printColumn(colNum) {
        console.log(this.getColumn(colNum))
    }

    getRow(rowNum) {
        let row =[]
        for (let c = 0; c < this.matrix[rowNum].length; c ++) {
            row.push(this.matrix[rowNum][c])
        }
        return row
    }

    printRow(rowNum) {
        console.log(this.getColumn(rowNum))
    }

    alter(rowNum, colNum, newValue) {
        this.matrix[rowNum][colNum] = newValue
    }

    findCoordinate(value) {
        for (let r = 0; r < this.matrix.length; r ++) {
            for (let c = 0; c < this.matrix[r].length; c ++) {
                if (this.get(r,c) == value) {
                    return { x: r, y: c }
                }
            }
        }
    }
}


//Ex. 1

// let m = new Matrix(3, 4)
// m.print()
// //prints
// /*
// 1       2       3       4
// 5       6       7       8
// 9       10      11      12
// */

// m.alter(0, 0, m.get(1, 1))
// m.printColumn(0) //prints 6, 5, 9 (separate lines)
// m.printRow(0) //prints 6, 2, 3, 4 (separate lines)


//Ex. 2

// let m = new Matrix(3, 4)
// console.log(m.findCoordinate(12)) //prints {x: 3, y: 2}
// console.log(m.findCoordinate(7)) //prints {x: 2, y: 1}


//Ex. 3

// class EmployeeMatrix extends Matrix{
//     constructor(matrix) {
//         super(matrix)
//     }
    
//     loadData(salaryData) {
//         let newMatrix = []
//         for (let i = 0; i < salaryData.length; i ++) {
//             let employeeData = Object.values(salaryData[i])
//             newMatrix.push(employeeData)
//         }
//         this.matrix = newMatrix
//     }

//     getEmployees(department) {
//         let employees = []
//         for (let r = 0; r < this.matrix.length; r ++) {
//             if (this.matrix[r][2] === department) {
//                 employees.push(this.matrix[r][1])
//             }
//         }
//         return employees
//     }

//     getTotalSalary(department) {
//         let total = 0
//         for (let r = 0; r < this.matrix.length; r ++) {
//             if (this.matrix[r][2] === department) {
//                 total += this.matrix[r][3]
//             }
//         }
//         return total
//     }

//     findRichest() {
//         let richest = {
//             name: this.matrix[0][1],
//             salary: this.matrix[0][3]
//         }
//         for (let r = 0; r < this.matrix.length; r ++) {
//             if (this.matrix[r][3] > richest.salary) {
//                 richest = {
//                     name: this.matrix[r][1],
//                     salary: this.matrix[r][3]
//                 }
//             }
//         }
//         return richest.name
//     }
// }

// let data = [
//     { _id: "e10021", name: "Gillian", department: "Finance", salary: 2000 },
//     { _id: "e10725", name: "Tibor", department: "Design", salary: 1200 },
//     { _id: "e10041", name: "Anisha", department: "Finance", salary: 2300 },
//     { _id: "e10411", name: "Jakub", department: "Design", salary: 1600 },
//     { _id: "e11995", name: "Mar", department: "Design", salary: 1300 },
//     { _id: "e10732", name: "Nisha", department: "Design", salary: 1200 }
// ]

// let m = new EmployeeMatrix()

// m.loadData(data)
// m.print()


//Ex. 4

// console.log(m.getEmployees("Finance")) //prints [ 'Gillian', 'Anisha' ]
// console.log(m.getEmployees("Design")) //prints [ 'Tibor', 'Jakub', 'Mar', 'Nisha' ]


//Ex. 5

// console.log(m.getTotalSalary("Finance")) //prints 4300
// console.log(m.getTotalSalary("Design")) //prints 5300


//Ex. 6

// console.log(m.findRichest()) //prints Anisha


//Ex. 7

class TicTacToe extends Matrix {
    constructor (matrix) {
        super(matrix)
    }

    loadBoard() {
        let newMatrix = []
       
        for (let r = 0; r < 3; r++) {
            newMatrix.push([])
            for (let c = 0; c < 3; c++) {
                newMatrix[r].push(".")
            }
        }
        this.matrix = newMatrix
    }

    getPlayerMarker(player) {
        return player == 1 ? "x" : "o"
    }

    checkIfEqual(array) {
        if (array.some(a => a === ".")) {
            return false
        }
        return array.every(a => a === array[0])
    }

    checkDiagonals() {
        if (this.matrix[1][1] === ".") {
            return false
        }
        if (this.matrix[0][0] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][2]) {
            return true
        }
        else if (this.matrix[2][0] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[0][2]) {
            return true
        }
        else {
            return false
        }
    }

    checkForThree() {
        for (let r = 0; r < 3; r ++) {
            if (this.checkIfEqual(this.getRow(r))) {
                return true
            }
        }
        for (let c = 0; c < 3; c ++) {
            if (this.checkIfEqual(this.getColumn(c))) {
                return true
            }
        }
        if(this.checkDiagonals()) {
            return true
        }
        return false
    }

    play(rowNum, columnNum, player) {
        this.alter(rowNum, columnNum, this.getPlayerMarker(player))
        if (this.checkForThree()) {
            console.log(`Congratulations Player ${player}`)
        }
    }
}

// let board = new TicTacToe()
// board.loadBoard()
// board.print()


//Ex. 8

// let board = new TicTacToe()
// board.loadBoard()

// board.play(2, 2, 1)
// board.play(0, 0, 2)
// board.print()


//Ex. 9

// let board = new TicTacToe()
// board.loadBoard()

// board.play(2, 2, 1)
// board.play(0, 0, 0)
// board.play(0, 2, 1)
// board.play(1, 0, 0)
// board.play(1, 2, 1) //prints Congratulations Player 1

// board.print()