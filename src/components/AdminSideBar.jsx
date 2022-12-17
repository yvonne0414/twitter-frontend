import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ACLogo from '../assets/imgs/logo.png';
import SideBarItem from './SideBarItem';


const buttonDatas = [
  {
    title: '推文清單',
    iconName: 'home',
    activeIconName: 'home_o',
    id: 0,
  },
  {
    title: '使用者列表',
    iconName: 'user',
    activeIconName: 'user_o',
    id: 1,
  },
];
const AdminSideBar = () => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState('設定');
  function handleButtonClicked(title) {
    if (title === '登出') {
      logout();
      navigate('/login');
      return;
    } else if (title === '推文清單') {
      navigate('/admin_main');
    } else if (title === '使用者列表') {
      navigate('/admin_users');}
    setActiveItem(title);
  }
  function logout() {
    alert('Logout success ~~~~~~~');
  }
  function handlePostButtonClicked() {
    alert('Post New');
  }
  return (
    <div className={`w-[178px] h-full flex flex-col`}>
      <img src={ACLogo} className={`w-[50px] h-[50px] mt-16`} alt="AC Logo" />
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
      <SideBarItem title="登出" iconName={'logout'} onClick={handleButtonClicked} className="mt-auto" />
    </div>
  );
};
export default AdminSideBar;
