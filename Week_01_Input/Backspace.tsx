import * as React from "react";
import {Icon} from './canvas'
import styled from "styled-components";

const KeyboardElement = styled.div`
    position: absolute;
    top: 118px;
    left: 328px;
    height: 42px;
    width: 42px;
    border-radius: 5px;
    background-color: rgba(4, 4, 16, 0.2);
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.36);;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    display: flex;
    margin: 0;
    padding: 0;
    z-index: 1500;
    &:active {
        background-color: rgba(255, 255, 255, 1);
    }
    
`


// Define type of property
interface Props {
    onTap: (string) => void;
}


export const Backspace = (props: Props) => (
    <KeyboardElement onClick={props.onTap}>
        <Icon/>
    </KeyboardElement>
)

export default Backspace
