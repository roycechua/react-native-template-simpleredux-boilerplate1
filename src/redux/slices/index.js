import { combineReducers } from "redux";
import sampleSlice from './sampleSlice';
import authSlice from './authSlice';

export default combineReducers({ 
    sample: sampleSlice,
    auth: authSlice,
});