import { Navbar, PostNew, PostCollection, Loading, AdminPostCollection, NotificationCollection, AdminUserCollection } from '../components';
import { useContext, useEffect, useState } from 'react';
import { deletePost, getAdminPostlist, getAdminUsersList } from '../apis/admin';
import { notifyContext } from '../contexts/NotifyContext';
import { render } from '@testing-library/react';

const AdminUserListPage = () => {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { showNotification } = useContext(notifyContext);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const users = await getAdminUsersList();
      setUserList(users);
      setIsLoading(false);
    } 
    fetchData();
  }, []);

  return (
    <>
      <Navbar title={'使用者列表'} />
      {isLoading ? <Loading /> : <AdminUserCollection userList={userList} />}
      <NotificationCollection />
    </>
  );
};
export default AdminUserListPage;
