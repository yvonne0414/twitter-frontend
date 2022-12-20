import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  },
  {
    title: '個人資料',
    iconName: 'user',
    activeIconName: 'user_o',
    id: 1,
  },
  {
    title: '設定',
    iconName: 'setting',
    activeIconName: 'setting_o',
    id: 2,
  },
];
const UserSideBar = () => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState('首頁');
  const { logout } = useAuth();
  const { showNotification } = useContext(notifyContext);

  function handleButtonClicked(title) {
    if (title === '登出') {
      logout();
      navigate('/login');
      showNotification('success', `成功登出`);
      return;
    } else if (title === '首頁') {
      navigate('/main');
      setActiveItem('首頁');
    } else if (title === '個人資料') {
      navigate(`/profile`, { state: { userId: 14 } });
      setActiveItem('個人資料');
    } else {
      navigate('/setting');
      setActiveItem('設定');
    }
  }

  function handlePostButtonClicked() {
    alert('Post New');
  }
  return (
    <div className={`w-[178px] h-full flex flex-col`}>
      <img src={ACLogo} className={`w-[50px] h-[50px]`} alt="AC Logo" />
      {buttonDatas.map((buttonData) => {
        return (
          <SideBarItem
            title={buttonData.title}
            iconName={buttonData.iconName}
            activeIconName={buttonData.activeIconName}
            active={activeItem === buttonData.title}
            onClick={handleButtonClicked}
            key={buttonData.id}
          />
        );
      })}
      {/* <Button text={'推文'} onClick={handlePostButtonClicked} /> */}
      <PostModal />

      <SideBarItem title="登出" iconName={'logout'} onClick={handleButtonClicked} className="mt-auto" />
    </div>
  );
};
export default UserSideBar;
