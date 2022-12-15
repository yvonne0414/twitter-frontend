import './global.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { PostList } from './pages';

import { NotifyContextProvider } from './contexts/NotifyContext';

function App() {
  return (
    <div className="wraper">
      <NotifyContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<PostList />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </NotifyContextProvider>
    </div>
  );
}

export default App;