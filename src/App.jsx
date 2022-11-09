import { BrowserRouter, Route, Routes } from "react-router-dom";
import style from "./App.module.scss";
import Header from "./components/Header/Header";
import ProductPage from "./components/ProductPage/ProductPage";
import StoreHome from "./components/StoreHome/StoreHome";
import CartPage from "./components/CartPage/CartPage"
function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<StoreHome />} />
				<Route path="/product/:id" element={<ProductPage />} />
				<Route path="/cart" element={<CartPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
