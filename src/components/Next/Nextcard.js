import React from "react";


class Nextcard extends React.Component {
    render () {
        return (
            <div>
                <div className="dateCard">
                    <p>{this.props.name} </p>
                    <img src={this.props.image} alt="Sun"/>
                    <p>{this.props.degree}</p>
                </div>
            </div>
        )
    }
}
export default Nextcard;