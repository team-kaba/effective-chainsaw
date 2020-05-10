import React from 'react'


class UrlInput extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            url :this.props.url
        }
    }
    
    handleChange(value) {
        this.setState({ url: value });
        this.props.updateUrl(this.state.url);
    }

    render() {
        return (
            <div className="form-group">
                <label className="control-label">Url : </label>
                <input className="form-control" type="text"
                    onChange={this.handleChange.bind(this)}/>
           </div>               
        )
    }
}

export default UrlInput;