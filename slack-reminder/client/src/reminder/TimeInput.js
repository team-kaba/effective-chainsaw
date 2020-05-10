import React from 'react'


class TimeInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: this.props.time
        }
    }

    handleChange(e) {
        this.setState({ time: e.target.value });
        this.props.updateTime(this.state.time);

    }

    render() {
        return (
            <div className="form-group">
                Time: <br />
                <input type="datetime-local" onChange={this.handleChange.bind(this)} />
            </div>
        )
    }


}

export default TimeInput;
