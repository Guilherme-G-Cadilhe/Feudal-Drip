import { createAction } from '../../utils/reducer/reducer.utils'
import { CART_ACTION_TYPES } from './cart.types'

// ========== HELPERS ==========
const addToCartLogic = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)
  if (existingCartItem) {
    return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }]
}
const removeFromCartLogic = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);
  if (existingCartItem.quantity === 1) return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
  return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
}
const clearFromCartLogic = (cartItems, cartItemToClear) => cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)


// ========== DISPARO DAS AÇÕES ==========

export const setIsCartOpen = (bool) => {
  return createAction(CART_ACTION_TYPES.SET_CART_TOOGLE, bool)
}
export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addToCartLogic(cartItems, productToAdd)
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeFromCartLogic(cartItems, cartItemToRemove)
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}
export const clearItemFromCart = (cartItems, cartItemToClear) => {
  const newCartItems = clearFromCartLogic(cartItems, cartItemToClear)
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}