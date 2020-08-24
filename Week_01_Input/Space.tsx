import * as React from "react";

import styled from "styled-components";

const KeyboardElement = styled.div`
    position: absolute;
    top: 171px; 
    left: 135px;
    }
    
    div {
    height: 42px;
    width: 144px;
    border-radius: 5px;
    background-color: #FFFFFF;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.36);
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    display: flex;
    z-index: 1500;
    &:active {
        background-color: rgba(4, 4, 16, 0.2);
    }

    p {
        position: absolute;
        bottom: -3px;
        color: black;
        text-align: center;
        font-size: 16px;
        font-family: -apple-system;
    }
`

// Define type of property
interface Props {
    text: string;
    onTap: (string) => void;
}

export const Space = (props: Props) => (
    <KeyboardElement onClick={() => props.onTap(props.text)}>
        <div><p>{props.text}</p></div>
    </KeyboardElement>
)

export default Space