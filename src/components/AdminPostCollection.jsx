import { PostItem, Empty, AdminPostItem } from './index';

const AdminPostCollection = ({ postList }) => {
  return (
    <>
      {postList.length ? (
        postList.map((postInfo) => {
          return <AdminPostItem postInfo={postInfo} key={`post-${postInfo.id}`}></AdminPostItem>;
        })
      ) : (
        <Empty />
      )}
    </>
  );
};

export default AdminPostCollection;
