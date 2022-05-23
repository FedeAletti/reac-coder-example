// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import {
	addDoc,
	collection,
	doc,
	getDoc,
	getDocs,
	getFirestore,
	Timestamp,
	updateDoc,
} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: REACT_APP_FIREBASE_APIKE,
	authDomain: REACT_APP_FIREBASE_AUTHDOMAIN,
	projectId: REACT_APP_FIREBASE_PROJECTID,
	storageBucket: REACT_APP_FIREBASE_STORAGEBUCKET,
	messagingSenderId: REACT_APP_FIREBASE_MESSAGINGSENDERID,
	appId: REACT_APP_FIREBASE_APPID,
	measurementId: REACT_APP_FIREBASE_MEASUREMENTID,
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

const db = getFirestore()

// ----------------------

// Traer TODOS los items
export const getItems = async () => {
	const items = await getDocs(collection(db, "items"))
	return items
}

// Traer UN item
export const getItem = async (id) => {
	const item = await getDoc(doc(db, "items", id))
	return item
}

// Generación de order
export const generateOrder = async (order) => {
	const newOrder = addDoc(collection(db, "orders"), {
		...order,
		date: Timestamp.fromDate(new Date()),
	})
	return newOrder
}

// Manejar stock --> plus
export const updateStock = async (itemId, quantity) => {
	const item = await getDoc(doc(db, "items", itemId))
	await updateDoc(doc(db, "items", itemId), {
		stock: item.data().stock - quantity,
	})
}

export default db
