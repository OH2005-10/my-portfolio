import { initializeApp, getApps, getApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore';

import { getStorage } from 'firebase/storage';

const firebaseConfig = {

 apiKey: "AIzaSyAekNnJh8skfhhi1pPTfysJpDVhg1VB5g0",
  authDomain: "portfolio-1d448.firebaseapp.com",
  projectId: "portfolio-1d448",
  storageBucket: "portfolio-1d448.firebasestorage.app",
  messagingSenderId: "413636962975",
  appId: "1:413636962975:web:539b395b10f59dd28e90aa",
  measurementId: "G-KD6NJT3TGS"

};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);

const storage = getStorage(app);

export { db, storage };