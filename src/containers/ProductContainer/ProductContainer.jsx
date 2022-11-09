import style from "./ProductContainer.module.scss";
import ShopCard from "../../components/ShopCard/ShopCard";

const ProductContainer = ({ products }) => {
	return (
		<main className={style.Products}>
			{products.map((product) => {
				return <ShopCard key={product.id} />;
			})}
		</main>
	);
};

export default ProductContainer;