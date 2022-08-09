import { useState } from 'react';
import './App.css';
import Header from './components/shared/Header/Header';
import { walletData } from './walletData/walletData';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Profile from './components/Profile/Profile';
import Footer from './components/shared/Footer/Footer';
import { useEffect } from 'react';
import axios from 'axios';
import { createContext } from 'react';
export const WalletContext = createContext("null")
function App() {
  const [allWallet, setAllWallet] = useState([]);
  const [wallet, setWallet] = useState(allWallet[0]);
  useEffect(() => {
    const loadwallets = async () => {
      const data = await axios.get("https://vast-mountain-66122.herokuapp.com/api/wallets/");
      setAllWallet(data.data);
    }
    loadwallets()
  }, [])

  return (
    <WalletContext.Provider value={wallet}>
      <div className="App">
        <Header wallet={wallet} setWallet={setWallet} allWallet={allWallet} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home wallet={wallet} allWallet={allWallet} />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </WalletContext.Provider>
  );
}

export default App;