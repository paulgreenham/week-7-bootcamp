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

    printColumn(colNum) {
        for (let i = 0; i < this.matrix.length; i++) {
            console.log(this.matrix[i][colNum])
        }
    }

    printRow(rowNum) {
        for (let c = 0; c < this.matrix[rowNum].length; c ++) {
            console.log(this.matrix[rowNum][c])
        }
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

class EmployeeMatrix extends Matrix{
    constructor(matrix) {
        super(matrix)
    }
    
    loadData(salaryData) {
        let newMatrix = []
        for (let i = 0; i < salaryData.length; i ++) {
            let employeeData = Object.values(salaryData[i])
            newMatrix.push(employeeData)
        }
        this.matrix = newMatrix
    }

    getEmployees(department) {
        let employees = []
        for (let r = 0; r < this.matrix.length; r ++) {
            if (this.matrix[r][2] === department) {
                employees.push(this.matrix[r][1])
            }
        }
        return employees
    }

    getTotalSalary(department) {
        
    }

    findRichest() {
        let richest = {
            name: this.matrix[0][1],
            salary: this.matrix[0][3]
        }
        for (let r = 0; r < this.matrix.length; r ++) {
            if (this.matrix[r][3] > richest.salary) {
                richest = {
                    name: this.matrix[r][1],
                    salary: this.matrix[r][3]
                }
            }
        }
        return richest.name
    }
}

let data = [
    { _id: "e10021", name: "Gillian", department: "Finance", salary: 2000 },
    { _id: "e10725", name: "Tibor", department: "Design", salary: 1200 },
    { _id: "e10041", name: "Anisha", department: "Finance", salary: 2300 },
    { _id: "e10411", name: "Jakub", department: "Design", salary: 1600 },
    { _id: "e11995", name: "Mar", department: "Design", salary: 1300 },
    { _id: "e10732", name: "Nisha", department: "Design", salary: 1200 }
]

let m = new EmployeeMatrix()

m.loadData(data)
// m.print()


//Ex. 4

// console.log(m.getEmployees("Finance")) //prints [ 'Gillian', 'Anisha' ]
// console.log(m.getEmployees("Design")) //prints [ 'Tibor', 'Jakub', 'Mar', 'Nisha' ]


//Ex. 5





//Ex. 6

// console.log(m.findRichest()) //prints Anisha