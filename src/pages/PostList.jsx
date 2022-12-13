import { PostItem } from '../components';
import Button from '../components/Button';
const PostList = () => {
  return (
    <>
      <div className="font">PostList</div>
      <PostItem />
      <Button text="跟隨" outline={true} />
    </>
  );
};
export default PostList;
