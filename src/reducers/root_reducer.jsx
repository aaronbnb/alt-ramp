const initialState = 0;

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COUNT':
      console.log("we in here");
      return state + (action.payload || 1);
    default:
      return state;
  }
};

export default rootReducer;
