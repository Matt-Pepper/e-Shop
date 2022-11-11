import style from "./CartQuantity.module.scss";

const CartQuantity = ({ quantity, setQuantity, total }) => {
	const handleQuantity = (bool) => {
		if (bool) {
			if (quantity >= total) {
			} else {
				setQuantity(quantity + 1);
			}
		} else {
			if (quantity <= 1) {
			} else {
				setQuantity(quantity - 1);
			}
		}
	};
	return (
		<div>
			<p>{`Quantity In Cart:`}</p>
			<div className={style.ButtonGroup}>
				<button
					className={style.Button}
					onClick={() => {
						handleQuantity(false);
					}}
				>
					-
				</button>
				<span className={style.Quantity}>{quantity}</span>

				<button
					className={style.Button}
					onClick={() => {
						handleQuantity(true);
					}}
				>
					+
				</button>
			</div>
		</div>
	);
};

export default CartQuantity;
