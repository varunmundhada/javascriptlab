/**
 * Calculates and returns the grade based on the entered marks.
 *
 * @param {number} marks The marks obtained by the student.
 * @returns {string} The grade (e.g., "A+", "A", "B", "C", "Fail", "Invalid Marks").
 */
function getGrade(marks) {
    if (typeof marks !== 'number' || isNaN(marks) || marks < 0 || marks > 100) {
        return "Invalid Marks: Please enter a number between 0 and 100.";
    }

    if (marks > 90) {
        return "A+";
    } else if (marks >= 80) { // Equivalent to marks between 80-90
        return "A";
    } else if (marks >= 66) { // Equivalent to marks between 66-80
        return "B";
    } else if (marks >= 50) { // Equivalent to marks between 50-65
        return "C";
    } else {
        return "Fail"; // Marks below 50
    }
}

// --- Test Cases ---

console.log("Marks: 95, Grade: " + getGrade(95));   // Expected: A+
console.log("Marks: 90, Grade: " + getGrade(90));   // Expected: A
console.log("Marks: 85, Grade: " + getGrade(85));   // Expected: A
console.log("Marks: 80, Grade: " + getGrade(80));   // Expected: A
console.log("Marks: 75, Grade: " + getGrade(75));   // Expected: B
console.log("Marks: 66, Grade: " + getGrade(66));   // Expected: B
console.log("Marks: 60, Grade: " + getGrade(60));   // Expected: C
console.log("Marks: 50, Grade: " + getGrade(50));   // Expected: C
console.log("Marks: 49, Grade: " + getGrade(49));   // Expected: Fail
console.log("Marks: 0, Grade: " + getGrade(0));     // Expected: Fail
console.log("Marks: 101, Grade: " + getGrade(101)); // Expected: Invalid Marks
console.log("Marks: -5, Grade: " + getGrade(-5));   // Expected: Invalid Marks
console.log("Marks: 'abc', Grade: " + getGrade('abc')); // Expected: Invalid Marks
console.log("Marks: null, Grade: " + getGrade(null)); // Expected: Invalid Marks
console.log("Marks: undefined, Grade: " + getGrade(undefined)); // Expected: Invalid Marks