import { combineReducers } from 'redux';
import reminderReducer from './reminderReducer';
import authReducer from './authReducers';


const rootReducer = combineReducers({
  reminders: reminderReducer,
  auth: authReducer,
});

export default rootReducer;
