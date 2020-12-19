import { createSlice } from "@reduxjs/toolkit";
/**
 * @description Set our initial User state that we will use throghout the project
 */
const INITIAL_STATE = {
  id:"0",
  firstName:"",
  lastName:"",
  email:"",
};
/**
 * @description Create UserSlice, this will hold user state in our redux store
 */
const selectedUserSlice = createSlice({
  name: "selectedusr",
  initialState: INITIAL_STATE,
  reducers: {
    getSelectedUser: (state, action) => ({
      ...state,
    }),
    setSelectedUser: (state, action) => ({
      ...state,
      firstName: action.payload.firstName,
      lastName: action.payload.lastName,
      email: action.payload.email,
      // loggedIn: action.payload.loggedIn,   
      // token:action.payload.token,
      id:action.payload.id 
    }),
  },
});

export const { getSelectedUser, setSelectedUser } = selectedUserSlice.actions;

export const selectedUserReducer = selectedUserSlice.reducer;
