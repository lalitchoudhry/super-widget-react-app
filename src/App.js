import Registration from './Pages/Registration/Registration';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Category from './Pages/Category/Category';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Registration />} />
          <Route path='category' element={<Category />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
