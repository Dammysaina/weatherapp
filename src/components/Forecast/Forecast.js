import React, {Component} from "react";
import ForecastCard from "./ForecastCard";
import "./Forecast.css"


export default class Forecast extends Component {
    render () {
        const foreCast = [
            {
                centigrate: '29 °C',
                image: '../images/Sun.svg',
                time: '8 a.m'
            },
            {
                centigrate: '29 °C',
                image: '../images/Sun.svg',
                time: '10 a.m'
            },
            {
                centigrate: '29 °C',
                image: '../images/Sun.svg',
                time: '12 a.m'
            },
            {
                centigrate: '28 °C',
                image: '../images/Sun.svg',
                time: '2 p.m'
            },
            {
                centigrate: '28 °C',
                image: '../images/Sun.svg',
                time: '4 p.m'
            },
        ]
        return (
            <div className="todaysForecast">
                <div>
                    <p>Today's forecast</p>
                </div>
                <div className="forcastCard">
                   {foreCast.map((foreItem) => {
                       return (
                        <ForecastCard
                            centigrate={foreItem.centigrate}
                            image={foreItem.image}
                            time= {foreItem.time}
                        />
                       )
                   }
                   )} 
                   
                </div>                
            </div>
        )
    }
}

