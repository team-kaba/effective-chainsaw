import React from 'react';


class MessageInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: this.props.message
        }
    }

    handleChange(e) {
        this.setState({ message: e.target.value });
        this.props.updateMessage(e.target.value);

    }
    
    render() {
        return (
            <div className="form-group">
                Message: <br />
                <textarea className="form-control" rows="3" name="message"
                    onChange={this.handleChange.bind(this)} />
            </div>
        )
    }

}
export default MessageInput