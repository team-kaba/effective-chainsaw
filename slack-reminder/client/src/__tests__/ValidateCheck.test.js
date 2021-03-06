import isValidateMessage from '../reminder/util/ValidateCheck';


test('Test for a line break at end of sentence', () => {
    const message = '11:00 test\n11:01 test1\n11:02 test2\n';
    expect(isValidateMessage(message)).toBeTruthy();
});

test('Test for no line break at end of sentence', () => {
    const message = '11:00 test\n11:01 test1\n11:02 test2';
    expect(isValidateMessage(message)).toBeTruthy();
})

test('Test for invalid time format', () => {
    const invalidHours = '1:00 test\n';
    const invalidMinutes = '11:0 test\n';
    expect(isValidateMessage(invalidHours)).toBeFalsy();
    expect(isValidateMessage(invalidMinutes)).toBeFalsy();
});

test('Test for non-whitespace format', () => {
    const nonWhitespace = '11:00test\n';
    expect(isValidateMessage(nonWhitespace)).toBeFalsy();
});

test('Test for non-Colon format', () => {
    const nonColon = '11;00 test\n11:01 test1\n11:02 test2\n';
    expect(isValidateMessage(nonColon)).toBeFalsy();
})

test('Test for first non-numeric character', () => {
    const heada = 'a11:00 test\n11:01 test1\n11:02 test2\n';
    const headBlank = ' 11:00 test\n11:01 test1\n11:02 test2\n';

    expect(isValidateMessage(heada)).toBeFalsy();
    expect(isValidateMessage(headBlank)).toBeFalsy();
})

test('Test for multiple consecutive line breaks', () => {
    const multiLineBreak = '11:00 test\n11:01 test1\n\n11:01 test2\n';
    expect(isValidateMessage(multiLineBreak)).toBeFalsy();
})