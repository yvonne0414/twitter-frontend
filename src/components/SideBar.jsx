import ACLogo from '../assets/imgs/logo.png';
import Button from './Button';
import SideBarItem from './SideBarItem';

const SideBar = ({ title, iconName, active }) => {
  return (
    <div className={`w-[178px] h-[1200px] flex flex-col`}>
      <img src={ACLogo} className={`w-[50px] h-[50px] mt-16`} alt="AC Logo" />
      <SideBarItem title="首頁" iconName={'home'} activeIconName={'home_o'} active={true} />
      <SideBarItem title="個人資料" iconName={'user'} activeIconName={'user_o'} active={false} />
      <SideBarItem title="設定" iconName={'setting'} activeIconName={'setting_o'} active={false} />
      <Button text={'推文'} />
      <SideBarItem title="登出" iconName={'logout'} className={`justify-end		`} />
    </div>
  );
};
export default SideBar;
