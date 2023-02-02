import React from 'react';

import styles from './Shop.module.scss';

import Title from '../Title';
// import CartItem from '../CartItem';
import Item from '../Item';

type Items = {
	title: string;
	price: number;
	imgUrl: string;
	id: number;
	fav: boolean;
};

type ItemArray = {
	items: Items[];
	title: string;
};

const Shop: React.FC<ItemArray> = ({ items, title }) => {
	// console.log(items, 'shop');

	return (
		<div className={styles.shop}>
			<Title title={title} />
			<div className={styles.shop__catalog}>
				{items.length > 0 ? items.map(item => <Item key={item.id} {...item} />) : 'No shop'}
			</div>
		</div>
	);
};

export default Shop;
