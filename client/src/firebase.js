import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'mern-blog-61e78.firebaseapp.com',
  projectId: 'mern-blog-61e78',
  storageBucket: 'mern-blog-61e78.appspot.com',
  messagingSenderId: '35451855377',
  appId: '1:35451855377:web:6cb1637008bf68254ac7b0',
};

export const app = initializeApp(firebaseConfig);
