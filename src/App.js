import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import SignUp from './Components/SignUp/SignUp';
function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/'/>
        {/* <Route path='/login' element={<Login/>}/>*/}
        <Route path='/sign-up' element={<SignUp/>}/> 
      </Routes>
    </>
  );
}

export default App;
