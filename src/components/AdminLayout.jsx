import { AdminSideBar } from '../components';
import { useEffect, useState } from 'react';
import { getUserTop10 } from '../apis/user';

const AdminLayout = ({ children, onScrollToBottom }) => {
  const [userTop10, setUserTop10] = useState([]);

  function handleScroll(e) {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      onScrollToBottom()
    }
  }

  return (
    <div className="flex justify-between">
      <aside className="h-screen pt-4">
        <AdminSideBar />
      </aside>
      <main onScroll={handleScroll} className="h-screen overflow-auto border-x border-borderC mx-6 grow">{children}</main>
    </div>
  );
};

export default AdminLayout;
