import React, { Component } from 'react'

class TechStack extends Component {

    render() {
        return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-3 z-2">
                <div className="card py-5 tech-stack-card">
                    <img src={this.props.data.src} alt={this.props.data.name} className="mx-auto" style={this.props.data.style} />
                    <div className="text-center">{this.props.data.name}</div>
                </div>
            </div>
        )
    }
}

export default TechStack