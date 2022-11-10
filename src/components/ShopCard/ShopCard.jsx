import { useNavigate } from "react-router-dom";
import style from "./ShopCard.module.scss";

const ShopCard = ({ product }) => {
	const navigate = useNavigate();

	const goToItem = () => {
		navigate(`/e-Shop/product/${product.id}`);
	};
	return (
		<section className={style.Card} onClick={goToItem}>
			<img className={style.Image} src={product.image} alt={`${product.product} image`} />
			<h2 className={style.ProductName}>{product.product}</h2>
			<p>{`\$${product.price}`}</p>
			<p>{`${Object.keys(product.colours).length} Colour options`}</p>
		</section>
	);
};

export default ShopCard;
