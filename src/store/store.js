import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import userReducer from './user'; 
import cartReducer from './cart';
import cartItemsReducer from './cartItems';

const store = configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger),
    reducer: {
        user: userReducer,
        cart: cartReducer,
        cart_items: cartItemsReducer,
    }
});

export default store;