import actionTypes from "./actionTypes";

const initialState = {
  cart: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: state.cart + 1,
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart - 1,
      };
    default:
      return state;
  }
};

export default cartReducer;
