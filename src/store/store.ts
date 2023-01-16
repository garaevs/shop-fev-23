import { configureStore } from '@reduxjs/toolkit';
import itemsReduser from './items/itemSlice';

const store = configureStore({
	reducer: {
		items: itemsReduser,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
