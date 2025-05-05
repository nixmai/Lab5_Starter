// sum.test.js
import { sum } from '../code-to-unit-test/sum.js';

test('adds 1 + 2 to equal 3 (direct)', () => {
  expect(1 + 2).toBe(3); 
});

test('adds 1 + 2 using sum() to equal 3', () => {
  expect(sum(1, 2)).toBe(3); 
});
