import React, {Component} from "react";

export default class ForecastCard extends Component {
    render () {
        return (
            <div className="foreCast">
                <div>
                    <p>{this.props.centigrate} </p>
                    <img src={this.props.image} alt="Sun"/>
                    <p>{this.props.time}</p>
                </div>
            </div>
            
        )
    }
}