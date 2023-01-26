import React from 'react';

import searchSvg from '../../assets/images/search.svg';

import styles from './Title.module.scss';

type TTitle = {
	title: string;
};

const Title: React.FC<TTitle> = ({ title }) => {
	return (
		<div className={styles.shop__header}>
			<div className={styles.shop__title}>{title}</div>

			{title === 'Закладки' || title === 'Корзина' ? (
				''
			) : (
				<div className={styles.shop__search}>
					<img src={searchSvg} alt='search' />
					<input type='text' placeholder='Поиск...' />
				</div>
			)}

			{/* <div className={styles.shop__search}>
				<img src={searchSvg} alt='search' />
				<input type='text' placeholder='Поиск...' />
			</div> */}
		</div>
	);
};

export default Title;
