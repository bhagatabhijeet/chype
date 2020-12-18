import { createSlice } from "@reduxjs/toolkit";
/**
 * @description Set our initial User state that we will use throghout the project
 */
const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  loggedIn: false,  
  token:"",
  id:""
};
/**
 * @description Create UserSlice, this will hold user state in our redux store
 */
const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    getUser: (state, action) => ({
      ...state,
    }),
    setUser: (state, action) => ({
      ...state,
      firstName: action.payload.firstName,
      lastName: action.payload.lastName,
      email: action.payload.email,
      loggedIn: action.payload.loggedIn,   
      token:action.payload.token,
      id:action.payload.id   
    }),
  },
});

export const { getUser, setUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
