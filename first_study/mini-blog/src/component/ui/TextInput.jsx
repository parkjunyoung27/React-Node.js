import React from "react";
import styled from "styled-components";

//여러 줄을 받아야하기 때문에 textarea 
const StyledTextarea = styled.textarea` 
    width: calc(100% - 32px);
    ${(props) => 
        props.height &&
        `
        height: ${props.height}px;
    `}
    padding: 16px;
    font-size: 16px;
    line-height: 20px;
`;

function TextInput(props){
    const{height, value, onChange} = props;
    return <StyledTextarea height={height} value={value} onChange={onChange}/>;
}

export default TextInput;

