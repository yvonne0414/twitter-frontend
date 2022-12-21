import { Navbar, PostNew, PostCollection, Loading, AdminPostCollection, NotificationCollection, AdminUserCollection } from '../components';
import { useContext, useEffect, useState } from 'react';
import { deletePost, getAdminPostlist, getAdminUsersList } from '../apis/admin';
import { notifyContext } from '../contexts/NotifyContext';
import { render } from '@testing-library/react';
import AdminLayout from '../components/AdminLayout';

const AdminUserListPage = () => {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [nextPage, setNextPage] = useState(1);
  const limit = 10;
  const { showNotification } = useContext(notifyContext);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const result = await getAdminUsersList({
        page: 1, 
        limit: limit,
      });
      setIsLoading(false);
      if (result.status === 'error') {
        showNotification('error', result.message);
        return
      }
      setUserList(result);
      setNextPage(2);
    }
    fetchData();
  }, []);

  async function fetchMoreData() {
    console.log(nextPage)
    const result = await getAdminUsersList({
      page: nextPage, 
      limit: limit
    });
    console.log(result)
    if (result.status === 'error') {
      showNotification('error', result.message);
      return
    }
    const newList = userList.slice(0, (nextPage - 1) * limit);
    setUserList(newList.concat(result));
    setNextPage(nextPage + 1);
  }

  function handleScrollToButton() {
    fetchMoreData();
  }

  return (
    <AdminLayout onScrollToBottom={handleScrollToButton}>
      <Navbar title={'使用者列表'} />
      {isLoading ? <Loading /> : <AdminUserCollection userList={userList} />}
      <NotificationCollection />
    </AdminLayout>
  );
};
export default AdminUserListPage;
