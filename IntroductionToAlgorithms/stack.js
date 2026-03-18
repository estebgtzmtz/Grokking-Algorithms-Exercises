// The call stack is a structure that keeps track of function calls.
// Functions are added to the stack when they are called,
// and removed when they finish execution (LIFO: Last In, First Out).

const greet = name => {
    console.log(`hello ${name}`)
    // At this point, greet is on top of the call stack

    greet2(name)
    // greet2 is pushed on top of the stack
    // It runs, then gets popped off when it finishes

    console.log('getting ready to say goodbye !!')
    // Execution continues in greet (still in the stack)

    bye()
    // bye is pushed onto the stack
    // It runs, then gets popped off

    // After this line, greet finishes and is removed from the stack
}

const greet2 = name =>
    // greet2 runs when it's at the top of the stack
    console.log(`how are you ${name}?`)

const bye = () =>
    // bye runs when it's at the top of the stack
    console.log('ok bye')



// When we call greet, it gets pushed to the call stack
greet('Esteban')

// Execution order in the call stack:
//
// 1. push greet
// 2. greet calls greet2 → push greet2
// 3. greet2 finishes → pop greet2
// 4. greet continues
// 5. greet calls bye → push bye
// 6. bye finishes → pop bye
// 7. greet finishes → pop greet