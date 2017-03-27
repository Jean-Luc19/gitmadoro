import React, { Component } from 'react';
import '../styles/yellow-pom.css';

class YellowPom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sessionLength: 180,
            time: 180
        }
    }
    handleClick() {
        setInterval(() => {
            let secs = this.state.time - 1;
            this.setState({time: secs})
        },1000)
    }
    render() {
        let mins = Math.floor(this.state.time/60);
        let secs = Math.floor(this.state.time % 60)
        let min = mins >= 10 ? mins : '0' + mins;
        let sec = secs >= 10 ? secs : '0' + secs;
        const fillerStyle = {
            'position': 'absolute',
            'width': '300px',
            'height': `${100 - Math.floor(this.state.time/this.state.sessionLength *100)}%`,
            'backgroundColor': '#FFAD00'
        }
        console.log(fillerStyle)
        return (
            <div className='yellow-pom'onClick={() => this.handleClick()}>
                <div className="pom">
                    <div style={fillerStyle} >
                        <h2>{min} : {sec}</h2>
                    </div>
                </div>


            </div>
        )

    }
}

export default YellowPom;
