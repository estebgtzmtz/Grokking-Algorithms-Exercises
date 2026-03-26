const isPalindrome = (string, leftIndex = 0, rightIndex = string.length - 1) => {
    // 🛑 BASE CASE:
    // When pointers meet or cross, recursion stops
    // 👉 This is the deepest point in the call stack
    if (leftIndex >= rightIndex) return true

    // 🔍 CHECK CURRENT FRAME:
    // Each call compares a pair of characters
    if (string[leftIndex] === string[rightIndex]) {

        // 📦 STACK BEHAVIOR (PUSH):
        // This call is NOT finished yet
        // 👉 It depends on the result of the next recursive call
        //
        // Think:
        // "I'll return true... IF the inner substring is also true"

        return isPalindrome(string, leftIndex + 1, rightIndex - 1);
    }

    // ❌ If mismatch happens, we stop immediately
    return false
}