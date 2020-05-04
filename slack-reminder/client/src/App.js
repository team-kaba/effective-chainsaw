import React from 'react';
import './App.css';
import './styles.css';
import createTimerPost from './api/Index';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: '',
      time: '',
      url: ''
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
    createTimerPost(e)
  }
  
  render() {
    return (
      <form>
        <div >
          Message:<br />
          <textarea className="message-area" value={this.state.message} name="message"
            onChange={e => this.messageChanged(e)} />
        </div>
        <div>
          Time:<br />
          <input type="datetime-local" name="time" value={this.state.time}
            onChange={e => this.timeChanged(e)} />
        </div>
        <div>
          URL:<br />
          <input type="text" name="url" value={this.state.time}
            onChange={e => this.urlChanged(e)}/>
        </div>
        <button onClick={e => this.clickHandler(e)}>送信</button>
      </form>
    );
  }
}

export default App;
