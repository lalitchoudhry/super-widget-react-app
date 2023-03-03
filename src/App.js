import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Registration from './Pages/Registration/Registration';
import Category from './Pages/Category/Category';
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Registration />} />
          <Route path='category' element={<Category />} />
          <Route path='home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
