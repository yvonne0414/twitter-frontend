import { useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ACLogo from '../assets/imgs/logo.png';
import { useAuth } from '../contexts/AuthContext';
import { notifyContext } from '../contexts/NotifyContext';
import { PostModal, SideBarItem } from './index';

const buttonDatas = [
  {
    title: '首頁',
    iconName: 'home',
    activeIconName: 'home_o',
    id: 0,
    path: '/main',
  },
  {
    title: '個人資料',
    iconName: 'user',
    activeIconName: 'user_o',
    id: 1,
    path: '/profile',
  },
  {
    title: '設定',
    iconName: 'setting',
    activeIconName: 'setting_o',
    id: 2,
    path: '/setting',
  },
];

const UserSideBar = ({ loginUserId, onPostNew }) => {
  const navigate = useNavigate();
  const { pathname, state } = useLocation();
  const [activeItem, setActiveItem] = useState(0);
  const { logout } = useAuth();
  const { showNotification } = useContext(notifyContext);

  function handleButtonClicked(path) {
    // 登出
    if (path === '/logout') {
      logout();
      navigate('/login');
      showNotification('success', `成功登出`);
      return;
    }
    // TODO state.userId 要等於現在用戶，目前先帶死
    buttonDatas.forEach((btn) => {
      if (path === '/profile') {
        navigate(`/profile`, { state: { userId: loginUserId } });
        return;
      }
      if (path === btn.path) {
        navigate(btn.path);
      }
    });
  }

  function handlePostButtonClicked() {
    alert('Post New');
  }

  useEffect(() => {
    setActiveItem('');
    buttonDatas.forEach((btn) => {
      if (pathname === '/profile') {
        Number(state?.userId || -1) === Number(loginUserId) && setActiveItem(1);
        return;
      }
      if (pathname === btn.path) {
        setActiveItem(btn.id);
      }
    });
  }, [pathname, state, loginUserId]);

  return (
    <div className={`w-[56px] md:w-[178px] h-full flex flex-col`}>
      <img src={ACLogo} className={`w-[50px] h-[50px] md:ml-[13px] self-center md:self-start`} alt="AC Logo" />
      {buttonDatas.map((buttonData) => {
        return (
          <SideBarItem
            title={buttonData.title}
            path={buttonData.path}
            iconName={buttonData.iconName}
            activeIconName={buttonData.activeIconName}
            active={activeItem === buttonData.id}
            onClick={handleButtonClicked}
            key={buttonData.id}
          />
        );
      })}
      <PostModal onPostNew={onPostNew}/>

      <SideBarItem title="登出" path={'/logout'} iconName={'logout'} onClick={handleButtonClicked} className="mt-auto" />
    </div>
  );
};
export default UserSideBar;
