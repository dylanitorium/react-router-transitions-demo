import { combineReducers } from 'redux';
import { reducer as history } from './history';

const reducer = combineReducers({ history });

export default reducer;
