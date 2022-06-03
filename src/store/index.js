import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "../features/bookSlice";
import cartSlice from "../features/cartSlice";

const store = configureStore({
    reducer: {
        books: bookSlice,
        cart: cartSlice
    }
});

export default store;