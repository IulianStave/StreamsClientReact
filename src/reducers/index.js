import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as formReducer} from 'redux-form';

// reducer as formReducer is installed frokm redux-form 
// we use named import
export default combineReducers ({
  auth: authReducer,
  form: formReducer
});