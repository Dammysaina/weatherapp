import React, {Component} from "react";
import CustomInput from "../../library/CustomInput";
import Button from "../../library/Button.styles";
import "./Search.css"

export default class Search extends Component {
    render (){
        return (
            <div className="searchInput">
                <CustomInput inputWidth="300px" inputPlaceholder="Lagos,Nigeria" inputImage={`../images/Search.svg`}/>
                <Button buttonHeight="30px">Search</Button>
            </div>
        )
    }
}

