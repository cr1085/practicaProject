import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyClRQzX1qJTVZnJr1g8wJCQT8U7famACDM",
  authDomain: "bdmonitoriasacademicas.firebaseapp.com",
  projectId: "bdmonitoriasacademicas",
  storageBucket: "bdmonitoriasacademicas.appspot.com",
  messagingSenderId: "467538315116",
  appId: "1:467538315116:web:613dcd468bdb719f151549"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Configurar los servicios individuales
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Habilitar la persistencia offline de Firestore
enableIndexedDbPersistence(db)
  .catch((err) => {
    if (err.code === 'failed-precondition') {
      console.error('Persistence failed: Multiple tabs open');
    } else if (err.code === 'unimplemented') {
      console.error('Persistence is not available in this environment');
    }
  });

export { auth, db, storage };
