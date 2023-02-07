import React from 'react';

import styles from './Profile.module.scss';

import Header from '../../components/Header';

const Profile = () => {
	return (
		<>
			<Header />
			<h2 className={styles.title}>Профиль</h2>
			<p className={styles.subtitle}>
				Список заказов:
				<br />
				<li>Заказ № 483789</li>
				<li>Заказ № 876578</li>
				<li>Заказ № 983948</li>
				<li>Заказ № 327833</li>
				<li>Заказ № 948938</li>
			</p>
		</>
	);
};

export default Profile;
