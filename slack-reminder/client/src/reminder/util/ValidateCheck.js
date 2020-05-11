
export default function validateMessageCheck(message) {
    const exp = new RegExp('\\d\\d:\\d\\d\\s(/[\\w-./?&=]*)?', 'm');
    return exp.test(message);
}
