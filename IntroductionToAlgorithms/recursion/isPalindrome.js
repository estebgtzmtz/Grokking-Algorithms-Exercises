const isPalindrome = (string, leftIndex = 0, rightIndex = string.length - 1) => {
    // BASE CASE:
    // When pointers meet or cross, recursion stops
    // This is the deepest point in the call stack
    if (leftIndex >= rightIndex) return true

    // Each call compares a pair of characters
    if (string[leftIndex] === string[rightIndex])
        return isPalindrome(string, leftIndex + 1, rightIndex - 1);
        // STACK BEHAVIOR (PUSH):
        // This call is NOT finished, yet
        // It depends on the result of the next recursive call

    return false // If mismatch happens, we stop immediately
}