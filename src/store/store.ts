import { configureStore } from '@reduxjs/toolkit';
import itemsReduser from './items/itemSlice';
import cartSliceReducer from './items/cartSlice';

const store = configureStore({
	reducer: {
		items: itemsReduser,
		cartItems: cartSliceReducer,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
