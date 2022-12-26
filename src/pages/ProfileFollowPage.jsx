// components
import { Navbar, Tabs, FollowCollection, UserLayout } from '../components';
// api
import { getUser, getUserfollowers, getUserfollowings } from '../apis/user';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


const ProfileFollowPage = () => {
    // const userId = 4;
    const {tabid, userId} = useLocation().state || {tabid: "follow-tab1"};
    const [nowUser, setNowUser] = useState(null);
    const [followerList, setFollowerList] = useState([]);
    const [followingList, setFollowingList] = useState([]);

    // const tabList = 
    const [tabList, setTabList] = useState([
        {
            title: "跟隨者",
            tabid: "follow-tab1",
            isActive: (tabid === "follow-tab1")
        },
        {
            title: "正在跟隨",
            tabid: "follow-tab2",
            isActive: (tabid === "follow-tab2")
        }
    ])


    useEffect(()=>{
        // 查看的用戶
        async function getUserInfo(userId){
            const user = await getUser(userId);
            setNowUser(user);
        }
        getUserInfo(userId);

        // 跟隨者
        async function getfollowers(userId){
            const followers = await getUserfollowers(userId);
            // console.log("Fn ---followers", followers);
            setFollowerList(followers)
        }
        getfollowers(userId);
        getfollowings(userId);
    },[userId])


  // 正在跟隨
  async function getfollowings(userId){
      const followings = await getUserfollowings(userId);
      setFollowingList(followings)
  }

  function handleFollowStateChanged() {
    getfollowings(userId);
  }


  return (
    <UserLayout onFollowStateChanged={handleFollowStateChanged}>
      <Navbar title={nowUser?.name} haveBack={true} subtitle={`${nowUser?.tweetCount}推文`} />
      <Tabs tabList={tabList}>
        <FollowCollection tabid={"follow-tab1"} followList={followerList} key={"follow-tab1"} />
        <FollowCollection tabid={"follow-tab2"} followList={followingList} key={"follow-tab2"} />
      </Tabs>
    </UserLayout>
  );
};
export default ProfileFollowPage;