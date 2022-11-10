import logo from "../../assets/crocs-and-socks-high-resolution-logo-color-on-transparent-background.svg";
import { useNavigate } from "react-router-dom";
import style from "./Header.module.scss";
import Cart from "../Cart/Cart";

const Header = () => {
	const navigate = useNavigate();
	const goToHome = () => {
		navigate("/e-Shop/");
	};
	return (
		<header className={style.Header}>
			<img className={style.Logo} src={logo} alt="" onClick={goToHome} />
			<Cart />
		</header>
	);
};

export default Header;
