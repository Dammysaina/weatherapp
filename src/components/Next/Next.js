import React, {Component} from "react";
import "./Next.css"
// import Button from "../../library/Button.styles";

export default class Next extends Component {
    render () {
        return (
            <div className="nextFiveDays">
                <div className="fiveDays">
                    <p>Next Forecast</p>
                    <p className="dayFive">Five Days</p>
                </div>
                <div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
        )
    }
}