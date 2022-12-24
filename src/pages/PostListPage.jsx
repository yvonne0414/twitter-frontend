import { Navbar, PostNew, PostCollection, Loading, UserLayout } from '../components';
import { useEffect, useState } from 'react';
import { getPostlist } from '../apis/tweet';

const PostListPage = () => {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [nextPage, setNextPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    setIsLoading(true);
    async function getPosts() {
      const posts = await getPostlist({
        page: 1,
        limit: limit,
      });
      setPostList(posts);
      setIsLoading(false);
    }
    getPosts();
  }, []);

  async function getMorePosts() {
    console.log(`nextPage=${nextPage}`);
    const result = await getPostlist({
      page: nextPage,
      limit: limit,
    });
    console.log(nextPage, result);
    if (result.status === 'error') {
      showNotification('error', result.message);
    }
    const newList = postList.slice(0, (nextPage - 1) * limit);
    setPostList(newList.concat(result));
    setNextPage(nextPage + 1);
  }

  function handleScrollToButton() {
    getMorePosts();
  }

  return (
    <UserLayout onScrollToBottom={handleScrollToButton}>
      <Navbar title={'首頁'} />
      <PostNew />
      {isLoading ? <Loading /> : <PostCollection postList={postList} />}
    </UserLayout>
  );
};
export default PostListPage;
