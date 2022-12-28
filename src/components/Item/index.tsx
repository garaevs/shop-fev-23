import styles from './Item.module.scss';

import favoriteSvg from '../../assets/images/favorite.svg';

const Item = () => {
	return (
		<div className={styles.item}>
			<div className={styles.fav}>
				<img src={favoriteSvg} alt='fav' />
			</div>
			<img src='/assets/images/catalog/kedy.jpg' alt='item' />
			<div className={styles.item__title}>Мужские Кроссовки Nike Blazer Mid Suede</div>
			<div className={styles.item__cart}>
				<div className={styles.item__price}>
					<p className={styles.price_name}>Цена</p>
					<p className={styles.price}>12 999 руб.</p>
				</div>
				<div className={styles.item__add}>
					<button>+</button>
				</div>
			</div>
		</div>
	);
};

export default Item;
