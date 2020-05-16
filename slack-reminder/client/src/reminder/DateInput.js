import React from 'react'


class DateInput extends React.Component {
    handleChange(e) {
        this.props.updateDate(e.target.value);
    }

    render() {
        return (
            <div className="form-group">
                <label className="control-label">Date : </label><br/>
                <input type="date" onChange={this.handleChange.bind(this)} />
            </div>
        )
    }


}

export default DateInput;
