import { createContext, useState, useEffect } from "react";

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

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    const newCartCount = cartItems.reduce((acc, item) => acc += item.quantity, 0)
    setCartCount(newCartCount)
  }, [cartItems])

  useEffect(() => {
    const newCartTotal = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
    setCartTotal(newCartTotal)
  }, [cartItems])


  const addItemToCart = (productToAdd) => setCartItems(addToCartLogic(cartItems, productToAdd))
  const removeItemFromCart = (cartItemToRemove) => setCartItems(removeFromCartLogic(cartItems, cartItemToRemove))
  const ClearItemFromCart = (cartItemToClear) => setCartItems(clearFromCartLogic(cartItems, cartItemToClear))

  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemFromCart, ClearItemFromCart, cartTotal }

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}