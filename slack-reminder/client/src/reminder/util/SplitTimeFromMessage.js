
export default class SplitTimeFromMessage {
    constructor(targetStr) {
        this.targetStr = targetStr;
        this.splitMessages = [];
        this.splitTimes = [];
    }

    // TODO 目標 '11:00 test\n11:01 test1'→ [{message:'test', time:'11:00'}, {message:'test1', time:'11:01'}]に分割
    // TODO 1.改行をなくす '11:00 test\n11:01 test1' → ['11:00 test', '11:01 test1']
    // TODO 2.時間とメッセージのそれぞれの形式にマッチするものを分割する '11:00 test' → {message:'test', time:'11:00'}
    // TODO 3.繰り返しを行う
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
        //TODOの1を実装
        let targetArray = this.splitLineBreaks(targetStr)
        //TODO 繰り返しを行う
        let result = targetArray;
        let i = 0;
        for (let target of targetArray) {
            result[i] = this.splitTimeAndMessage(target);
            i++;
        }

        return result;
    }


}