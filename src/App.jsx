import './global.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PostList } from './pages';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<PostList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
