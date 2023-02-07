import Header from '../../components/Header';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import styles from './Cart.module.scss';
import buttonSvg from '../../assets/images/buttonCart.svg';

// import Shop from '../../components/Shop';
import Title from '../../components/Title';
import CartItem from '../../components/CartItem';
import { clearCartSlice } from '../../store/items/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
	const dispatch = useAppDispatch();

	const items = useAppSelector(state => state.cartItems.items);
	const sumItems = items.reduce((sum, current) => sum + current.price, 0);

	const byItems = () => {
		dispatch(clearCartSlice([]));
		alert('Заказ оформлен');
	};

	const onClearCart = () => {
		dispatch(clearCartSlice([]));
	};

	return (
		<>
			<Header />
			<div className={styles.shop}>
				<Title title={'Корзина'} />
				<div className={styles.shop__catalog}>
					{items.length > 0 ? (
						items.map(item => <CartItem key={item.id} {...item} />)
					) : (
						<div className={styles.no__items}>
							<img className={styles.smile} src='/assets/images/no-cart.png' alt='Нет товаров' />
							<p className={styles.no__title}>У вас нет заказов</p>
							<p className={styles.no__subtitle}>
								Вы нищеброд?
								<br />
								Оформите хотя бы один заказ.
							</p>
							<Link to={'/'}>
								<button>Вернуться на главную</button>
							</Link>
						</div>
					)}
				</div>
				{items.length > 0 ? (
					<div className={styles.cart__add}>
						<p className={styles.price__info}>
							Итоговая стоимость: <b>{sumItems > 0 ? sumItems : '0'} руб.</b>
						</p>
						<button onClick={() => byItems()} className={styles.by__items}>
							Оформить заказ
						</button>
						<button className={styles.clear__cart} onClick={() => onClearCart()}>
							Очистить корзину
						</button>
					</div>
				) : (
					''
				)}
			</div>
		</>
	);
};

export default Cart;
