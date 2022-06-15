import { createAsyncThunk, createReducer } from '@reduxjs/toolkit'
import axios from 'axios'

export const addCart = createAsyncThunk("ADD_CART", () => {
    return axios.post('http://localhost:3001/api/carts/add', {})
    .then(cart => cart.data)
});

const cartReducer = createReducer({}, {
    [addCart.fulfilled]: (state, action) => action.payload
});

export default cartReducer;