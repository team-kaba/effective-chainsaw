import SplitTimeFromMessage from './SplitTimeFromMessage';


/**
 * 入力データからリクエストデータを作成するメソッド
 */
export default function createRequest(messages, date, url) {
    let result = SplitTimeFromMessage.splitMessagesandDateTimes(messages, date);
    result.forEach(element => { element.url = url });
    return result
}
