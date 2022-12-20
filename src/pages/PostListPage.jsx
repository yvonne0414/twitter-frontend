import { Navbar, PostNew, PostCollection, Loading } from '../components';
import { useEffect, useState } from 'react';
import { getPostlist } from '../apis/tweet';


const PostListPage = () => {
  const [postList, setPostList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    setIsLoading(true)
    async function getPosts(){
      const posts = await getPostlist();
      setPostList(posts)
      setIsLoading(false)
    }
    getPosts();
  },[])
  
  return (
    <>
      <Navbar title={"首頁"} />
      <PostNew />
      {
        isLoading ?
        <Loading /> :
        <PostCollection postList={postList} />
      }
    </>
  );
};
export default PostListPage;