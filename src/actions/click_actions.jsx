export const ADD_COUNT = 'ADD_COUNT';

export const receiveCount = () => dispatch => (
  dispatch(addCount())
);

const addCount = () => ({
  type: ADD_COUNT
});
