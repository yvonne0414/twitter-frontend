// components
import { notifyContext } from '../contexts/NotifyContext';
import { Navbar, PostMain, PopularCollection, ReplyCollection, UserSideBar } from '../components';
// api
import { getUserTop10 } from '../apis/user';
import { getPost, getReplies } from '../apis/tweet';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetailPage = () => {
  const [userTop10, setUserTop10] = useState([])
  const [postInfo, setPostInfo] = useState(null)
  const [replies, setReplies] = useState([])
  const { postId } = useParams();
  console.log(postId);

  useEffect(()=>{
    // 推薦追蹤
    async function getPopularInfoList(){
      const top10 = await getUserTop10();
      setUserTop10(top10)
      // console.log('top10', top10);
    }
    getPopularInfoList();

    // 推文內容
    async function getPostInfo(){
      const post = await getPost(postId);
      setPostInfo(post);
      console.log('post', post);
    }
    getPostInfo();

    // 回復列表
    async function getRepltList(){
      const replyList = await getReplies(postId);
      setReplies(replyList);
      console.log('replyList', replyList);
    }
    getRepltList();
  },[postId])
  
  return (
    <div className='flex justify-between'>
      <aside className='h-screen pt-4'>
        <UserSideBar />
      </aside>
      <main  className='h-screen overflow-auto border-x border-borderC mx-6 grow'>
        <Navbar title={"推文"} haveBack={true} />
        <PostMain postInfo={postInfo} />
        <ReplyCollection replyList={replies} />
      </main>
      <aside className='h-screen pt-4'>
        <PopularCollection title={"推薦追蹤"} userInfoList={userTop10}/>
      </aside>
    </div>
  );
};
export default PostDetailPage;