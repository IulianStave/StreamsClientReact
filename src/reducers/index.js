import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as formReducer} from 'redux-form';
import streamReducer from './streamReducer';


// reducer as formReducer is installed frokm redux-form 
// we use named import
export default combineReducers ({
  auth: authReducer,
  streams: streamReducer,
  form: formReducer
});