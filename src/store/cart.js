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
    console.log('CART_ID', productId)
    return axios.post(`http://localhost:3001/api/items/${cartId}/${productId}/add`, {})
    .then((res) => res.data);
});

export const killCart = () => {
    localStorage.removeItem('cart')
    return {}
};

const cartReducer = createReducer({}, {
    [addCart.fulfilled]: (state, action) => action.payload,
    [cartToUser.fulfilled]: (state, action) => action.payload,
    [addItem.fulfilled]: (state, action) => action.payload,
    [killCart.fulfilled]: (state, action) => action.payload,
});

export default cartReducer;

/*
axios.get(`http://localhost:3001/api/products/${productId}`)
        .then(product => product.stock-1)
        .then(stock => axios.put(`http://localhost:3001/api/products/${productId}`, { stock }))
        */