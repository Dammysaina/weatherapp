import React, {Component} from "react";
import "./Next.css"
import Nextcard from "./Nextcard";
// import Button from "../../library/Button.styles";

export default class Next extends Component {
    render () {
        return (
            <div className="nextFiveDays">
                <div className="nextForcast">
                    <div className="fiveDays">
                        <p>Next Forecast</p>
                        <p className="dayFive">Five Days</p>
                    </div>
                    <div className="nextCard">
                        <Nextcard/>
                        <Nextcard/>
                        <Nextcard/>
                        <Nextcard/>
                        <Nextcard/>
                    </div>
                </div>
                
                <div>
                    <div className="sundayCard">
                        <div className="sundayImg">
                        <img src={`../images/Rectangle 9.svg`} alt="weather"/>
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