import Header from '../../components/Header';
import { useAppSelector } from '../../store/hooks';

import Shop from '../../components/Shop';

const Cart = () => {
	const items = useAppSelector(state => state.cartItems.items);

	return (
		<>
			<Header />
			<Shop items={items} />
		</>
	);
};

export default Cart;
