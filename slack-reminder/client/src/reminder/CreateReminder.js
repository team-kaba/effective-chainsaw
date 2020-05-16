import React from 'react';
import API_BASE_URL from '../api/Const';
import doPost from '../api/Index';
import createRequest from './util/CreateRequest';
import '../styles.css';
import MessageInput from './MessageInput';
import DateInput from './DateInput';
import UrlInput from './UrlInput';
import isValidateMessage from './util/ValidateCheck';


class CreateReminder extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: null,
            date: null,
            url: null
        }
    }

    updateMessage(value) {
        this.setState({message: value});
    }

    updateDate(value) {
        this.setState({ date: value });
    }

    updateUrl(value) {
        this.setState({ url: value });
    }

    clickHandler(e) {
        if (isValidateMessage(this.state.message)) {            
            let requestBody = createRequest(this.state.message, this.state.date, this.state.url);
            doPost(API_BASE_URL, requestBody);
        } else {
            console.log('メッセージの形式が違います')
        }
    }

    render() {
        return (
            <div>
                <MessageInput value={this.state.message}
                    updateMessage={this.updateMessage.bind(this)} />
                <DateInput value={this.state.time}
                    updateDate={this.updateDate.bind(this)} />
                <UrlInput value={this.state.url} updateUrl={this.updateUrl.bind(this)}/>
                <button onClick={this.clickHandler.bind(this)}>送信</button>
            </div>
            
        )
    }
}

export default CreateReminder