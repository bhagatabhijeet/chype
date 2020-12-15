import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import {userReducer} from './UserReducer';
// This will shape what the store looks like for us
// So the key passed into here, will be the root name of the state
// the value will be the reducer in charge of handling the state for that root name

const rootReducer = combineReducers({  
  user:userReducer  
});

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// export default rootReducer;
export default persistedReducer;