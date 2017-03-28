import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTime, toggleTimeRunning } from '../actions/time-actions'
import '../styles/mega-clock.css';


export class MegaClock extends Component {
    constructor (props) {
        super(props)
        this.state = {
            number: null,
            secTurn: '',
            minTurn: ''
        }
    }

    handleClick() {
        toggleTimeRunning();
        this.setState({number: this.props.startTime})
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
        let min = this.props.timeRunning ? Math.floor(this.state.number /60) : Math.floor(this.props.startTime / 60);
        let sec = this.props.timeRunning ? Math.floor(this.state.number % 60) : Math.floor(this.props.startTime % 60);

        return (
            <div id="mega-countdown">
                <div id="mega-clock">
                    <span className={this.state.minTurn}>{min}</span>
                    <span className={this.state.secTurn}>{sec}</span>
                </div>
                <div id="units">
                    <span>minutes</span>
                    <span>seconds</span>
                </div>
                    <button onClick={() => this.handleClick()}>Start Interval</button>
            </div>

        )
    }
}

const mapStateToProps = (state, props) => ({
    startTime: state.time.startTime,
    timeRunning: state.time.timeRunning
})

const mapDispatchToProps = (dispatch) => ({
    toggleTimeRunning: () => dispatch(toggleTimeRunning())
})

export default connect(mapStateToProps, mapDispatchToProps)(MegaClock);
