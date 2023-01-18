import React from 'react';

import styles from './Shop.module.scss';

import Title from '../Title';
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
};

const Shop: React.FC<ItemArray> = ({ items }) => {
	console.log(items, 'shop');
	return (
		<div className={styles.shop}>
			<Title />
			<div className={styles.shop__catalog}>
				{items.map(item => (
					<Item key={item.id} {...item} />
				))}
			</div>
		</div>
	);
};

export default Shop;
