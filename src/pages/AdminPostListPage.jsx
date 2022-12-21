import { Navbar, PostNew, PostCollection, Loading, AdminPostCollection, NotificationCollection } from '../components';
import { useContext, useEffect, useRef, useState } from 'react';
import { deletePost, getAdminPostlist } from '../apis/admin';
import { notifyContext } from '../contexts/NotifyContext';
import AdminLayout from '../components/AdminLayout';

const AdminPostListPage = () => {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { showNotification } = useContext(notifyContext);
  const [nextPage, setNextPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    async function getAdminPosts() {
      setIsLoading(true);
      const result = await getAdminPostlist({
        page: nextPage,
        limit: limit,
      });
      console.log(result);
      setIsLoading(false);
      if (result.status === 'error') {
        showNotification('error', result.message);
        return;
      }
      setPostList(result);
      setNextPage(nextPage + 1);
    }
    getAdminPosts();
  }, []);

  async function getMoreAdminPosts() {
    console.log(`nextPage=${nextPage}`);
    const result = await getAdminPostlist({
      page: nextPage,
      limit: limit,
    });
    console.log(result);
    if (result.status === 'error') {
      showNotification('error', result.message);
    }
    const newList = postList.slice(0, (nextPage - 1) * limit);
    setPostList(newList.concat(result));
    setNextPage(nextPage + 1);
  }

  async function handleDeleteItem(id) {
    const result = await deletePost(id);
    console.log(`id(${id}), status(${result.status}), message(${result.message})`);

    if (result.status === 'success') {
      setPostList((list) =>
        list.filter((item) => {
          return item.id !== id;
        })
      );
      showNotification('success', `成功刪除貼文編號${id}`);
    } else if (result.status === 'error') {
      showNotification('error', result.message);
    }
  }

  function handleScrollToButton() {
    getMoreAdminPosts();
  }

  return (
    <AdminLayout onScrollToBottom={handleScrollToButton}>
      <Navbar title={'推文清單'} />
      {isLoading ? <Loading /> : <AdminPostCollection postList={postList} onDeleteItem={handleDeleteItem} />}
      <NotificationCollection />
    </AdminLayout>
  );
};
export default AdminPostListPage;
