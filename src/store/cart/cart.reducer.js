import { CART_ACTION_TYPES } from './cart.types'

export const INITIAL_CART_STATE = {
  isCartOpen: false,
  cartItems: [],
}

export const cartReducer = (state = INITIAL_CART_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_TOOGLE:
      return {
        ...state,
        isCartOpen: !state.isCartOpen
      };
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload
      };
    default:
      return state
  }
}