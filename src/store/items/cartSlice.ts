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

export const initialState: ItemArray = {
	items: [],
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addCartSlice(state, action: PayloadAction<Item[]>) {
			// return { ...state.items, items: state.items.concat(action.payload) };
			// return { ...state, items: action.payload };
			return {
				...state,
				items: state.items.concat(action.payload),
			};
		},
		clearCartSlice(state, action) {
			return { ...state, items: [] };
		},
		deleteCartSlice(state, action: PayloadAction<Item[]>) {
			return { ...state, items: action.payload };
		},
	},
});

export const { addCartSlice, clearCartSlice, deleteCartSlice } = cartSlice.actions;
export default cartSlice.reducer;
