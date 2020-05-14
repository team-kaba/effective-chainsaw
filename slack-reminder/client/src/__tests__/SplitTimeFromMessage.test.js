import SplitTimeFromMessage from '../reminder/util/SplitTimeFromMessage';

/*
test('Time and message split correctly', () => {
    const target = '11:00 test\n11:01 test';
    const actualTime = new SplitTimeFromMessage(target);
    
    const expectedTime = ['11:00', '11:01'];
    const expectedMessage = ['test', 'test1'];

    expect(actualTime).toEqual(expectedTime);
    expect(actualMessage).toEqual(expectedMessage);
})
*/

test('Test for SplitTimeFromMessage.splitLineBreaks method ', () => {
    const target = '11:00 test\n11:01 test1';
    const actual = SplitTimeFromMessage.splitLineBreaks(target);
    const expected = ['11:00 test', '11:01 test1'];

    expect(actual).toEqual(expected);
})

test('Test for SplitTimeFromMessage.splitTimeAndMessage method ', () => {
    const target = '11:00 test';
    const actual = SplitTimeFromMessage.splitTimeAndMessage(target);
    const expected = {message:'test', time:'11:00'}
    
    expect(actual).toEqual(expected);

})

test('', () => {
    const target = '11:00 test\n11:01 test1\n11:02 test2';
    const expected = [
        { message: 'test', time: '11:00' },
        { message: 'test1', time: '11:01' },
        { message: 'test2', time: '11:02' }
    ];
    const actual = SplitTimeFromMessage.splitMultiMessage(target);

    expect(actual).toEqual(expected);
})