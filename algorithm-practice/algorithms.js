//Ex. 1

const makeStars = function (num) {
    let starStr = ""
    for (let i = 0; i < num; i ++) {
        starStr += "*"
    }
    return starStr
}

const printStars = function (num) {
    for (let i = 1; i < num + 1; i ++) {
        console.log(makeStars(i))
    }
}

printStars(5)