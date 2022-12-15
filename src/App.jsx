import './global.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { PostList } from './pages';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <div className="wraper">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<PostList />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/regist' element={<SignUpPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
