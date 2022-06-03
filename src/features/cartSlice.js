import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    totalPrice: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            
            //const existsBook = state.cart.find(book => book.id === action.payload.id);
            //state.data.push(action.payload);
            const bookIndex = state.data.findIndex(book => book.id === action.payload.id)

            if (bookIndex >= 0) {
                state.data[bookIndex].quantity += 1;
            } else {
                state.data.push({
                    ...action.payload, quantity: 1
                })
            }

        },
        increment: (state, action) => {
            const bookIndex = state.data.findIndex(book => book.id === action.payload.id)

            if (bookIndex >= 0) {
                state.data[bookIndex].quantity += 1;
            }
        },
        decrement: (state, action) => {
            const bookIndex = state.data.findIndex(book => book.id === action.payload.id)

            if (bookIndex >= 0) {
                if (state.data[bookIndex].quantity === 1) { 
                    state.data.splice(bookIndex, 1)
                } else {
                    state.data[bookIndex].quantity -= 1;
                }
            };
        },
        removeBookFromCart: (state, action) => {
            const filteredCart = state.data.filter(book => book.id !== action.payload.id);
            state.data = filteredCart;
        },
        clearCart: (state) => {
            state.data = [];
        },
        calculateTotalPrice: (state) => {

            state.totalPrice = state.data.reduce((acc, curr) => acc += (curr.price * curr.quantity), 0);
        }
    }
});

export const {
    addToCart,
    increment,
    decrement,
    removeBookFromCart, 
    clearCart, 
    calculateTotalPrice 
} = cartSlice.actions;

export default cartSlice.reducer;