import React, { Component } from 'react';


class Interval extends Component {
    constructor (props) {
        super(props)
        this.state = {
            number: 134
        }
    }

    handleClick() {
        setInterval(() => {
            let secs = this.state.number - 1
            this.setState({number: secs})
        },1000);
    }

    render () {
        let min = Math.floor(this.state.number / 60);
        let sec = Math.floor(this.state.number % 60)
        let time = `${min} : ${sec}`

        return (
            <div>
                <button onClick={() => this.handleClick()}>Start Interval</button><br/>
                {time}

            </div>

        )
    }
}


export default Interval;
