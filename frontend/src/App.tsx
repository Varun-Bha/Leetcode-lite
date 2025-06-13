
import './App.css'
import { initializeApp } from "firebase/app";
import { Signin } from './components/Signin';
import { getAuth, onAuthStateChanged  } from 'firebase/auth';
import { use, useEffect } from 'react';
import { useSetRecoilState, useRecoilValue, RecoilRoot } from 'recoil';
import { userAtom } from './store/user';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

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
  return <RecoilRoot>
    <StoreApp />
  </RecoilRoot>

}

function StoreApp(){
    const setUser = useSetRecoilState(userAtom); 
  const user = useRecoilValue(userAtom);

  useEffect(() => {
    onAuthStateChanged(auth, function(user) {
      if (user && user.email) {
        setUser({
          loading: false,
          user:{
             email: user.email
          }
        })
      } else {
        setUser({
          loading: false,
           
        })
        // No user is signed in.
        console.log('There is no logged in user');
      }
    });
  }, []);

  if(user.loading) {    
    return <div>loading...</div>
  }

  if(!user) {    
    return <div><Signin/></div>
  }


  return (
    <div className="bg-[#0a0c10] text-white font-sans min-h-screen flex flex-col justify-between">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default App

