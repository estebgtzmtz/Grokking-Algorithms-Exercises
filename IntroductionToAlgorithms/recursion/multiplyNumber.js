const array = [2,4,6]

const recursionMultiplyNumberUsingSlice = array => {
    if (array.length === 1) return array[0];

    return array[0] * recursionMultiplyNumberUsingSlice(array.slice(1))
}
// multiply([2,4,6]) =
//     2 * multiply([4,6])
//
// multiply([4,6]) =
//     4 * multiply([6])
//
// multiply([6]) =
//     6

// console.log(recursionMultiplyNumberUsingSlice(array))


const recursionMultiplyNumberUsingIndex = (array, index = 0) => {
    if(index === array.length - 1) return array[index];

    return array[index] * recursionMultiplyNumberUsingIndex(array, index + 1);
}

console.log(recursionMultiplyNumberUsingIndex(array))