import validateMessageCheck from './ValidateCheck';


test('Test for valid message', () => {
    const message = '11:00 test\n11:00 test1\n';
    expect(validateMessageCheck(message)).toBeTruthy();
});

test('Test for invalid number format', () => {
    const invalidHours = '1:00 test\n';
    const invalidMinutes = '11:0 test\n';
    expect(validateMessageCheck(invalidHours)).toBeFalsy();
    expect(validateMessageCheck(invalidMinutes)).toBeFalsy();
});

test('Test for non-whitespace format', () => {
    const nonWhitespace = '11:00test\n';
    expect(validateMessageCheck(nonWhitespace)).toBeFalsy();
});

test('Testfor non-Colon format', () => {
    const nonColon = '11;00 test';
    expect(validateMessageCheck(nonColon)).toBeFalsy();
})
