import React, {Component} from "react";
import CustomInput from "../../library/CustomInput";
import Button from "../../library/Button.styles";
import "./Search.css"

export default class Search extends Component {
    render (){
        return (
            <div className="searchInput">
                <CustomInput inputWidth="60rem" inputPlaceholder="Lagos, Nigeria" inputImage={`../images/Search.svg`}/>
                <Button className="searchButton" buttonWidth="9rem" buttonHeight="2.6rem">Search</Button>
            </div>
        )
    }
}

