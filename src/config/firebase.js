import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getStorage} from 'firebase/storage';

const key = import.meta.env.VITE_API_KEY;
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: key,
  authDomain: 'my-portfolio-4bd41.firebaseapp.com',
  projectId: 'my-portfolio-4bd41',
  storageBucket: 'my-portfolio-4bd41.appspot.com',
  messagingSenderId: '381415679670',
  appId: '1:381415679670:web:22fed1bf0addd7b2fde817',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const storage = getStorage(app)
