import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: [],
    error: "",
    loading: false
};

export const fetchBooks = createAsyncThunk("fetchBooks", async () => {

    const url = "http://localhost:3004/books";
    const response = await axios.get(url);
    return response.data
})

const userSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchBooks.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        })
        .addCase(fetchBooks.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = false
        })
        .addCase(fetchBooks.rejected, (state, action) => {
            state.loading = false;
            state.error = 'Error fetching books!!!';
        });
    }
});

export default userSlice.reducer ;

