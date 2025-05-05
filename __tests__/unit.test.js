import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me.js';

// phone number tests
test('isPhoneNumber returns true for 123-456-7890', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('isPhoneNumber returns true for (123) 456-7890', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('isPhoneNumber returns false for 1234567890', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('isPhoneNumber returns false for phone', () => {
  expect(isPhoneNumber('hello')).toBe(false);
});

// Email test
test('isEmail returns true for test@example.com', () => {
  expect(isEmail('test@example.com')).toBe(true);
});

test('isEmail returns true for name@domain.com', () => {
  expect(isEmail('nimai@domain.com')).toBe(true);
});


test('isEmail returns false for bademail', () => {
  expect(isEmail('badekmialksmail')).toBe(false);
});

test('isEmail returns false for @missingname.com', () => {
  expect(isEmail('@missingname.com')).toBe(false);
});

// password tests
test('isStrongPassword returns true for abc123', () => {
  expect(isStrongPassword('abc123')).toBe(true);
});

test('isStrongPassword returns true for Password_123', () => {
  expect(isStrongPassword('Password_123')).toBe(true);
});

test('isStrongPassword returns false for 123', () => {
  expect(isStrongPassword('123')).toBe(false);
});

test('isStrongPassword returns false for !@#', () => {
  expect(isStrongPassword('!@#')).toBe(false);
});

// date tests
test('isDate returns true for 01/01/2023', () => {
  expect(isDate('05/02/2005')).toBe(true);
});

test('isDate returns true for 12/31/1999', () => {
  expect(isDate('12/14/1995')).toBe(true);
});

test('isDate returns false for 01-01-2023', () => {
  expect(isDate('01-01-2023')).toBe(false);
});

test('isDate returns false for January 1st', () => {
  expect(isDate('January 1st')).toBe(false);
});

// hex color tests
test('isHexColor returns true for #000', () => {
  expect(isHexColor('#000')).toBe(true);
});

test('isHexColor returns true for #a3e', () => {
  expect(isHexColor('#a3e')).toBe(true);
});

test('isHexColor returns false for zzzzzz', () => {
  expect(isHexColor('ffddfg')).toBe(false);
});

test('isHexColor returns false for #GGG', () => {
  expect(isHexColor('#XXXXX')).toBe(false);
});
