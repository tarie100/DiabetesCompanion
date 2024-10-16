export const setReminder = (type, message) => {
    return {
      type: 'SET_REMINDER',
      payload: { type, message }
    };
  };
  