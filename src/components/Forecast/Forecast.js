import React, {Component} from "react";
import ForecastCard from "./ForecastCard";
import "./Forecast.css"


export default class Forecast extends Component {
    render () {
        return (
            <div className="todaysForecast">
                <div>
                    <p>Today's forecast</p>
                </div>
                <div className="forcastCard">
                    <ForecastCard/>
                    <ForecastCard/>
                    <ForecastCard/>
                    <ForecastCard/>
                    <ForecastCard/>
                    <ForecastCard/>
                </div>                
            </div>
        )
    }
}

