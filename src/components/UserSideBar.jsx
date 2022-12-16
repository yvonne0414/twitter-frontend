import { useState } from 'react';
import ACLogo from '../assets/imgs/logo.png';
import Button from './Button';
import PostNew from './PostNew';
import SideBarItem from './SideBarItem';

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
  const [activeItem, setActiveItem] = useState('設定');
  function handleButtonClicked(title) {
    if (title === '登出') {
      logout();
      return;
    } 
    setActiveItem(title)
  }
  function logout() {
    alert("Logout success ~~~~~~~")
  }
  function handlePostButtonClicked() {
    alert("Post New")
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
      <Button text={'推文'} onClick={handlePostButtonClicked} />
      <SideBarItem title="登出" iconName={'logout'} onClick={handleButtonClicked} className="mt-auto" />
    </div>
  );
}
export default UserSideBar;
