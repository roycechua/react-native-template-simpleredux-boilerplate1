import { createSlice } from '@reduxjs/toolkit';
import {API} from '../../services/api'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggingIn: false,
    isLoggedIn: false,
    message: "",
  },
  reducers: {
    attemptLogin: (state, action) => {
        state.isLoggedIn = false
        state.isLoggingIn = true
    },
    loginSuccess: (state, action) => {
        state.isLoggedIn = true
        state.isLoggingIn = false
        state.message = action.payload.message ? action.payload.message : "Login Successful" 
    },
    loginFailed: (state, action) => {
        state.isLoggedIn = false
        state.isLoggingIn = false
        state.message = action.payload.message ? action.payload.message : "Login Failed" 
    },
  },
});

export const { 
    attemptLogin, 
    loginSuccess, 
    loginFailed 
} = authSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const login = payload => async(dispatch) => {
    try {
        dispatch(attemptLogin(payload));
        const res = await API.login(payload)
        if(res.status.code == 200) {
            dispatch(loginSuccess());
        }
    } catch (error) {
        dispatch(loginFailed());
    }
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCount = state => state.counter.value;

export default authSlice.reducer;
