import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/store";
import AddToCart from "../AddToCart/AddToCart";
import ColourPicker from "../ColourPicker/ColourPicker";
import SizePicker from "../SizePicker/SizePicker";
import style from "./ProductPage.module.scss";

const ProductPage = () => {
	const { id } = useParams();
	const [product, setProduct] = useState();
	const [colour, setColour] = useState();
	const [size, setSize] = useState();

	useEffect(() => {
		const getProductData = async () => {
			const data = await getProductById(id);
			setProduct(data);
			const firstColour = Object.entries(data.colours)[0];
			handleColourChange({
				colour: firstColour[0],
				image: firstColour[1].image,
				sizes: firstColour[1].sizes,
			});
		};
		getProductData();
	}, []);

	const handleColourChange = (selectedColour) => {
		setColour(selectedColour);
		setSize();
	};

	const handleSize = (selectedSize) => {
		setSize(selectedSize);
	};

	return (
		<>
			{product && (
				<main className={style.Main}>
					<img src={colour.image} alt={`${colour.colour} coloured shoe`} />
					<section className={style.Product}>
						<div className={style.Group}>
							<h1>{product.product}</h1>
							<h3>Price: ${product.price}</h3>
						</div>
						<div className={style.Group}>
							<h3>
								Colour: <span className={style.Bold}>{colour.colour}</span>
							</h3>
							<ColourPicker
								product={product}
								handleColourChange={handleColourChange}
							/>
						</div>

						<div className={style.Group}>
							<h3>
								Size:{" "}
								{size ? (
									<span className={style.Bold}>{size.size}</span>
								) : (
									"Select a size"
								)}
							</h3>
							<h3>
								Quantity:{" "}
								<span className={style.Bold}>{size ? size.quantity : ""}</span>
							</h3>
							<SizePicker colour={colour} handleSize={handleSize} />
						</div>
						<div className={style.Group}>
							<h3>Add To Cart: </h3>
							<AddToCart product={product} colour={colour} size={size} />
						</div>
					</section>
				</main>
			)}
		</>
	);
};

export default ProductPage;
