import { collection, getDocs, addDoc, getDoc, doc } from "firebase/firestore";
import db from "../config/firebase";
import data from "./data";

export const addProduct = async (productData) => {
	//const newProduct = {featured, price, image, product, colours} = productData;

	const collectionRef = collection(db, "products");

	const newDoc = await addDoc(collectionRef, productData);

	return newDoc;
};

export const dataAdd = async () => {
	data.map(async (product) => {
		await addProduct(product);
	});
};

export const getProducts = async () => {
	const collectionRef = collection(db, "products");

	const querySnapshot = await getDocs(collectionRef);

	const cleanedData = querySnapshot.docs.map((rawDocument) => {
		return { id: rawDocument.id, ...rawDocument.data() };
	});
	return cleanedData;
};

export const getProductById = async (id) => {
	const docRef = doc(db, "products", id);

	const querySnapshot = await getDoc(docRef);
	if (!querySnapshot.exists()) {
		throw new Error("Product does not exist.");
	}
	return { id: querySnapshot.id, ...querySnapshot.data() };
};
