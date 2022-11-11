import style from "./SizePicker.module.scss";

const SizePicker = ({ colour, handleSize }) => {
	return (
		<div className={style.SizePicker}>
			{Object.entries(colour.sizes).map(([size, value], key) => {
				return value.quantity == 0 ? (
					<button className={style.SizeButton} key={key} disabled>
						{size}
					</button>
				) : (
					<button
						className={style.SizeButton}
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
	);
};

export default SizePicker;
