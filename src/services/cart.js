import {
	collection,
	getDocs,
	addDoc,
	getDoc,
	doc,
	where,
	query,
	deleteDoc,
	updateDoc,
} from "firebase/firestore";
import db from "../config/firebase";

export const addProductToCart = async (productData) => {
	const cartRef = collection(db, "cart");
	//const snapshot = await cartRef.where('product', '==', productData.product).where('colour', '==', productData.colour).where('size', '==', productData.size).getDocs();
	const productQuery = where("product", "==", productData.product);
	const colourQuery = where("colour", "==", productData.colour);
	const sizeQuery = where("size", "==", productData.size);
	const q = query(cartRef, productQuery, colourQuery, sizeQuery);
	const snapshot = await getDocs(q);
	if (snapshot.empty) {
		addCart(productData);
	} else {
		throw new Error(`Item already in cart.`);
	}
};

export const updateCartItem = async (cartItem) => {
	const docRef = doc(db, "cart", cartItem.id);

	await updateDoc(docRef, {
		quantity: cartItem.quantity,
	});
	return true;
};

export const addCart = async (productData) => {
	const cartRef = collection(db, "cart");
	const newDoc = await addDoc(cartRef, productData);

	return newDoc;
};

export const getCart = async () => {
	const collectionRef = collection(db, "cart");

	const querySnapshot = await getDocs(collectionRef);

	const cleanedData = querySnapshot.docs.map((rawDocument) => {
		return { id: rawDocument.id, ...rawDocument.data() };
	});

	return cleanedData;
};

export const deleteItemById = async (id) => {
	const docRef = doc(db, "cart", id);

	await deleteDoc(docRef);
	return true;
};
