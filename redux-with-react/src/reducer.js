export const initialState = { count: 400 };
export const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "SET":
      return { count: parseInt(action.payload, 10) };
    default:
      return state;
  }
};
