import { createAsyncThunk, createReducer } from '@reduxjs/toolkit'
import axios from 'axios'

export const quantityItems = createAsyncThunk('PUT_QUANTITY_ITEMS', ({productId, modify}) => {
    return axios.put(`http://localhost:3001/api/items/${productId}/${modify}`)
    .then(res => res.data)
})

export const deleteItems = createAsyncThunk('DELETE_ITEMS', ({productId}) => {
    return axios.delete(`http://localhost:3001/api/items/${productId}`)
    .then(res => {})
    .catch(error => console.log(error))
})

export const itemsCart = createAsyncThunk('GET_ITEMS_CART', ({ cartId }) => {
    return axios.get(`http://localhost:3001/api/items/${cartId}`)
    .then(res => res.data)
});

const cartItemsReducer = createReducer([], {

    [quantityItems.fulfilled]: (state, action) => action.payload,
    [deleteItems.fulfilled]: (state, action) => action.payload,
    [itemsCart.fulfilled]: (state, action) => action.payload,
});

export default cartItemsReducer;
