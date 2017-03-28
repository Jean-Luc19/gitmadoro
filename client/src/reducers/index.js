import * as actions from '../actions/actions';
import { combineReducers } from 'redux';

import time from './time-reducer';
import data from './data-reducer';

export default combineReducers({
    time,
    data
})
