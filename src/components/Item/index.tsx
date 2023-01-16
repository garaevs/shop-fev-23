import styles from './Item.module.scss';

import favoriteSvg from '../../assets/images/favorite.svg';

type Items = {
	title: string;
	price: number;
	imgUrl: string;
};

const Item: React.FC<Items> = ({ title, price, imgUrl }) => {
	return (
		<div className={styles.item}>
			<div className={styles.fav}>
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
					<button>+</button>
				</div>
			</div>
		</div>
	);
};

export default Item;
