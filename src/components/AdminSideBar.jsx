import { useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ACLogo from '../assets/imgs/logo.png';
import { useAuth } from '../contexts/AuthContext';
import { notifyContext } from '../contexts/NotifyContext';
import SideBarItem from './SideBarItem';


const buttonDatas = [
  {
    title: '推文清單',
    iconName: 'home',
    activeIconName: 'home_o',
    id: 0,
    path: '/admin/tweets'
  },
  {
    title: '使用者列表',
    iconName: 'user',
    activeIconName: 'user_o',
    id: 1,
    path: '/admin/users'
  },
];

const AdminSideBar = () => {
  const navigate = useNavigate();
  const {pathname, state} = useLocation();
  const [activeItem, setActiveItem] = useState(0);
  const { logout } = useAuth();
  const { showNotification } = useContext(notifyContext);



  function handleButtonClicked(path) {
    // 登出
    if(path === '/logout'){
      logout();
      navigate('/admin/login');
      showNotification('success', `成功登出`);
      return
    }
    // TODO state.userId 要等於現在用戶，目前先帶死
    buttonDatas.forEach((btn)=>{
      if(path === btn.path){
        navigate(btn.path)
      }
    })
  }

  useEffect(()=>{
    setActiveItem('')
    buttonDatas.forEach((btn)=>{
      if(pathname === btn.path){
        setActiveItem(btn.id)
      }
    })
  }, [pathname, state])
  return (
    <div className={`w-[178px] h-full flex flex-col`}>
      <img src={ACLogo} className={`w-[50px] h-[50px]`} alt="AC Logo" />
      {buttonDatas.map((buttonData) => {
        return (
          <SideBarItem
            title={buttonData.title}
            path = {buttonData.path}
            iconName={buttonData.iconName}
            activeIconName={buttonData.activeIconName}
            active={activeItem === buttonData.id}
            onClick={handleButtonClicked}
            key={buttonData.id}
          />
        );
      })}
      <SideBarItem title="登出" path={'/logout'} iconName={'logout'} onClick={handleButtonClicked} className="mt-auto" />
    </div>
  );
};
export default AdminSideBar;
