import { PostItem, Notification } from '../components';
import AuthInputs from '../components/AuthInputs';
import Button from '../components/Button';
import Input from '../components/Input';

const requiredDatas = [
  {
    title: '帳號',
    placeholder: '請輸入帳號',
    id: 1,
  },
  {
    title: '名稱',
    placeholder: '請輸入使用者名稱',
    id: 2,
  },
  {
    title: 'Email',
    placeholder: '請輸入Email',
    id: 3,
  },
  {
    title: ' 密碼',
    placeholder: '請設定密碼',
    id: 4,
  },
  {
    title: ' 確認密碼',
    placeholder: '請再次輸入密碼',
    id: 5,
  },
];

const PostList = () => {
  return (
    <>
      <div className="font">PostList</div>
      <PostItem />
      <Button text="跟隨" outline={true} />
      <Input title="帳號" placeholder="請輸入帳號" />
      <Notification />
      <AuthInputs requiredDatas={requiredDatas} />
    </>
  );
};
export default PostList;
