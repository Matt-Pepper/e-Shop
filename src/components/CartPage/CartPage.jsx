import { useEffect, useState } from "react";
import CartContainer from "../../containers/CartContainer/CartContainer";
import { getCart } from "../../services/cart";
import style from "./CartPage.module.scss";

const CartPage = () => {
	const [cart, setCart] = useState();
	const [removeItem, setRemoveItem] = useState("a");

	useEffect(() => {
		const getCartData = async () => {
			const data = await getCart();
			setCart(data);
		};
		getCartData();
	}, [removeItem]);

	return (
		<main className={style.Main}>
			<CartContainer cart={cart} setRemoveItem={setRemoveItem} />
			<div> </div>
		</main>
	);
};

export default CartPage;
