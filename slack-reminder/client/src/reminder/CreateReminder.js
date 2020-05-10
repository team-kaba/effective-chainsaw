import React from 'react';
import axios from 'axios';
import API_BASE_URL from '../api/Const';
import '../styles.css';
import MessageInput from './MessageInput';
import TimeInput from './TimeInput';
import UrlInput from './UrlInput';


class CreateReminder extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: null,
            time: null,
            url: null
        }
    }
    updateMessage(value) {
        this.setState({message: value});
    }

    updateTime(value) {
        this.setState({ time: value });
    }

    updateUrl(value) {
        this.setState({ url: value });
    }

    clickHandler(e) {
        axios.post(API_BASE_URL, {
            message: this.state.message,
            time: this.state.time,
            url: this.state.url
        }
        ).then(function (res) {
            console.log(res);
        }
        ).catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <MessageInput value={this.state.message}
                    updateMessage={this.updateMessage.bind(this)} />
                <TimeInput value={this.state.time}
                    updateTime={this.updateTime.bind(this)} />
                <UrlInput value={this.state.url} updateUrl={this.updateUrl.bind(this)}/>
                <button onClick={this.clickHandler.bind(this)}>送信</button>
            </div>
            
        )
    }
}

export default CreateReminder