import { useEffect } from "react";
import { useState } from "react";
import { addProductToCart } from "../../services/cart";
import style from "./AddToCart.module.scss";

const AddToCart = ({ product, colour, size }) => {
	const [quantity, setQuantity] = useState(0);
	const [error, setError] = useState("");
	const [checkAdded, setCheckAdded] = useState();

	const addItemToCart = async () => {
		const data = {
			product: product.product,
			colour: colour.colour,
			size: size.size,
			quantity: quantity,
			total: size.quantity,
			price: product.price,
			image: colour.image,
		};

		try {
			await addProductToCart(data);
			setCheckAdded(true);
			setQuantity(0);
		} catch (error) {
			setError(error);
			setQuantity(0);
		}
	};

	useEffect(() => {
		setQuantity(0);
	}, [colour]);

	useEffect(() => {
		setError("");
		setCheckAdded("");
	}, [colour, size, product]);

	const handleQuantity = (bool) => {
		if (bool) {
			if (quantity >= size.quantity) {
				//console.log("can't increase qty");
			} else {
				setQuantity(quantity + 1);
			}
		} else {
			if (quantity <= 0) {
				//console.log("can't decrease qty");
			} else {
				setQuantity(quantity - 1);
			}
		}
		setError("");
		setCheckAdded("");
	};

	return (
		<>
			{size && (
				<div>
					<p className={style.Quantity}>{quantity}</p>
					{error && <p>Item already in cart.</p>}
					{checkAdded && <p>Item added to cart.</p>}
					<div className={style.ButtonGroup}>
						<button
							onClick={() => {
								handleQuantity(false);
							}}
						>
							-
						</button>
						{quantity == 0 ? (
							<button disabled>add to cart</button>
						) : (
							<button onClick={addItemToCart}>add to cart</button>
						)}

						<button
							onClick={() => {
								handleQuantity(true);
							}}
						>
							+
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default AddToCart;
