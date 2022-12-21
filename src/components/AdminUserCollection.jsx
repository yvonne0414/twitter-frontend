import { ProfileMain, Empty, AdminUserItem } from './index';

const AdminUserCollection = ({ userList }) => {
 
  return (
    <div className={`flex flex-wrap`}>
      {userList.length ? (
        userList.map((userInfo) => {
          return <AdminUserItem userInfo={userInfo} key={`post-${userInfo.id}`} style={`mt-4`}></AdminUserItem>;
        })
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default AdminUserCollection;
