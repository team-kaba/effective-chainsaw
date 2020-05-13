
export default function validateMessageCheck(message) {
    const exp = new RegExp('\\d\\d:\\d\\d\\s(/[\\w-./?_&=]*)?', 'm');
    return exp.test(message);
}
