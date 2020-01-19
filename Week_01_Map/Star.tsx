import * as React from "react"
import { PropertyControls, ControlType } from "framer"
import styled from "styled-components"
import { Play, Pause } from "./canvas"

const Track = styled.svg` 
    width: 147px;
    height: 371px;
    position: absolute;
    top: 110px;
    left: 25%;
    
    & .track {
    fill: transparent;
    stroke-width: 4;
    stroke-dasharray: 845;
    stroke: rgba(100,126,248,1);
    stroke-miterlimit: 10;
    stroke-linecap: round;
    animation: trackload ${props => props.speed}s ease-in infinite;
    animation-play-state: ${props => (props.toggle ? "paused" : "play")};
    }
    
    @keyframes trackload {
        0% {
           stroke-dashoffset: 300%;
        }
        100% {
            stroke-dashoffset: 0%;
        }
    };
    
`

const Wrapper = styled.div` 
    position: absolute;
    top: 570px;
    left: 290px;
`

// Define type of property
interface Props {
    speed: number
}

export class Star extends React.Component<Props> {
    // Set default properties
    static defaultProps = {
        speed: 7,
    }

    // Items shown in property panel
    static propertyControls: PropertyControls = {
        speed: { type: ControlType.Number, title: "Speed" },
    }

    state = {
        toggle: false,
    }

    clickHandler = () => {
        let updatedToggle = !this.state.toggle
        this.setState({
            toggle: updatedToggle,
        })
    }

    render() {
        let playButton = this.state.toggle ? <Play /> : <Pause />
        return (
            <div>
                <Wrapper onClick={this.clickHandler}>{playButton}</Wrapper>
                <Track
                    xmlns="http://www.w3.org/2000/svg"
                    toggle={this.state.toggle}
                    speed={this.props.speed}
                >
                    <path
                        className="track"
                        d="M 2 368 C 2 368 12 363 25 368 C 27.002 368.77 58.597 368 62 368 C 73.469 368 92.682 341.382 100 330 C 104.035 323.724 135.752 325.998 141 319 C 156 299 112.33 287.688 110 270 C 108.833 261.138 142.973 261.889 141 246 C 140.125 238.955 127.619 240.168 125 228 C 124.094 223.79 126.351 212.381 125 206 C 124.61 204.156 115.87 202.19 100 203 C 88.502 203.587 70.678 207.138 62 206 C 51.157 204.579 57.442 195.008 54 193 C 44 187.167 37.217 192.181 37 173 C 36.936 167.338 41.495 135.943 43 126 C 43.706 121.34 62.448 121.741 69 116 C 74.097 111.534 100.087 116.914 100 103 C 99.962 96.893 94.255 92.718 93 90 C 87 77 44.049 86.768 43 77 C 42.385 71.273 31.987 43.05 37 31 C 39.833 24.189 48.155 32.118 62 23 C 66.431 20.082 83 2 83 2"
                    ></path>
                </Track>
            </div>
        )
    }
}
