import validateMessageCheck from './ValidateCheck';


test('', () => {
    const message = '11:00 test\n11:00 test1\n';
    expect(validateMessageCheck(message)).toBeTruthy();
});