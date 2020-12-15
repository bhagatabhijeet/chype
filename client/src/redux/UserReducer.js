import { createSlice } from "@reduxjs/toolkit";
import {isLoggedIn} from "../Utils/AuthenticationHelpers";
/**
 * @description Set our initial User state that we will use throughout the project
 */
const INITIAL_STATE = {
    firstName:'',
    lastName:'',
    email:'',
    loggedIn: isLoggedIn(),
    token:''
};

/**
 * @description Create UserSlice, this will hold user state in our redux store
 */
const userSlice = createSlice({
        name: "user",
        initialState: INITIAL_STATE,
        reducers: {
            getUser: (state, action) => ({
                ...state
            }),
            setUser: (state, action) => ({
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email,
                loggedIn: action.payload.loggedIn,
                token: action.payload.token,
            }),
        }
    },
);

export const { getUser, setUser } = userSlice.actions;

export const userReducer = userSlice.reducer;