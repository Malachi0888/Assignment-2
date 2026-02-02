const fs = require('fs');

// Count total words in a file
function countWords(filename) {
    const text = fs.readFileSync(filename, 'utf-8');
    const words = text.split(/\s+/);
    return words.filter(word => word.length > 0).length;
}

// Find longest word in a file
function findLongestWord(filename) {
    const text = fs.readFileSync(filename, 'utf-8');
    const words = text.split(/\s+/);
    return words.reduce((longest, word) => word.length > longest.length ? word : longest, "");
}

// Count total lines in a file
function countLines(filename) {
    const text = fs.readFileSync(filename, 'utf-8');
    return text.split(/\r?\n/).length;
}

// Export functions
module.exports = { countWords, findLongestWord, countLines };
