import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';


const StyledCustomInput = Styled.div`
    height: 100%;
    border: 1px solid rgba(228, 228, 228, 0.6);
    box-sizing: border-box;
    // border-radius: 5px;
    display:flex;
    align-items: center;
    margin-bottom : 20px;
    width:400px
input {
    outline:0;
    font-weight: 300;
    font-size: 13px;
    line-height: 18px;
    color: #151522;
    border: none;
}
img {
    width:20px;
    height:20px;
    padding: 0 10px 0 10px;
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