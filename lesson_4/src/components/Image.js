import React from 'react'

class Image extends React.Component {
    render() 
    {
        return (
            <img src={this.props.image} alt="react img"/>
        )
    }
}

export default Image