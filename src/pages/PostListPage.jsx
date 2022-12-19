import { Navbar, PostNew, PostCollection } from '../components';
import { useEffect, useState } from 'react';
import { getPostlist } from '../apis/tweet';


const PostListPage = () => {
  const [postList, setPostList] = useState([])

  useEffect(()=>{
    async function getPosts(){
      const posts = await getPostlist();
      setPostList(posts)
      // console.log('top10', top10);
    }
    getPosts();
  },[])
  
  return (
    <>
      <Navbar title={"首頁"} />
      <PostNew />
      <PostCollection postList={postList} />
    </>
  );
};
export default PostListPage;