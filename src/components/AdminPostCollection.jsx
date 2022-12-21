import { PostItem, Empty, AdminPostItem } from './index';

const AdminPostCollection = ({ postList, onDeleteItem }) => {
  function handleDeleteItem(id) {
    onDeleteItem(id)
  }
  return (
    <>
      {postList.length ? (
        postList.map((postInfo) => {
          return <AdminPostItem postInfo={postInfo} onDelete={handleDeleteItem} key={`post-${postInfo.id}`}></AdminPostItem>;
        })
      ) : (
        <Empty />
      )}
    </>
  );
};

export default AdminPostCollection;
