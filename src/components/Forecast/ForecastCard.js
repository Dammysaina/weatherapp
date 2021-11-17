import React, {Component} from "react";

export default class ForecastCard extends Component {
    render () {
        return (
            <div className="foreCast">
                <div>
                    <p>29 &#8451; </p>
                    <img src="../images/Sun.svg" alt="Sun"/>
                    <p>8 a.m</p>
                </div>
            </div>
            
        )
    }
}