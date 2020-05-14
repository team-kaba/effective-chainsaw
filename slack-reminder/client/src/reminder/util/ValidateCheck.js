
export default function isValidateMessage(message) {
    const exp = new RegExp('^\\d\\d:\\d\\d\\s(/[\\w-./?_&=]*)?', 'g');
    return exp.test(message);
}
