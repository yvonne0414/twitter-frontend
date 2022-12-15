import ACLogo from '../assets/imgs/logo.png';
import Button from './Button';
import SideBarItem from './SideBarItem';

const SideBar = ({ title, iconName }) => {
  return (
    <div className={`w-[178px] h-[1200px]`}>
      <img src={ACLogo} className={`w-[50px] h-[50px] mt-16`} alt="AC Logo" />
      <SideBarItem title="首頁" iconName={'home'} />
      <SideBarItem title="個人資料" iconName={'user'} />
      <SideBarItem title="設定" iconName={'setting'} />
      <Button text={'推文'} />
      <SideBarItem title="登出" iconName={'logout'} className={`justify-items-end	`} />
    </div>
  );
};
export default SideBar;
