import * as React from "react";
import {PropertyControls, ControlType} from "framer";
import Key from "./Key";
import Space from "./Space";
import Backspace from "./Backspace";
import styled from "styled-components";


const Keyboard = styled.div` 
    height: 217px;
    width: 375px;
    top: 470;
    position: absolute;
`;
const FirstLine = styled.div`
    position: absolute;
    width: 375px;
    top: 11px;
    display: flex;
    padding: 0px 5px 0 5px;
    align-content: center;
    justify-content: space-between; }
`;

const SecondLine = styled.div`
    position: absolute;
    width: 375px;
    top: 65px;
    padding: 0px 24px 0 24px;
    display: flex;
    align-content: center;
    justify-content: space-between; }
`;


const ThirdLine = styled.div`
    position: absolute;
    width: 375px;
    top: 118px;
    padding: 0px 61px 0 61px;
    display: flex;
    align-content: center;
    justify-content: space-between;
`;

const TextareaWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    top: 100px;
`;

const TextareaLabel = styled.label`
    font-family: Helvetica, Arial, serif;
    font-weight: 600;
    font-size: 14px;
    opacity: 0.8;
    color: #A4AAB3;
    margin-bottom: 10px;
    margin-left: 30px;
`;


const Textarea = styled.textarea`
    font-family: Helvetica, Arial, serif;
    width: 100%;
    height: 158px;
    border: none;
    transition: all 0.1s;
    padding: 30px;
    font-size: 16px;
    background-color: white;
    border-top: 1px solid #E6E6E6;
    border-bottom: 1px solid #E6E6E6;
    color: #4A4A4A;
    &:focus {
        color: white;
        outline: none;
    }    
`;

interface Props {
    textValue: string;
    idName: string;
    label: string;
    inputType: string;
}

export class UserType extends React.Component<Props> {

    // Set default properties
    static defaultProps = {
        textValue: "Type anything...",
        idName: "default-textarea",
        label: "Notes",
        inputType: "textarea",
       }

    // Items shown in property panel
    static propertyControls: PropertyControls = {
        textValue: {type: ControlType.String, title: "Text"},

    }

    state = {
        textValue: this.props.textValue,
        isKeyboardOn: false, // show Keyboard?
    }

    keyboardHandler = () => {
        this.setState({
            isKeyboardOn: true,
            textValue: ''
        })
    }

    onTap = (text) => {
        if (text === 'space') {
            text = ' ';
        }
        const updatedTextValue = [...this.state.textValue, text];
        const joinedTextValue = updatedTextValue.join('');
        this.setState({
            textValue: joinedTextValue,
        })

    }

    backspaceHandler = () => {
        const afterBackspace = [...this.state.textValue]
        afterBackspace.splice(-1, 1)
        const joinAfterBackspace = afterBackspace.join('');
        this.setState({
            textValue: joinAfterBackspace,
        })
    }

    componentWillReceiveProps(props: Props) {
        if (props.textValue !== this.props.textValue) {
            this.setState({ textValue: props.textValue });
        }
    }

    render() {
        const lettersArr = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
        const line = lettersArr.map((letter) => <Key text={letter} onTap={this.onTap} key={letter}/>);
        const lines = {
            firstLine: [...line.slice(0, 10)],
            secondLine: [...line.slice(10, 19)],
            thirdLine: [...line.slice(19, 27)]
        }


        return (
            <div>

                <TextareaWrapper>
                    <TextareaLabel htmlFor={this.props.idName}>
                        {this.props.label}
                    </TextareaLabel>
                    <Textarea
                           id={this.props.idName}
                           type={this.props.inputType}
                           value={this.state.textValue}
                           onFocus={this.keyboardHandler}
                           onChange={this.keyboardHandler}
                    />
                </TextareaWrapper>

                <Keyboard style={this.state.isKeyboardOn ? { transition: 'all 0.5s ease 0', top: '450px' } : {transition: 'all 0.5s ease 0', top: '667px'}}>
                    <FirstLine>{lines.firstLine}</FirstLine>
                    <SecondLine>{lines.secondLine}</SecondLine>
                    <ThirdLine>{lines.thirdLine}</ThirdLine>
                    <Backspace onTap={this.backspaceHandler}/>
                    <Space onTap={this.onTap} text={"space"}/>
                    {this.props.children}
                </Keyboard>
            </div>
        )
    }
}
