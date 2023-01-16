import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Item = {
	title: string;
	price: number;
	imgUrl: string;
};

type ItemArray = {
	items: Item[];
};

const initialState: ItemArray = {
	items: [],
};

export const itemSlice = createSlice({
	name: 'items',
	initialState,
	reducers: {
		addItems(state, action: PayloadAction<Item[]>) {
			return { ...state, items: action.payload };
		},
	},
});

export const { addItems } = itemSlice.actions;
export default itemSlice.reducer;
