import { Navbar, PostNew, PostCollection, Loading, AdminPostCollection } from '../components';
import { useEffect, useState } from 'react';
import { getAdminPostlist } from '../apis/admin';

const AdminPostListPage = () => {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    async function getAdminPosts() {
      const posts = await getAdminPostlist();
      setPostList(posts);
      setIsLoading(false);
    }
    getAdminPosts();
  }, []);

  return (
    <>
      <Navbar title={'推文清單'} />
      {isLoading ? <Loading /> : <AdminPostCollection postList={postList} />}
    </>
  );
};
export default AdminPostListPage;
