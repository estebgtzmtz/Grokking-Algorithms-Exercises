const binarySearch = (array, item, leftIndex = 0, rightIndex= array.length-1) => {
    if(leftIndex > rightIndex) return undefined

    const midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if(array[midIndex] === item) return `found ${array[midIndex]} on index ${midIndex}`;

    if(item > array[midIndex]) return binarySearch(array, item, midIndex + 1, rightIndex)
    if(item < array[midIndex]) return binarySearch(array, item, leftIndex, midIndex - 1)

}

const array = [3, 7, 12, 18, 21, 25, 29, 34, 38, 41, 47, 52, 56, 63, 67, 72, 78, 84, 89, 93, 97, 105, 112, 118, 124, 131, 145, 152, 168, 190];

console.log(binarySearch(array, 222));