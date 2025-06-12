
import './App.css'
import { initializeApp } from "firebase/app";
import { Signin } from './components/Signin';
import { getAuth, onAuthStateChanged  } from 'firebase/auth';
import { use, useEffect } from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyBNi9KItAqxQTlKn8fNpxzvSRAHI-gPQUg",
  authDomain: "leetcode-lite-10145.firebaseapp.com",
  projectId: "leetcode-lite-10145",
  storageBucket: "leetcode-lite-10145.firebasestorage.app",
  messagingSenderId: "472693523290",
  appId: "1:472693523290:web:7f7c441e17d059359da963",
  measurementId: "G-RL4PT9MCTS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

function App() {
useEffect(() => {
  onAuthStateChanged(auth, function(user) {
    if (user) {
      console.log('This is the user: ', user)
    } else {
      // No user is signed in.
      console.log('There is no logged in user');
    }
  });
}, []);
  return (
    <>
      <div >
        <Signin />
      </div>
    </>
  )
}
export default App

