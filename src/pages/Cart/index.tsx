import Header from '../../components/Header';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import styles from './Cart.module.scss';

// import Shop from '../../components/Shop';
import Title from '../../components/Title';
import CartItem from '../../components/CartItem';
import { clearCartSlice } from '../../store/items/cartSlice';

const Cart = () => {
	const dispatch = useAppDispatch();

	const items = useAppSelector(state => state.cartItems.items);
	const sumItems = items.reduce((sum, current) => sum + current.price, 0);

	const onClearCart = () => {
		dispatch(clearCartSlice([]));
	};

	return (
		<>
			<Header />
			{/* <Shop items={items} title={'Корзина'} /> */}
			<div className={styles.shop}>
				<Title title={'Корзина'} />
				<div className={styles.shop__catalog}>
					{items.length > 0 ? items.map(item => <CartItem key={item.id} {...item} />) : 'No shop'}
				</div>
				<div className={styles.cart__add}>
					<p className={styles.price__info}>
						Итоговая стоимость: <b>{sumItems > 0 ? sumItems : '0'} руб.</b>
					</p>
					<button onClick={() => onClearCart()}>Очистить корзину</button>
				</div>
			</div>
		</>
	);
};

export default Cart;
