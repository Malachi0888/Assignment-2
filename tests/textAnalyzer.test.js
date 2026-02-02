const { countWords, findLongestWord, countLines } = require('../src/textAnalyzer');

test('countWords counts total words', () => {
    expect(countWords('data/quotes.txt')).toBeGreaterThan(0);
});

test('findLongestWord returns the longest word', () => {
    expect(findLongestWord('data/quotes.txt')).toMatch(/[a-zA-Z]+/);
});

test('countLines counts total lines', () => {
    expect(countLines('data/quotes.txt')).toBeGreaterThan(0);
});
