import CartCard from "../../components/CartCard/CartCard";
import style from "./CartContainer.module.scss";

const CartContainer = ({ cart, setRemoveItem }) => {
	return (
		<>
			{cart && (
				<section className={style.Container}>
					{cart.map((item) => {
						return <CartCard key={item.id} item={item} setRemoveItem={setRemoveItem} />;
					})}
				</section>
			)}
		</>
	);
};

export default CartContainer;
