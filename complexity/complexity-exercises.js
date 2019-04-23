//Ex. 6

// const findDuplicates = (arr) => {    
//     let checkedContent = {}
//     let duplicates = {}

//     for (let i in arr) {
//         if (checkedContent[arr[i]]) {
//             duplicates[arr[i]] ? duplicates[arr[i]].count ++ : duplicates[arr[i]] = {count: 2}
//         }
//         else {
//             checkedContent[arr[i]] = true
//         }
//         // checkedContent[arr[i]] ? checkedContent[arr[i]].count ++ : checkedContent[arr[i]] = {count: 1}
//     }

//     console.log(`Found duplicates:`)
//     console.log(duplicates)
// }

// let inputArray = [1, 2, 3, 5, 7, 2, 8, 3, 5, 9, 3, 2, 8, 5, 9, 0]

// findDuplicates(inputArray)


//Ex. 7

// const employees = {
//     "ax01": {
//         name: "Ray",
//         age: 28,
//         salary: 1300
//     },
//     "qs84": {
//         name: "Lucius",
//         age: 31,
//         salary: 840
//     },
//     "bg33": {
//         name: "Taylor",
//         age: 18,
//         salary: 2700
//     }
// }

// const findEmployeeSalary = function (employID) {
//     return employees[employID].salary
// }

// console.log(findEmployeeSalary("bg33"))


//Ex. 8

const findMiddle = (num1, num2) => Math.ceil((num2 + num1) / 2)

const findIndex = function (numArray, num) {
    let startIndex = 0
    if (num == numArray[startIndex]) { return startIndex }
    let endIndex = numArray.length - 1
    while (endIndex > startIndex) {
        let middleIndex = findMiddle(startIndex, endIndex)
        if (num == numArray[middleIndex]) { return middleIndex }
        num > numArray[middleIndex] ? startIndex = middleIndex : endIndex = middleIndex
    }
    return endIndex
}

let numbers = [24, 33, 66, 102, 108, 140, 146, 177, 182, 217, 341, 357, 372, 390, 418, 427, 442, 444, 469, 480, 572, 624, 627, 665, 680, 694, 743, 768, 790, 794, 852, 896, 919, 942, 982, 991, 1026, 1055, 1086, 1137, 1141, 1157, 1167, 1271, 1272, 1273, 1301, 1337, 1340, 1344, 1388, 1455, 1465, 1466, 1509, 1555, 1640, 1667, 1667, 1689, 1824, 1897, 1928, 1950, 1987, 2056, 2059, 2070, 2123, 2140, 2198, 2215, 2260, 2304, 2383, 2403, 2433, 2454, 2472, 2480, 2481, 2535, 2543, 2554, 2557, 2580, 2630, 2634, 2671, 2745, 2792, 2839, 2849, 2871, 2873, 2893, 2932, 2962, 2984, 2987]

console.log(findIndex(numbers, 2630))