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

// 🧠 Mental model (NOT arrays, only values):
//
// recursionSum([2,4,6])
// = 2 + recursionSum([4,6])
// = 2 + (4 + recursionSum([6]))
// = 2 + (4 + 6)
//
// 👉 Calls go FORWARD (left → right):
// index: 0 → 1 → 2
//
// 👉 Resolution goes BACKWARD (right → left):
// index 2 → 6
// index 1 → 4 + 6 = 10
// index 0 → 2 + 10 = 12
//
// 💥 Key idea:
// The function builds a chain of pending operations:
// 2 + (4 + (6))
//
// The last element (right side) resolves first,
// then results propagate back to the left.



