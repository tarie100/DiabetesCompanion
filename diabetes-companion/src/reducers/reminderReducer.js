const initialState = {
    reminders: []
  };
  
  const reminderReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_REMINDER':
        return {
          ...state,
          reminders: [...state.reminders, action.payload]
        };
      default:
        return state;
    }
  };
  
  export default reminderReducer;
  