import React from 'react';

import styles from './Shop.module.scss';

import Title from '../Title';
// import CartItem from '../CartItem';
import Item from '../Item';
import { Link } from 'react-router-dom';

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
				{items.length > 0 ? (
					items.map(item => <Item key={item.id} {...item} />)
				) : (
					<div className={styles.no__items}>
						<img className={styles.smile} src='/assets/images/no-cart.png' alt='Нет товаров' />
						<p className={styles.no__title}>Закладок нет :(</p>
						<p className={styles.no__subtitle}>Вы ничего не добавляли в закладки</p>
						<Link to={'/'}>
							<button>Вернуться на главную</button>
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default Shop;
