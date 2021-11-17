import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';


const StyledCustomInput = Styled.div`
    height: 100%;
    box-sizing: border-box;
    border-radius: 10px;
    display:flex;
    align-items: center;
    margin-bottom : 20px;
    width:450px;
    margin: 0 auto;
input {
    margin: 20px 50px 0 0px;
    outline:0;
    font-weight: 300;
    font-size: 13px;
    line-height: 18px;
    border: none;
    background-color: rgba(255, 255, 255, 0.1);
    width: 1800px;
    border-radius: 15px;
    height: 40px;
    padding-left: 45px;
    ::placeholder,
    ::-webkit-input-placeholder {
      color: white;
    }
    :-ms-input-placeholder {
      color:white;
    }
}

img {
    width:15px;
    height:20px;
    padding: 0 20px ;
    position:absolute;
    top:32px
}
`;

const CustomInput = (props) => {
  return (
    <StyledCustomInput className="custominput">
      <img src={props.inputImage} alt="" />
      <input
        style={{ width: props.inputWidth, height: props.inputHeight }}
        placeholder={props.inputPlaceholder}
        type={props.inputType}
      />
    </StyledCustomInput>
  );
};
CustomInput.propTypes = {
  inputWidth: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string.isRequired,
  inputImage: PropTypes.string,
  inputType: PropTypes.string,
  inputHeight: PropTypes.string,
};

export default CustomInput;