import { Navbar, Loading } from '../components';
import { getUser } from '../apis/user';
import { useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


const ProfilePage = () => {
  const { userId } = useLocation().state;
  const [ nowUser, setNowUser ] = useState(null);
  useEffect(()=>{
        // 查看的用戶
        async function getUserInfo(userId){
            const user = await getUser(userId);
            setNowUser(user);
        }
        getUserInfo(userId);
    },[userId])
  
  return (
    <>
      <Navbar title={nowUser?.name} haveBack={true} subtitle={`${nowUser?.tweetCount}推文`} />
      <Link to={"/profile/follow"} state={{tabid:'follow-tab1', userId:userId}}>跟隨者</Link><br/>
      <Link to={"/profile/follow"} state={{tabid:'follow-tab2', userId:userId}}>正在跟隨</Link>
      <Loading />
    </>
  );
};
export default ProfilePage;