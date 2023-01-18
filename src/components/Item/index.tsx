import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addCartSlice } from '../../store/items/cartSlice';

import styles from './Item.module.scss';
import favoriteSvg from '../../assets/images/favorite.svg';
import { addFavorit } from '../../store/items/itemSlice';

type Items = {
	title: string;
	price: number;
	imgUrl: string;
	id: number;
	fav: boolean;
};

const Item: React.FC<Items> = ({ title, price, imgUrl, id, fav }) => {
	const items = useAppSelector(state => state.items.items);
	const cartItems = useAppSelector(state => state.cartItems.items);

	// console.log(cartItems, 'корзина');

	const dispatch = useAppDispatch();

	const onAddCArt = (id: number) => {
		const cartItem = items.filter(item => item.id === id);
		dispatch(addCartSlice(cartItem));
		console.log('add fav', cartItem);
	};

	const onAddFav = (id: number) => {
		const favItem = items.map(item =>
			item.id === id
				? {
						...item,
						fav: !item.fav,
				  }
				: item,
		);
		dispatch(addFavorit(favItem));
		console.log(favItem, 'fav');
	};

	return (
		<div className={styles.item}>
			<div className={styles.fav} onClick={() => onAddFav(id)}>
				<img src={favoriteSvg} alt='fav' />
			</div>
			<img src={imgUrl} alt='item' />
			<div className={styles.item__title}>{title}</div>
			<div className={styles.item__cart}>
				<div className={styles.item__price}>
					<p className={styles.price_name}>Цена</p>
					<p className={styles.price}>{price} руб.</p>
				</div>
				<div className={styles.item__add}>
					<button onClick={() => onAddCArt(id)}>+</button>
				</div>
			</div>
		</div>
	);
};

export default Item;
