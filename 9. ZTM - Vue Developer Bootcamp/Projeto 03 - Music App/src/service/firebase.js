import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBVVXIWLFNdcqEMVsh4DZrEezKNzi92oB8',
  authDomain: 'music-project-ae57b.firebaseapp.com',
  projectId: 'music-project-ae57b',
  storageBucket: 'music-project-ae57b.firebasestorage.app',
  appId: '1:876878351334:web:6752cbbda41a765ceae427'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { app, auth, db }
