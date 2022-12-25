import { PopularCollection, UserSideBar } from '../components';
import { useEffect, useState } from 'react';
import { getUserTop10 } from '../apis/user';

const UserLayout = ({ children, onScrollToBottom = null, onPostNew}) => {
  const [userTop10, setUserTop10] = useState([]);
  const loginUserId = JSON.parse(localStorage.getItem('userInfo'))?.id ?? -1;

  useEffect(() => {
    async function getPopularInfoList() {
      const top10 = await getUserTop10();
      setUserTop10(top10);
      // console.log('top10', top10);
    }
    getPopularInfoList();
  }, []);

  function handleScroll(e) {
    const bottom = e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight < 1;
    if (bottom) {
      onScrollToBottom?.();
    }
  }

  return (
    <div className="flex justify-between">
      <aside className="h-screen pt-4">
      <UserSideBar loginUserId={loginUserId} onPostNew={onPostNew} />
      </aside>
      <main onScroll={handleScroll} className="h-screen overflow-auto border-x border-borderC mx-6 grow">{children}</main>
      <aside className="h-screen py-4">
        <PopularCollection title={'推薦追蹤'} userInfoList={userTop10} />
      </aside>
    </div>
  );
};

export default UserLayout;