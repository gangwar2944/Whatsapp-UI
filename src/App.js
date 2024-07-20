import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Status from './Component/Status/Status';
import StatusVeiwer from './Component/Status/StatusVeiwer';
import Signin from './Component/Register/SignIn';
import Register from './Component/Register/Register';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/status' element={<Status/>}/>
            <Route path='/status/:userId' element={<StatusVeiwer/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/signup' element={<Register/>}/>
        </Routes>
    </div>
  );
}

export default App;
