import './global.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import {
  PostListPage,
  LoginPage,
  SignUpPage,
  AdminLoginPage,
  PostDetailPage,
  ProfilePage,
  ProfileFollowPage,
  AccountUpdatePage,
  ErrorPage,
  AdminPostListPage,
  AdminUserListPage,
} from './pages';
import { UserLayout } from './components';
import { NotifyContextProvider } from './contexts/NotifyContext';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <div className="wraper">
      <NotifyContextProvider>
        <HashRouter>
          <AuthProvider>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/regist" element={<SignUpPage />} />
              <Route path="/admin/login" element={<AdminLoginPage />} />
              <Route path="/admin/tweets" element={<AdminPostListPage />} />
              <Route path="/admin/users" element={<AdminUserListPage />} />

              <Route
                path="/post/:postId"
                exact
                element={
                  <UserLayout>
                    <PostDetailPage />
                  </UserLayout>
                }
              />
              <Route path="/profile" exact element={<ProfilePage />} />
              <Route path="/profile/follow" exact element={<ProfileFollowPage />} />
              <Route
                path="/setting"
                element={
                  <UserLayout>
                    <AccountUpdatePage />
                  </UserLayout>
                }
              />
              <Route path="/main" element={<PostListPage />} />
              <Route path="/" element={<PostListPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </AuthProvider>
        </HashRouter>
      </NotifyContextProvider>
    </div>
  );
}

export default App;
