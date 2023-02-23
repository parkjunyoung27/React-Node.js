import React from "react";
import styled from "styled-components";

// HTML 커스텀
const StyledButton = styled.button` 
    padding: 8px 16px;
    font-size: 16px;
    border-width: 1px;
    border-radius: 8px;
    cursor: pointer;
`;

function Button(props){
    const { title, onClick } = props; // props 담기 

    return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
}

export default Button;