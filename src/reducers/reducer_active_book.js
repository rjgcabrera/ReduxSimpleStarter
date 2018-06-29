// The state argument is not the whole application's state.
// It's only a piece of the state that this reducer is responsible for.
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}
