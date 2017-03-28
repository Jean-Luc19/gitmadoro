
// *** Action Types *** //
export const SET_TIME = 'SET_TIME';
export const TOGGLE_TIME_RUNNING = 'TOGGLE_TIME_RUNNING';


// *** Action Objects *** //

export const setTime = (time) => ({
    type: SET_TIME,
    time
});

export const toggleTimeRunning = () => ({
    type: TOGGLE_TIME_RUNNING
})
