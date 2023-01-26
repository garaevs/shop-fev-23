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
	},
});

export const { addCartSlice } = cartSlice.actions;
export default cartSlice.reducer;
