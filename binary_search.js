// The binary_search function takes a sorted array and an item. If the
// item is in the array, the function returns its position. You’ll keep track
// of what part of the array you have to search through.
// Each time, you check the middle element:
//     If the guess is too low, you update low accordingly
//     And if the guess is too high, you update high

const binarySearch = (array, item) => {
    let low = 0;
    let high = array.length -1;


    while(low <= high){
        const mid = (Math.round((low + high)/2))

        if(array[mid] === item){
            return `found on index array[${mid}] = ${array[mid]}`
        }

        if(array[mid] > item) {
            high = mid - 1
        }else{
            low = mid + 1
        }
    }

    return undefined
}


const array = [3, 7, 12, 18, 21, 25, 29, 34, 38, 41, 47, 52, 56, 63, 67, 72, 78, 84, 89, 93, 97, 105, 112, 118, 124, 131, 145, 152, 168, 190];

console.log(binarySearch(array, 38));