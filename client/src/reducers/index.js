import { combineReducers } from 'redux';

import {timeReducer} from './time-reducer';
import {dataReducer} from './data-reducer';

export default combineReducers({
    time: timeReducer,
    data: dataReducer
})
