import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/'/>
        {/* <Route path='/login' element={<Login/>}/>
        <Route path='/create-account' element={<SignUp/>}/> */}
      </Routes>
    </>
  );
}

export default App;
