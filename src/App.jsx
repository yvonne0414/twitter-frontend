import './global.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PostListPage, LoginPage, SignUpPage, AdminLoginPage, PostDetailPage, ProfilePage, ProfileFollowPage } from './pages';
import { UserLayout } from './components';
import { NotifyContextProvider } from './contexts/NotifyContext';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <div className="wraper">
      <NotifyContextProvider>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/regist" element={<SignUpPage />} />
              <Route path="/admin" element={<AdminLoginPage />} />
              <Route path="/post/:postId" exact element={<UserLayout><PostDetailPage /></UserLayout>}/>
              <Route path="/profile" exact element={<UserLayout><ProfilePage /></UserLayout>}/>
              <Route path="/profile/follow" exact element={<UserLayout><ProfileFollowPage /></UserLayout>}/>
              <Route path="/main" element={<UserLayout><PostListPage /></UserLayout>} />
              <Route path="*" element={<UserLayout><PostListPage /></UserLayout>} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </NotifyContextProvider>
    </div>
  );
}

export default App;
