const actionTypes = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
};

export const addToCart = () => ({
  type: actionTypes.ADD_TO_CART,
});

export const removeFromCart = () => ({
  type: actionTypes.REMOVE_FROM_CART,
});

export default actionTypes;
