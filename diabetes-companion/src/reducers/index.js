import { combineReducers } from 'redux';
import reminderReducer from './reminderReducer';

const rootReducer = combineReducers({
  reminders: reminderReducer
});

export default rootReducer;
