import { useNavigate } from "react-router-dom";
import style from "./Cart.module.scss";
import icon from "../../assets/cart-shopping-solid.svg";

const Cart = () => {
	const navigate = useNavigate();
	const goToCart = () => {
		navigate("/e-Shop/cart");
	};

	return (
		<>
			<button className={style.CartButton} onClick={goToCart}>
				<img className={style.ButtonIcon} src={icon} alt="Shopping cart icon" />
			</button>
		</>
	);
};

export default Cart;
