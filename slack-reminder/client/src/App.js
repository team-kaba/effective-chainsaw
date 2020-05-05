import React from 'react';
import './App.css';
import './styles.css';
import API_BASE_URL from './api/Const'
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: "",
      time: "",
      url: ""
    }
  }

  messageChanged(e) {
    this.setState({ message: e.target.value })
  }

  timeChanged(e) {
    this.setState({ time: e.target.value })
  }

  urlChanged(e) {
    this.setState({ url: e.target.value })
  }

  clickHandler(e) {
    axios.post(API_BASE_URL, {
      message: this.state.message,
      time: this.state.time,
      url: this.state.url
      }
    ).then(function (res) {
      console.log(res)
    }
    ).catch(function (error) {
      console.log(error);
    });
  }
  
  render() {
    return (
      <form>
        <div >
          Message:<br />
          <textarea className="message-area" name="message"
            onChange={e => this.messageChanged(e)}/>
        </div>
        <div>
          Time:<br />
          <input type="datetime-local" name="time"
            onChange={e => this.timeChanged(e)}/>
        </div>
        <div>
          URL:<br />
          <input type="text" name="url" onChange={e => this.urlChanged(e)}/>
        </div>
        <button onClick={e => this.clickHandler(e)}>送信</button>
      </form>
    );
  }
}

export default App;
