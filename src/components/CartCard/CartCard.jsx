import { deleteItemById, updateCartItem } from "../../services/cart";
import CartQuantity from "../CartQuanity/CartQuantity";
import style from "./CartCard.module.scss";
import { useState } from "react";

const CartCard = ({ item, setRemoveItem }) => {
	const [quantity, setQuantity] = useState(item.quantity);
	const removeFromCart = () => {
		deleteItemById(item.id);
		setRemoveItem(item.id);
	};

	const editCart = () => {
		updateCartItem({ id: item.id, quantity: quantity });
		setRemoveItem(item.id);
	};
	return (
		<div className={style.Card}>
			<div className={style.Section}>
				<img className={style.Image} src={item.image} alt={item.product} />
			</div>
			<div className={style.Section}>
				<h2>{item.product}</h2>
				<p>{`Colour: ${item.colour}`}</p>
				<p>{`Size: ${item.size}`}</p>
				<p>{`Stock: ${item.total}`}</p>
				<p>{`Price: $${item.price}`}</p>
				<CartQuantity quantity={quantity} setQuantity={setQuantity} total={item.total} />
				<span>
					<button className={style.Button} onClick={removeFromCart}>
						Remove
					</button>
					<button className={style.Button} onClick={editCart}>
						Edit
					</button>
				</span>

				<p>{`Total Price: $${(item.price * quantity).toFixed(2)}`}</p>
			</div>
		</div>
	);
};

export default CartCard;
