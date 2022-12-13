import { PostItem } from '../components';
import Button from '../components/Button';
import Input from '../components/Input';
const PostList = () => {
  return (
    <>
      <div className="font">PostList</div>
      <PostItem />
      <Button text="跟隨" outline={true} />
      <Input title="帳號" placeholder="請輸入帳號" />
    </>
  );
};
export default PostList;
