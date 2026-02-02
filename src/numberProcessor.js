const fs = require('fs');

// Read numbers from a file
function readNumbers(filename) {
    const text = fs.readFileSync(filename, 'utf-8');
    return text.split(/\r?\n/).map(Number).filter(n => !isNaN(n));
}

// Calculate sum
function sumNumbers(filename) {
    const numbers = readNumbers(filename);
    return numbers.reduce((a,b) => a+b, 0);
}

// Find highest number
function maxNumber(filename) {
    const numbers = readNumbers(filename);
    return Math.max(...numbers);
}

// Find lowest number
function minNumber(filename) {
    const numbers = readNumbers(filename);
    return Math.min(...numbers);
}

// Calculate average
function averageNumber(filename) {
    const numbers = readNumbers(filename);
    return numbers.reduce((a,b) => a+b, 0) / numbers.length;
}

// Export functions
module.exports = { sumNumbers, maxNumber, minNumber, averageNumber };
