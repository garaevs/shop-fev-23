import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Item = {
	title: string;
	price: number;
	imgUrl: string;
	id: number;
	fav: boolean;
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

		addFavorit(state, action: PayloadAction<Item[]>) {
			return { ...state, items: action.payload };
		},
	},
});

export const { addItems, addFavorit } = itemSlice.actions;
export default itemSlice.reducer;
