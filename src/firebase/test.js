import firebase from "firebase/compat";
import 'firebase/firestore'

const firestore = firebase.firestore()

const item = firestore.collection('users').doc('DBzLgxLLF1x3g7UD5ps2').collection('cartItems').doc('35Bi6jfyQFIWJEF8stFj')
