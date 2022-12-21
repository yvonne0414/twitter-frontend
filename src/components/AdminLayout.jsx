import { AdminSideBar } from '../components';
import { useEffect, useState } from 'react';
import { getUserTop10 } from '../apis/user';

const AdminLayout = ({ children }) => {
  const [userTop10, setUserTop10] = useState([]);

  // useEffect(() => {
  //   async function getPopularInfoList() {
  //     const top10 = await getUserTop10();
  //     setUserTop10(top10);
  //     // console.log('top10', top10);
  //   }
  //   getPopularInfoList();
  // }, []);

  return (
    <div className="flex justify-between">
      <aside className="h-screen pt-4">
        <AdminSideBar />
      </aside>
      <main className="h-screen overflow-auto border-x border-borderC mx-6 grow">{children}</main>
    </div>
  );
};

export default AdminLayout;
