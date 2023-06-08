
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './signup';
import Login from './login';
import BottomNav from './bottomnav';
import Randomuser from './randomuser';
import Userpage from './userpage';
import Currency from './currency';

function App() {
  return (
  <>
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Login/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/userpage" element={<Userpage />} />
      <Route path="/randomuser" element={<  Randomuser />} />
      <Route path="/currency" element={<  Currency />} />
    </Routes>
 </BrowserRouter>
  </>
  );
}

export default App;
