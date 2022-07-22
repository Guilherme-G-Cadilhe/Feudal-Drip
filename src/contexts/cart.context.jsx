import { createContext, useReducer } from "react";
import { createAction } from '../utils/reducer/reducer.utils'

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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => { },
  cartItems: [],
  addItemToCart: () => { },
  removeItemFromCart: () => { },
  clearItemFromCart: () => { },
  cartCount: 0,
  cartTotal: 0
})

const INITIAL_CART_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartTotal: 0,
  cartCount: 0
}

export const CART_ACTION_TYPES = {
  SET_CART_TOOGLE: "SET_CART_TOOGLE",
  SET_CART_ITEMS: "SET_CART_ITEMS",
}

const cartReducer = (state, action) => {
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
        ...payload
      };
    default:
      throw new Error(`Invalid action type ${type} in cartReducer`)
  }
}


export const CartProvider = ({ children }) => {

  const [{ cartItems, isCartOpen, cartTotal, cartCount }, dispatch] = useReducer(cartReducer, INITIAL_CART_STATE)


  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce((acc, item) => acc += item.quantity, 0)
    const newCartTotal = newCartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartTotal: newCartTotal,
        cartCount: newCartCount
      })
    )
  }

  const setIsCartOpen = (bool) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_CART_TOOGLE))
  }
  const addItemToCart = (productToAdd) => {
    const newCartItems = addToCartLogic(cartItems, productToAdd)
    updateCartItemsReducer(newCartItems)
  }
  const removeItemFromCart = (cartItemToRemove) => {
    const newCartItems = removeFromCartLogic(cartItems, cartItemToRemove)
    updateCartItemsReducer(newCartItems)
  }
  const ClearItemFromCart = (cartItemToClear) => {
    const newCartItems = clearFromCartLogic(cartItems, cartItemToClear)
    updateCartItemsReducer(newCartItems)
  }

  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemFromCart, ClearItemFromCart, cartTotal }

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}