import { PostItem, Notification } from '../components';
import AuthInputs from '../components/AuthInputs';
import Button from '../components/Button';

const requiredDatas = [
  {
    title: '帳號',
    placeholder: '請輸入帳號',
    id: 1,
    disabled: true,
    invalid: false,
    errorMessage: '帳號不存在跟重複 等後台傳',
  },
  {
    title: '名稱',
    placeholder: '請輸入使用者名稱',
    id: 2,
    disabled: false,
    invalid: false,
    errorMessage: '字數超過上限！',
  },
  {
    title: 'Email',
    placeholder: '請輸入Email',
    id: 3,
    disabled: false,
    invalid: true,
    errorMessage: '信箱已重複註冊！',
  },
  {
    title: ' 密碼',
    placeholder: '請設定密碼',
    id: 4,
    disabled: false,
    invalid: true,
    errorMessage: '內容不可空白',
  },
  {
    title: ' 確認密碼',
    placeholder: '請再次輸入密碼',
    id: 5,
    disabled: false,
    invalid: true,
    errorMessage: '確認密碼不一致！',
  },
];

const PostList = () => {
  return (
    <>
      <div className="font">PostList</div>
      <PostItem />
      <Button text="跟隨" outline={true} />
      <AuthInputs requiredDatas={requiredDatas} />
      <Notification />
    </>
  );
};
export default PostList;
