import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTime } from '../actions/time-actions'
import MegaClock from './mega-clock';
import '../styles/mega-clock.css';

export class TimerControls extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>
                <div id="units">
                    <span onClick={() => this.props.setTime(-30)}>-</span>
                    <span>:30</span>
                    <span onClick={() => this.props.setTime(30)}>+</span>
                </div>
                <div>
                    <MegaClock />
                </div>

            </div>
        )
    }
};

const mapStateToProps = (state, props) => ({
    startTime: state.time.startTime
})

const mapDispatchToProps = (dispatch) => ({
    setTime: time => dispatch(setTime(time))
})

export default connect (mapStateToProps, mapDispatchToProps)(TimerControls)
