import { Navbar, Loading, Tabs, ReplyCollection, PostCollection, ProfileMain } from '../components';
import { getUser, getUserTweets, getUserReplys, getUserLikes } from '../apis/user';
import { useLocation } from 'react-router-dom';
import { useState, useEffect, useLayoutEffect } from 'react';

const tabList = [
  {
      title: "推文",
      tabid: "profile-tab1",
      isActive: true
  },
  {
      title: "回復",
      tabid: "profile-tab2",
      isActive: false
  }
  ,
  {
      title: "喜歡的內容",
      tabid: "profile-tab3",
      isActive: false
  }
]

const ProfilePage = () => {
  const { userId } = useLocation().state;
  const [ nowUser, setNowUser ] = useState({});
  const [ tweetList, setTweetList ] = useState([]);
  const [ replyList, setReplyList ] = useState([]);
  const [ likeList, setLikeList ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  useLayoutEffect(()=>{

        async function getInit(params) {
          // 查看的用戶
          const user = await getUser(userId);
          setNowUser(user);
          
          // 取得用戶推文
          const tweets = await getUserTweets(userId);
            setTweetList(tweets)

          // 取得用戶回復推文
          const replys = await getUserReplys(userId);
          let newReply = replys.map(replyInfo => {
            let nReply = {}
            nReply["id"] = replyInfo.Tweet.id;
            nReply["comment"] = replyInfo.comment;
            nReply["UserId"] = replyInfo.Tweet.UserId;
            nReply["createdAt"] = replyInfo.Tweet.createdAt;
            nReply["User"] = {
              "avatar": user.avatar,
              "name": user.name,
              "account": user.account,
              "id": userId
            }
            return nReply
          })
          setReplyList(newReply)

          // 取得用戶喜愛推文
          const likes = await getUserLikes(userId);
          let newLikes = likes.map(likeInfo => {
            let nLike = {}
            nLike["id"] = likeInfo.TweetId;
            nLike["description"] = likeInfo.Tweet.description;
            // TODO 待Api
            nLike["isLiked"] = true;
            nLike["likeCount"] = 1;
            nLike["replyCount"] = 3;
            nLike["User"] = {
              "avatar": user.avatar,
              "name": user.name,
              "account": user.account,
              "id": userId
            }
            return nLike
          })
          setLikeList(newLikes)

          // 解除Loading
          setIsLoading(false)
        }

        getInit();
    },[userId])

  
  return (
    <>
      {
        isLoading ?
        <Loading /> :
        <>
          <Navbar title={nowUser?.name} haveBack={true} subtitle={`${nowUser?.tweetCount}推文`} />
          <ProfileMain userInfo={nowUser} />
          <Tabs tabList={tabList}>
            <PostCollection tabid={"profile-tab1"} postList={tweetList} />
            <ReplyCollection  tabid={"profile-tab2"} replyList={replyList} />
            <PostCollection  tabid={"profile-tab3"} postList={likeList} />
          </Tabs>
        </>  

      }
    </>
  );
};
export default ProfilePage;