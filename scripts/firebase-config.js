import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCnXT53cYxaNYmftYGwdSJ2yIo1mEtrs9s",
  authDomain: "pra-fazer-app-2024-2-88a9a.firebaseapp.com",
  databaseURL: "https://pra-fazer-app-2024-2-88a9a-default-rtdb.firebaseio.com",
  projectId: "pra-fazer-app-2024-2-88a9a",
  storageBucket: "pra-fazer-app-2024-2-88a9a.appspot.com",
  messagingSenderId: "494219673697",
  appId: "1:494219673697:web:27f4d5b98803be66c5ea20"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };