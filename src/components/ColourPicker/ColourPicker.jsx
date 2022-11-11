import style from "./ColourPicker.module.scss";

const ColourPicker = ({ product, handleColourChange }) => {
	return (
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
	);
};

export default ColourPicker;
