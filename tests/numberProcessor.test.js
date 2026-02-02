const { sumNumbers, maxNumber, minNumber, averageNumber } = require('../src/numberProcessor');

test('sumNumbers calculates sum correctly', () => {
    expect(sumNumbers('data/sample-numbers.txt')).toBeGreaterThan(0);
});

test('maxNumber finds highest number', () => {
    expect(maxNumber('data/sample-numbers.txt')).toBeGreaterThan(0);
});

test('minNumber finds lowest number', () => {
    expect(minNumber('data/sample-numbers.txt')).toBeLessThanOrEqual(maxNumber('data/sample-numbers.txt'));
});

test('averageNumber calculates average', () => {
    expect(averageNumber('data/sample-numbers.txt')).toBeGreaterThan(0);
});
