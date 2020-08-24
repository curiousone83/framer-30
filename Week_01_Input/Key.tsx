import * as React from "react";
import {PropertyControls, ControlType, Data, animate, Override, Animatable} from "framer";
import styled from "styled-components";

const KeyboardElement = styled.div`
    {
    height: 42px;
    width: 31px;
    position: relative;
    border-radius: 5px;
    background-color: #FFFFFF;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.40);
    align-items: center;
    justify-content: center;
    overflow: hidden;
    display: flex;
    z-index: 1500;
    &:active {
        background-color: rgba(4, 4, 16, 0.2);
    }

    p {
        position: absolute;
        bottom: -15px;
        color: black;
        text-align: center;
        font-size: 25px;
        font-family: -apple-system;
    }
    
    
`

// Define type of property
interface Props {
    text: string;
    onTap: (string) => void;
}

export const Key = (props: Props) => (
    <KeyboardElement onClick={() => props.onTap(props.text)}>
        <p>{props.text}</p>
    </KeyboardElement>

)

export default Key