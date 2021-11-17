import Styled from "styled-components";

const Button = Styled.button`
background: #8862FC;
border: none;
border-radius: 15px;
height: ${(props) => props.buttonHeight};
width: ${(props) => props.buttonWidth};
color: #ffffff;
font-weight: 600;
font-size: 12px;
line-height: 22px;
cursor:pointer;
padding: 10px 30px;
position: absolute;
span {
    display: flex;
}
img {
    height: 20px;
    width: 20px;
}
`;

export default Button;