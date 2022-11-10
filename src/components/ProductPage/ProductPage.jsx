import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/store";
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
	};

	const handleSize = (selectedSize) => {
		setSize(selectedSize);
	};

	return (
		<>
			{product && (
				<main className={style.Main}>
					<section>
						<img src={colour.image} alt={`${colour.colour} coloured shoe`} />
					</section>
					<section className={style.Product}>
						<div className={style.Group}>
							<h1>{product.product}</h1>
							<p>Price: ${product.price}</p>
						</div>
						<div className={style.Group}>
							<p>Colour: {colour.colour}</p>
							<div className={style.ColourPicker}>
								{Object.entries(product.colours).map(([colour, value], key) => {
									return (
										<button
											key={key}
											className={style.ColourButton}
											onClick={() => {
												handleColourChange({
													colour: colour,
													image: value.image,
													sizes: value.sizes,
												});
											}}
										>
											<img
												className={style.Image}
												src={value.image}
												alt={`${product.product} in ${colour} colour`}
											/>
											{colour}
										</button>
									);
								})}
							</div>
						</div>

						<div className={style.Group}>
							<p>Size: {size ? size.size : "Select a size"}</p>
							<p>Quantity: {size ? size.quantity : ""}</p>
							<div className={style.SizePicker}>
								{Object.entries(colour.sizes).map(([size, value], key) => {
									return value.quantity == 0 ? (
										<button className={style.SizeButton} key={key} disabled>
											{size}
										</button>
									) : (
										<button className={style.SizeButton}
											key={key}
											onClick={() => {
												handleSize({
													size: size,
													quantity: value.quantity,
												});
											}}
										>
											{size}
										</button>
									);
								})}
							</div>
						</div>
					</section>
				</main>
			)}
		</>
	);
};

export default ProductPage;
