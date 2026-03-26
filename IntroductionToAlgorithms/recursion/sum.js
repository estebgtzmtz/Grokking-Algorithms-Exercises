const simpleSum = array => {
    let sum = 0;
    for(let i = 0; i<=array.length-1; i++)
        sum += array[i]

    return sum
}
// console.log(simpleSum([1,2,3,4]));

const recursionSum = (array, index = 0) => {
    if (index === array.length - 1) return array[index];

    return array[index] + recursionSum(array, index + 1);
}

console.log(recursionSum([2,4,6]))

// 6 + []
// 4 + [6]     = 2
// 2 + [4,6]   = 1
// [2,4,6]     = 0



