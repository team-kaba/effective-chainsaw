import createRequest from '../reminder/util/CreateRequest';

test('', () => {
    const messages = '11:00 test\n11:01 test1\n11:02 test2\n';
    const date = '2020-05-01';
    const url = 'http://localhost:8080';
    
    const expected = [
        { message: 'test', time: '2020-05-01T11:00', url:'http://localhost:8080' },
        { message: 'test1', time: '2020-05-01T11:01', url: 'http://localhost:8080' },
        { message: 'test2', time: '2020-05-01T11:02', url: 'http://localhost:8080' }
    ]
    
    const actual = createRequest(messages, date, url);
    expect(actual).toEqual(expected);

})