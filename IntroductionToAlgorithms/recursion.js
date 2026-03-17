// A recursive function is a function that calls itself.
// To avoid infinite loops, it must have a stopping condition.
//
// Every recursive function has two parts:
// 1. Base case → stops the recursion
// 2. Recursive case → calls the function again with new data

const countToOne = number => {
    console.log(number)

    // Base case: stop when number is 1 or less
    if (number <= 1) return

    // Recursive case: call function with a smaller number
    countToOne(number - 1)
}

countToOne(10)