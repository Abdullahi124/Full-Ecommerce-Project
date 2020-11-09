import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBGLBtGV-CXBkJo08QfzRgntYHcQTSggvQ",
  authDomain: "full-ecommerce-project.firebaseapp.com",
  databaseURL: "https://full-ecommerce-project.firebaseio.com",
  projectId: "full-ecommerce-project",
  storageBucket: "full-ecommerce-project.appspot.com",
  messagingSenderId: "230385588079",
  appId: "1:230385588079:web:46790aeb34ec626e323a9a",
  measurementId: "G-0V97Z14GB1",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

export const db = firebaseapp.firestore();
export const auth = firebaseapp.auth();

export default firebase;
