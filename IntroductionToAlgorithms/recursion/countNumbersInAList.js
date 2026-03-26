const countNumbersInAList = (array, index = 0) => {
    if (index === array.length) return 0

    return 1 + countNumbersInAList(array, index + 1)
}

console.log(countNumbersInAList([5,3,87,23,45,32]))