import React, { Component } from 'react';
import '../styles/mega-clock.css';


class MegaClock extends Component {
    constructor (props) {
        super(props)
        this.state = {
            number: 1500,
            secTurn: '',
            minTurn: ''
        }
    }

    handleClick() {
        const keys = Object.keys(this.state)
        setInterval(() => {
            let secs = this.state.number - 1
            this.setState({number: secs})
            this.animateClock(keys[1]);
            if (this.state.number % 60 === 59){
                this.animateClock(keys[2])
            }
        },1000);
    }

    animateClock(prop) {
        this.setState({[prop]:'turn'});
        setTimeout(() => {
            this.setState({[prop]: ''})
        },700);
    }

    render () {
        let min = Math.floor(this.state.number / 60);
        let sec = Math.floor(this.state.number % 60)


        return (
            <div id="mega-countdown">
                <button onClick={() => this.handleClick()}>Start Interval</button>
                <div id="mega-clock">
                    <span className={this.state.minTurn}>{min}</span>
                    <span className={this.state.secTurn}>{sec}</span>
                </div>
                <div id="units">
                    <span>minutes</span>
                    <span>seconds</span>
                </div>
            </div>

        )
    }
}


export default MegaClock;
//
