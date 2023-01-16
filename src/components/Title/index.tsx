import React from 'react';

import searchSvg from '../../assets/images/search.svg';

import styles from './Title.module.scss';

const Title = () => {
	return (
		<div className={styles.shop__header}>
			<div className={styles.shop__title}>Все кроссовки</div>
			<div className={styles.shop__search}>
				<img src={searchSvg} alt='search' />
				<input type='text' placeholder='Поиск...' />
			</div>
		</div>
	);
};

export default Title;
