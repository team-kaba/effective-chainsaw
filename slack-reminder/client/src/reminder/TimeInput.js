import React from 'react'


class TimeInput extends React.Component {
    handleChange(e) {
        this.props.updateTime(e.target.value);
    }

    render() {
        return (
            <div className="form-group">
                <label className="control-label">Date : </label><br/>
                <input type="datetime-local" onChange={this.handleChange.bind(this)} />
            </div>
        )
    }


}

export default TimeInput;
