// A recursive function is a function that calls itself.
// Each call is added to the call stack.
// The stack keeps growing until the base case is reached,
// then it starts to unwind (functions are removed one by one).

const countToOne = number => {
    console.log(number)

    // Each time this function runs, a new "frame" is pushed onto the stack
    // Example: countToOne(10) → countToOne(9) → countToOne(8) → ...

    // Base case: stop when number is 1 or less
    if (number <= 1) {
        // When we hit the base case, no more functions are added to the stack
        // The stack starts to "pop" (unwind)
        return
    }

    // Recursive case:
    // This pushes a new function call onto the stack
    countToOne(number - 1)

    // After the recursive call finishes,
    // execution continues here as the stack unwinds
}

countToOne(10)

// Call stack behavior:
//
// push countToOne(10)
// push countToOne(9)
// push countToOne(8)
// ...
// push countToOne(1)  ← base case reached
//
// Now the stack unwinds:
// pop countToOne(1)
// pop countToOne(2)
// pop countToOne(3)
// ...
// pop countToOne(10)