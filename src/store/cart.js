import { createAsyncThunk, createReducer } from '@reduxjs/toolkit'
import axios from 'axios'

export const addCart = createAsyncThunk("ADD_CART", () => {
    return axios.post('http://localhost:3001/api/carts/add', {})
    .then(cart => {
        localStorage.setItem('cart', JSON.stringify(cart.data))
        return cart.data
    })
});

export const cartToUser = createAsyncThunk("CART_TO_USER", ({ cartId, userId }) => {
    return axios.put(`http://localhost:3001/api/carts/${cartId}/${userId}`)
    .then(cart => {
        localStorage.setItem('cart', JSON.stringify(cart.data))
        return cart.data
    })
});

export const addItem = createAsyncThunk("ADD_ITEM", ({ cartId, productId }) => {
    return axios.post(`http://localhost:3001/api/items/${cartId}/${productId}/add`, {})
    .then((res) => res.data);
});

const cartReducer = createReducer({}, {
    [addCart.fulfilled]: (state, action) => action.payload,
    [cartToUser.fulfilled]: (state, action) => action.payload,
    [addItem.fulfilled]: (state, action) => action.payload,
});

export default cartReducer;