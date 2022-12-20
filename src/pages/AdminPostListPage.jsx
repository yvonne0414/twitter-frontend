import { Navbar, PostNew, PostCollection, Loading, AdminPostCollection, NotificationCollection } from '../components';
import { useContext, useEffect, useState } from 'react';
import { deletePost, getAdminPostlist } from '../apis/admin';
import { notifyContext } from '../contexts/NotifyContext';
import { render } from '@testing-library/react';

const AdminPostListPage = () => {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { showNotification } = useContext(notifyContext);

  useEffect(() => {
    setIsLoading(true);
    async function getAdminPosts() {
      const posts = await getAdminPostlist();
      console.log('from server', posts.length);
      setPostList(posts);
      setIsLoading(false);
    }
    getAdminPosts();
  }, []);

  async function handleDeleteItem(id) {
    const result = await deletePost(id)
    console.log(`id(${id}), status(${result.status}), message(${result.message})`)

    if (result.status === 'success') {
      setPostList(list => list.filter(item => {
        return item.id !== id
      }));
      showNotification('success', `成功刪除貼文編號${id}`);

    } else if (result.status === 'error') {
      showNotification('error', result.message)
    }
  }

  return (
    <>
      <Navbar title={'推文清單'} />
      {isLoading ? <Loading /> : <AdminPostCollection postList={postList} onDeleteItem={handleDeleteItem} />}
      <NotificationCollection />
    </>
  );
};
export default AdminPostListPage;
