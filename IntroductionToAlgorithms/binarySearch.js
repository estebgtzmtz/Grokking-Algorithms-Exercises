const isPalindrome = (string, leftIndex = 0, rightIndex = string.length - 1) => {
    // 🛑 BASE CASE:
    // When the pointers meet or cross,
    // it means we've compared all necessary pairs
    // 👉 Nothing left to validate
    if (leftIndex >= rightIndex) return true

    // 🔍 RECURSIVE CASE (current validation):
    // Compare the characters at both ends
    // 👉 If they match, reduce the problem to the inner substring
    if (string[leftIndex] === string[rightIndex]) {
        // 🔁 Delegate to a smaller subproblem:
        // same string, but move both pointers inward
        return isPalindrome(string, leftIndex + 1, rightIndex - 1);
    }

    // ❌ FAILURE CASE:
    // If the characters don't match, it's not a palindrome
    return false
}

console.log(isPalindrome('abba'))