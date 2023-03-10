import React from 'react';

import styles from './Header.module.scss';

import { Link } from 'react-router-dom';

import logoSvg from '../../assets/images/logo.svg';
import cartSvg from '../../assets/images/cart.svg';
import favoriteSvg from '../../assets/images/favorite.svg';
import profileSvg from '../../assets/images/profile.svg';
import { useAppSelector } from '../../store/hooks';

const Header = () => {
	const cartItems = useAppSelector(state => state.cartItems.items);
	const cartSum = cartItems.reduce((sum, current) => sum + current.price, 0);
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Link to='/'>
					<img src={logoSvg} alt='logo' />
				</Link>
				<div className={styles.logoName}>
					<div className={styles.logoTitle}>React Snikers</div>
					<div className={styles.logoSubtitle}>Магазин лучших кроссовок</div>
				</div>
			</div>
			<div className={styles.profile}>
				<div className={styles.myCart}>
					<Link to='/cart'>
						<img src={cartSvg} alt='cart' />
					</Link>
					<p className={styles.price}>{cartSum > 0 ? cartSum : '0'} руб.</p>
				</div>
				<Link to='/fav'>
					<img src={favoriteSvg} className={styles.favorite} alt='favorite' />
				</Link>
				<Link to='/profile'>
					<img src={profileSvg} className={styles.profileSvg} alt='cabinet' />
				</Link>
			</div>
		</header>
	);
};

export default Header;
