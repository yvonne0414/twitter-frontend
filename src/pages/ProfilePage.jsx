import { Navbar, Loading, Tabs, ReplyCollection, PostCollection, ProfileMain } from '../components';
import { getUser, getUserTweets, getUserReplys, getUserLikes, putUserProfile } from '../apis/user';
import { addFollow, deleteFollow } from '../apis/followship';
import { useLocation } from 'react-router-dom';
import { useState, useContext, useLayoutEffect, useEffect } from 'react';
import { notifyContext } from '../contexts/NotifyContext';

const tabList = [
  {
    title: '推文',
    tabid: 'profile-tab1',
    isActive: true,
  },
  {
    title: '回覆',
    tabid: 'profile-tab2',
    isActive: false,
  },
  {
    title: '喜歡的內容',
    tabid: 'profile-tab3',
    isActive: false,
  },
];

const ProfilePage = () => {
  const { userId } = useLocation().state;
  const [nowUser, setNowUser] = useState({});
  const [tweetList, setTweetList] = useState([]);
  const [replyList, setReplyList] = useState([]);
  const [likeList, setLikeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUserSelf, setIsUserSelf] = useState(false);
  const { showNotification } = useContext(notifyContext);

  const loginUserId = JSON.parse(localStorage.getItem("userInfo"))?.id ?? -1;

  useLayoutEffect(() => {
    async function getInit() {
      // 查看的用戶
      let user;
      await getUser(userId)
        .then((res) => {
          user = res;
          setNowUser(user);
        })
        .catch((errorMsg) => {
          console.log('errorMsg', errorMsg);
          showNotification('warn', errorMsg);
        });

      // 是否是登入者
      if (Number(loginUserId) === Number(userId)) {
        setIsUserSelf(true);
      } else {
        setIsUserSelf(false);
      }

      // 取得用戶推文
      const tweets = await getUserTweets(userId);
      setTweetList(tweets);

      // 取得用戶回覆推文
      const replys = await getUserReplys(userId);
      let newReply = replys.map((replyInfo) => {
        let nReply = {};
        nReply['id'] = replyInfo.Tweet.id;
        nReply['comment'] = replyInfo.comment;
        nReply['UserId'] = replyInfo.Tweet.UserId;
        nReply['createdAt'] = replyInfo.Tweet.createdAt;
        nReply['User'] = {
          avatar: user.avatar,
          name: user.name,
          account: user.account,
          id: userId,
        };
        return nReply;
      });
      setReplyList(newReply);

      // 取得用戶喜愛推文
      const likes = await getUserLikes(userId);
      let newLikes = likes.map((likeInfo) => {
        let nLike = {};
        nLike['id'] = likeInfo.TweetId;
        nLike['description'] = likeInfo.Tweet.description;
        // TODO 待Api
        nLike['isLiked'] = true;
        nLike['likeCount'] = 1;
        nLike['replyCount'] = 3;
        nLike['User'] = {
          avatar: user.avatar,
          name: user.name,
          account: user.account,
          id: userId,
        };
        return nLike;
      });
      setLikeList(newLikes);

      // 解除Loading
      setIsLoading(false);
    }

    getInit();
  }, [userId, loginUserId]);

  async function handelFollow(userId) {
    if (!nowUser.isFollowed) {
      await addFollow({
        id: userId,
      })
        .then(() => {
          setNowUser({...nowUser, isFollowed:true })
        })
        .catch((errorMsg) => {
          showNotification('warn', errorMsg);
        });
    } else {
      await deleteFollow(userId)
        .then(() => {
          setNowUser({...nowUser, isFollowed:false })
        })
        .catch((errorMsg) => {
          showNotification('warn', errorMsg);
        });
    }
  }

  async function handleSave({ formData, coverImg, avatarImg }){
      if (Number(nowUser.id) !== Number(loginUserId)) {
        showNotification('danger', '請勿試圖修改他人資料');
        return
      }

      // console.log({coverImg, avatarImg });
      await putUserProfile(loginUserId, formData).then((res)=>{
          showNotification('success', '修改成功');
          console.log(res);
          const newUserData = { 
            ...nowUser, 
            avatar: res.avatar, 
            cover: res.cover, 
            introduction: res.introduction, 
            name: res.name,
           };
          setNowUser(newUserData)
          // let setUserLocal = {
          //   id: 24,
          //   account: "user3",
          //   name:  res.name,
          //   email: "user3@example.com",
          //   avatar: res.avatar,
          //   cover: res.cover,
          //   introduction:  res.introduction,
          //   role: "user",
          //   createdAt: "2022-12-17T09:00:50.000Z",
          //   updatedAt: "2022-12-17T09:00:50.000Z"
          // }
          localStorage.setItem('userInfo', JSON.stringify(newUserData));
      }).catch((err)=>{
          showNotification('warn', err);
      })
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar title={nowUser?.name} haveBack={true} subtitle={`${nowUser?.tweetCount}推文`} />
          <ProfileMain userInfo={nowUser} isUserSelf={isUserSelf} onFollow={handelFollow} onSave={handleSave} />
          <Tabs tabList={tabList}>
            <PostCollection tabid={'profile-tab1'} postList={tweetList} />
            <ReplyCollection tabid={'profile-tab2'} replyList={replyList} />
            <PostCollection tabid={'profile-tab3'} postList={likeList} />
          </Tabs>
        </>
      )}
    </>
  );
};
export default ProfilePage;