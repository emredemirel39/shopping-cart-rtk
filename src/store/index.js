import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "../features/bookSlice";

const store = configureStore({
    reducer: {
        books: bookSlice
    }
});

export default store;