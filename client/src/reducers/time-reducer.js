import * as actions from '../actions/time-actions';

const initialState = {
    startTime: 180,
    timeRunning: false
}

export const timeReducer = (state=initialState, action) => {
    switch(action.type) {
        case actions.SET_TIME:
            return {...state, startTime: state.startTime + action.time}
        case actions.TOGGLE_TIME_RUNNING:
            return {...state, timeRunning:!state.timeRunning}
        default:
            return state;
    }
}
