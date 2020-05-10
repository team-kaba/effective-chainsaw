import React from 'react';


class MessageInput extends React.Component {

    handleChange(e) {
        this.props.updateMessage(e.target.value);
    }
    
    render() {
        return (
            <div className="form-group">
                <label className="control-label">Message : </label><br/>
                <textarea className="form-control" rows="3" name="message"
                    onChange={this.handleChange.bind(this)} />
            </div>
        )
    }

}
export default MessageInput