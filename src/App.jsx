import './global.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PostListPage, LoginPage, SignUpPage, AdminLoginPage, PostDetailPage, ProfilePage, ProfileFollowPage, AccountUpdatePage, ErrorPage } from './pages';
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
              <Route path="/admin/login" element={<AdminLoginPage />} />
              {/* todo add admin main page */}
              <Route path="/admin/main" element={<UserLayout><PostListPage /></UserLayout>} /> 
              <Route path="/post/:postId" exact element={<UserLayout><PostDetailPage /></UserLayout>}/>
              <Route path="/profile" exact element={<UserLayout><ProfilePage /></UserLayout>}/>
              <Route path="/profile/follow" exact element={<UserLayout><ProfileFollowPage /></UserLayout>}/>
              <Route path="/setting" element={<UserLayout><AccountUpdatePage /></UserLayout>} />
              <Route path="/main" element={<UserLayout><PostListPage /></UserLayout>} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </NotifyContextProvider>
    </div>
  );
}

export default App;