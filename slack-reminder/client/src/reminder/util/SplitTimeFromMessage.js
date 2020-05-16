
export default class SplitTimeFromMessage {
    
    static splitLineBreaks(targetStr) {
        let result = [];
        result = targetStr.split(/\n/m).filter(element => element !== '');
        return result;
    }

    static splitTimeAndMessage(targetStr) {
        let result = { message: '', time: '' };
        // 時刻を抽出
        const expTime = /\d\d:\d\d/g;
        result.time = targetStr.match(expTime)[0];
        // メッセージを抽出(ex.「11:00 」を対象として置換)
        const expTimeBlank = /\d\d:\d\d\s/g;
        result.message = targetStr.replace(expTimeBlank, '');

        return result
    }
    
    static splitTimesAndMessages(targetStr) {
        let targetArray = this.splitLineBreaks(targetStr)
        let result = targetArray;
        let i = 0;
        for (let target of targetArray) {
            result[i] = this.splitTimeAndMessage(target);
            i++;
        }

        return result;
    }

    static splitMessagesandDateTimes(messages, inputDate) {
        const dateT = inputDate + 'T';
        let messagesAndTimes = this.splitTimesAndMessages(messages);
        messagesAndTimes.forEach(message => message.time = dateT + message.time);
        return messagesAndTimes
    }
}