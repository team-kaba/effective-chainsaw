
export default function isValidateMessage(message) {
    //改行文字が連続する場合はfalseを返却
    const multiLineBreaks = new RegExp('\n{2}', 'g');
    if (multiLineBreaks.test(message)) {
        return false;
    }
    const exp = new RegExp('^\\d\\d:\\d\\d\\s(/[\\w-./?_&=]*)?', 'g');
    return exp.test(message);
}
