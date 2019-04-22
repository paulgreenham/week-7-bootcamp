const findDuplicates = (arr) => {    
    arr.sort()

    for (let i in arr) {
        if (arr[i] == arr[i+1]) {
            console.log(`${arr[i]} has a duplicaate`)
        }
    }
}