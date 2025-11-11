/**
 * Reverses the digits of a given number.
 *
 * @param {number} num The number to be reversed.
 * @returns {number} The reversed number.
 */
function reverseNumber(num) {
    // Input validation: Ensure it's a number and handle negative signs if necessary
    if (typeof num !== 'number' || isNaN(num)) {
        console.error("Error: Input must be a valid number.");
        return NaN; // Return Not-a-Number for invalid input
    }

    // Convert number to string to handle potential large numbers more easily
    // Also handles the sign if it's negative, but we'll reverse the absolute value.
    const numStr = String(Math.abs(num));
    
    // Reverse the string
    const reversedStr = numStr.split('').reverse().join('');
    
    // Convert back to a number
    let reversedNum = parseInt(reversedStr, 10);

    // If the original number was negative, apply the negative sign to the reversed number
    if (num < 0) {
        reversedNum *= -1;
    }

    return reversedNum;
}

/**
 * Checks if a given number is a palindrome.
 * A number is a palindrome if it reads the same forwards and backwards.
 *
 * @param {number} num The number to check for palindrome property.
 * @returns {boolean} True if the number is a palindrome, false otherwise.
 */
function isPalindromeNumber(num) {
    // Input validation for safety
    if (typeof num !== 'number' || isNaN(num)) {
        console.error("Error: Input must be a valid number for palindrome check.");
        return false;
    }

    // Negative numbers are generally not considered palindromes in number theory,
    // as the sign breaks the symmetry. Also, 0 is a palindrome.
    if (num < 0) {
        return false;
    }

    // Get the reversed number using our helper function
    const reversed = reverseNumber(num);

    // Compare the original number with its reversed version
    return num === reversed;
}


// --- Test Cases ---

console.log("--- Reversing Numbers ---");
console.log(`Original: 12345, Reversed: ${reverseNumber(12345)}`); // Expected: 54321
console.log(`Original: 987, Reversed: ${reverseNumber(987)}`);     // Expected: 789
console.log(`Original: 121, Reversed: ${reverseNumber(121)}`);     // Expected: 121
console.log(`Original: 5, Reversed: ${reverseNumber(5)}`);         // Expected: 5
console.log(`Original: 0, Reversed: ${reverseNumber(0)}`);         // Expected: 0
console.log(`Original: 100, Reversed: ${reverseNumber(100)}`);     // Expected: 1
console.log(`Original: -123, Reversed: ${reverseNumber(-123)}`);   // Expected: -321
console.log(`Original: -121, Reversed: ${reverseNumber(-121)}`);   // Expected: -121
console.log(`Original: 120, Reversed: ${reverseNumber(120)}`);     // Expected: 21 (leading zero dropped)
console.log(`Original: "hello", Reversed: ${reverseNumber("hello")}`); // Expected: Error and NaN


console.log("\n--- Palindrome Check ---");
console.log(`Is 121 a palindrome? ${isPalindromeNumber(121)}`);     // Expected: true
console.log(`Is 12345 a palindrome? ${isPalindromeNumber(12345)}`); // Expected: false
console.log(`Is 7 a palindrome? ${isPalindromeNumber(7)}`);         // Expected: true
console.log(`Is 0 a palindrome? ${isPalindromeNumber(0)}`);         // Expected: true
console.log(`Is 10 a palindrome? ${isPalindromeNumber(10)}`);       // Expected: false (reversed is 01 -> 1)
console.log(`Is 55555 a palindrome? ${isPalindromeNumber(55555)}`); // Expected: true
console.log(`Is 1221 a palindrome? ${isPalindromeNumber(1221)}`);   // Expected: true
console.log(`Is -121 a palindrome? ${isPalindromeNumber(-121)}`);   // Expected: false (negative numbers are typically not palindromes)
console.log(`Is "test" a palindrome? ${isPalindromeNumber("test")}`); // Expected: Error and false