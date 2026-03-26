const findMaxNumber = (array, index = 0) => {
    // Base case: last element
    if (index === array.length - 1) {
        return array[index];
    }

    let subMax = findMaxNumber(array, index + 1);

    if (array[index] > subMax) return array[index];
    else return subMax;
}

console.log(findMaxNumber([32175,6543,4,3,78,91132,453,234,542]))