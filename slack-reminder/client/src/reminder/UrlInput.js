import React from 'react'


class UrlInput extends React.Component{

    handleChange(e) {
        this.props.updateUrl(e.target.value);
    }

    render() {
        return (
            <div className="form-group">
                <label className="control-label">Url : </label><br/>
                <input className="form-control" type="text"
                    onChange={this.handleChange.bind(this)}/>
           </div>               
        )
    }
}

export default UrlInput;