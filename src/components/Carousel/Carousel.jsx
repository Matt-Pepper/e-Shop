import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Carousel.module.scss";

const Carousel = ({ products }) => {
	const navigate = useNavigate();
	const [featuredProducts, setfeaturedProducts] = useState([]);
	const [displayedProduct, setDisplayedProduct] = useState();
	const [itemNum, setItemNum] = useState(0);

	useEffect(() => {
		products.map((product) => {
			if (product.featured) {
				setfeaturedProducts((featuredProducts) => [...featuredProducts, product]);
			}
		});
	}, [products]);

	useEffect(() => {
		setDisplayedProduct(featuredProducts[itemNum]);
	}, [featuredProducts, itemNum]);

	const changeProduct = (bool) => {
		if (bool) {
			if (itemNum === featuredProducts.length - 1) {
				setItemNum(0);
			} else {
				setItemNum(itemNum + 1);
			}
		} else {
			if (itemNum === 0) {
				setItemNum(featuredProducts.length - 1);
			} else {
				setItemNum(itemNum - 1);
			}
		}
	};

	const goToItem = () => {
		navigate(`/e-Shop/product/${displayedProduct.id}`);
	};

	return (
		<>
			{displayedProduct && (
				<section className={style.Carousel}>
					<button
						className={style.Button}
						onClick={() => {
							changeProduct(false);
						}}
					>{`<`}</button>

					<div className={style.Content} onClick={goToItem}>
						<h2 className={style.Title}>Featured</h2>
						<img
							className={style.Image}
							src={displayedProduct.image}
							alt={displayedProduct.product}
						/>
						<h2 className={style.ItemName}>{displayedProduct.product}</h2>
					</div>
					<button
						className={style.Button}
						onClick={() => {
							changeProduct(true);
						}}
					>{`>`}</button>
				</section>
			)}
		</>
	);
};

export default Carousel;
