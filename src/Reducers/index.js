import { combineReducers } from 'redux';
import KamarReducer from './KamarReducer'
import AuthReducer from './AuthReducer';

export default combineReducers({
    loginAuth: AuthReducer,
    kamarList: KamarReducer
});