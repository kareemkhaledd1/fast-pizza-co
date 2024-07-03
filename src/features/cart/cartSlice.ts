import { createSlice } from '@reduxjs/toolkit';
import { CartInitialState, CartState, orderItem } from '../../utils/types';

const initialState: CartInitialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      // payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem: (state, action) => {
      // payload = pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity: (state, action) => {
      // payload = pizzaId
      const item = state.cart.find(
        (item) => item.pizzaId === action.payload,
      ) as orderItem;
      item.quantity++;
      item.totalPrice = item.unitPrice * item.quantity;
    },
    decreaseItemQuantity: (state, action) => {
      // payload = pizzaId
      const item = state.cart.find(
        (item) => item.pizzaId === action.payload,
      ) as orderItem;
      item.quantity--;
      item.totalPrice = item.unitPrice * item.quantity;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export const getCartItems = (state: CartState) => state.cart.cart;

export const getCartQuantity = (state: CartState) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getCartTotalPrice = (state: CartState) =>
  state.cart.cart
    .reduce((sum, item) => sum + item.unitPrice * item.quantity, 0)
    .toFixed(2);

export const getCurrentQuantity = (id: string | number) => (state: CartState) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;

export default cartSlice.reducer;
