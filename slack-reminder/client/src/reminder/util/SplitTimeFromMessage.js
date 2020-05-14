
export default class SplitTimeFromMessage {
    constructor(targetStr) {
        this.targetStr = targetStr;
        this.splitMessages = [];
        this.splitTimes = [];
    }

    static splitLineBreaks(targetStr) {
        return targetStr.split(/\n/gi);
    }

    static splitTimeAndMessage(targetStr) {
        let result = { message: '', time: '' };
        // 時刻を抽出
        const expTime = /\d\d:\d\d/g;
        result.time = targetStr.match(expTime)[0];
        // メッセージを抽出(時刻と空白を対象として置換)
        const expTimeBlank = /\d\d:\d\d\s/g;
        result.message = targetStr.replace(expTimeBlank, '');

        return result
    }
    
    static splitMultiMessage(targetStr) {
        let targetArray = this.splitLineBreaks(targetStr)
        let result = targetArray;
        let i = 0;
        for (let target of targetArray) {
            result[i] = this.splitTimeAndMessage(target);
            i++;
        }

        return result;
    }


}