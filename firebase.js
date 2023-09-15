import { initializeApp } from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAPjHvAbMJSZggCpvH8_rltFcYMSL0QFwc",
  authDomain: "billinvoice-4fe7c.firebaseapp.com",
  projectId: "billinvoice-4fe7c",
  storageBucket: "billinvoice-4fe7c.appspot.com",
  messagingSenderId: "262068027044",
  appId: "1:262068027044:web:286127e3f634bdbeac7031",
  measurementId: "G-M4NB3KFKJ9"
};

const app = initializeApp(firebaseConfig);

export default app;