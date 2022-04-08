import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/'/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
