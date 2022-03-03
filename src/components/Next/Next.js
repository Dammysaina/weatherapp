import React, {Component} from "react";
import "./Next.css"
import Nextcard from "./Nextcard";
// import Button from "../../library/Button.styles";

export default class Next extends Component {
    render () {
        const nextCard =[
            {
                name: 'April 5',
                image: '../images/Sun.svg',
                degree: '28 °C'
            },
            {
                name: 'April 6',
                image: '../images/Sun.svg',
                degree: '28 °C'
            },
            {
                name: 'April 7',
                image: '../images/Sun.svg',
                degree: '28 °C'
            },
            {
                name: 'April 8',
                image: '../images/Sun.svg',
                degree: '28 °C'
            },
            {
                name: 'April 9',
                image: '../images/Sun.svg',
                degree: '28 °C'
            }
        ]
        return (
            <div className="nextFiveDays">
                <div className="nextForcast">
                    <div className="fiveDays">
                        <p>Next Forecast</p>
                        <p className="dayFive">Five Days</p>
                    </div>
                    <div className="nextCard">
                        {nextCard.map((nextItem) => {
                            return (
                                <Nextcard
                                    name={nextItem.name}
                                    image={nextItem.image}
                                    degree={nextItem.degree}
                                />
                            );
                        })}
                        
                        
                    </div>
                </div>
                
                <div>
                    <div className="sundayCard">
                        <div className="sundayImg">
                        <img src={`../images/Rectangle 9.svg`} alt="weather"/>
                        
                        <img src={`../images/Sun.svg`} alt="Sun"/>
                        </div>
                        <div className="sundayText">
                            <h3>Tuesday, 5 April</h3>
                            <p>Sunday</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

