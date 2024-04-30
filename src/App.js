import './App.css';
import { Route, Routes } from 'react-router';
import Mypage from './pages/Mypage';
import OrderList from './pages/OrderList';
import Resign from './pages/Resign';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Mypage/>}/>
        <Route path='/OrderList' element={<OrderList/>}/>
        <Route path='/Resign' element={<Resign/>}/>
      </Routes>
  );
}

export default App;
