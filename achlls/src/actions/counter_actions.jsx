export const receiveCount = () => dispatch => (
  dispatch(addCount())
);

export const ADD_COUNT = 'ADD_COUNT';

const addCount = () => ({
  type: ADD_COUNT
  
});
