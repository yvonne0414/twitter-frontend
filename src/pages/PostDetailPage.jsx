import { Navbar, PostMain, ReplyCollection } from '../components';
// api
import { getPost, getReplies } from '../apis/tweet';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetailPage = () => {
  const [postInfo, setPostInfo] = useState(null)
  const [replies, setReplies] = useState([])
  const { postId } = useParams();
  // console.log(postId);

  useEffect(()=>{
    // 推文內容
    async function getPostInfo(){
      const post = await getPost(postId);
      setPostInfo(post);
      // console.log('post', post);
    }
    getPostInfo();

    // 回復列表
    async function getRepltList(){
      const replyList = await getReplies(postId);
      setReplies(replyList);
      // console.log('replyList', replyList);
    }
    getRepltList();
  },[postId])
  
  return (
    <>
      <Navbar title={"推文"} haveBack={true} />
      <PostMain postInfo={postInfo} />
      <ReplyCollection replyList={replies} />
    </>
  );
};
export default PostDetailPage;