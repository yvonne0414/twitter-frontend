import AuthInputs from '../components/AuthInputs';
import ACLogo from '../assets/imgs/logo.png';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const requiredDatas = [
  {
    title: '帳號',
    placeholder: '請輸入帳號',
    id: 1,
    disabled: false,
    invalid: false,
    errorMessage: '帳號不存在跟重複 等後台傳',
    textLimit: '',
  },
  // {
  //   title: '名稱',
  //   placeholder: '請輸入使用者名稱',
  //   id: 2,
  //   disabled: false,
  //   invalid: false,
  //   errorMessage: '字數超過上限！',
  //   textLimit: 50,
  // },
  // {
  //   title: 'Email',
  //   placeholder: '請輸入Email',
  //   id: 3,
  //   disabled: false,
  //   invalid: true,
  //   errorMessage: '信箱已重複註冊！',
  //   textLimit: '',
  // },
  {
    title: ' 密碼',
    placeholder: '請輸入密碼',
    id: 4,
    disabled: false,
    invalid: false,
    errorMessage: '內容不可空白',
    textLimit: '',
  },
  // {
  //   title: ' 確認密碼',
  //   placeholder: '請再次輸入密碼',
  //   id: 5,
  //   disabled: false,
  //   invalid: true,
  //   errorMessage: '確認密碼不一致！',
  //   textLimit: '',
  // },
];

const AdminLoginPage = () => {
  function handleAdminLoginBtnClicked() {
    alert('你已成功登入後台！');
  }
  return (
    <div className={`flex flex-col items-center`}>
      <img src={ACLogo} className={`w-[50px] h-[50px] mt-16`} alt="AC Logo" />
      <p className={`h-[33px] text-[#1C1C1C] heading-h3 text-center mt-6 mb-[32px]`}>後台登入</p>
      <AuthInputs requiredDatas={requiredDatas} />
      <Button onClick={handleAdminLoginBtnClicked} text={'登入'} width={`w-[356px]`} height={`h-[46px]`} />
      <div className={`w-[356px] flex justify-end	mt-4 py-1.5`}>
        <Link to="/login" className={`content-l-r text-primary underline underline-offset-2	`}>
          前台登入
        </Link>
      </div>
    </div>
  );
};
export default AdminLoginPage;