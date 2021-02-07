import { combineReducers } from "redux";
import sampleSlice from './sampleSlice';

export default combineReducers({ 
    sample: sampleSlice,
    auth: authSlice,
});