export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const SET = "SET";

export const increment = () => {
  return { type: INCREMENT };
};
export const decrement = () => {
  return { type: DECREMENT };
};
export const set = (value) => {
  return { type: SET, payload: value };
};
