import { PostItem, Notification, Navbar } from '../components';
import AuthInputs from '../components/AuthInputs';
import Button from '../components/Button';

const PostList = () => {
  return (
    <>
      <div className="font">PostList</div>
      <PostItem />
      <Button text="跟隨" outline={true} />
      <Notification type="warn" text="警告！！！" />
      <Navbar haveBack={true} title="推文" />
      <Navbar title="推文2" />
    </>
  );
};
export default PostList;
