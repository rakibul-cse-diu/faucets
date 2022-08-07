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
function App() {
  const [wallet, setWallet] = useState(walletData[0]);
  return (
    <div className="App">
      <Header wallet={wallet} setWallet={setWallet} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      {/* <h1 className='bg-gradient-to-r from-primary to-secondary'>Hellow faucets</h1> */}
    </div>
  );
}

export default App;
