import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getProducts } from "../../services/store";
import Carousel from "../Carousel/Carousel";
import ProductContainer from "../../containers/ProductContainer/ProductContainer";

const StoreHome = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const getProductData = async () => {
			const data = await getProducts();
			setProducts(data);
		};
		getProductData();
	}, []);
	return (
		<>
			<Carousel products={products} />
			<ProductContainer products={products} />
		</>
	);
};

export default StoreHome;
