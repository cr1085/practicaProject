// firebaseConfig.js
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyClRQzX1qJTVZnJr1g8wJCQT8U7famACDM",
  authDomain: "bdmonitoriasacademicas.firebaseapp.com",
  projectId: "bdmonitoriasacademicas",
  storageBucket: "bdmonitoriasacademicas.firebasestorage.app",
  messagingSenderId: "467538315116",
  appId: "1:467538315116:web:613dcd468bdb719f151549"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default app;
