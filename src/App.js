import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup';
import { AuthContextProvider } from './context/AuthContext';
import Account from './pages/Account';
import ProtectedRoute from './components/ProtectedRoute';
function App() {
  return (
    <div className='relative bg-black'>
      <AuthContextProvider>

        <NavBar/>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/account' element={ <ProtectedRoute><Account/></ProtectedRoute> } />
        <Route path='/logout' element={<logOut/>} />
        </Routes>
      </AuthContextProvider>

    </div>
  );
}

export default App;
