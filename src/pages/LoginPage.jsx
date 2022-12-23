import AuthInputs from '../components/AuthInputs';
import ACLogo from '../assets/imgs/logo.png';
import Button from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { notifyContext } from '../contexts/NotifyContext';

const requiredDatas = [
  {
    title: '帳號',
    placeholder: '請輸入帳號',
    id: 1,
    disabled: false,
    invalid: false,
    errorMessage: '帳號不存在跟重複 等後台傳',
    textLimit: '',
    value: '',
  },
  {
    title: ' 密碼',
    placeholder: '請輸入密碼',
    id: 4,
    disabled: false,
    invalid: false,
    errorMessage: '內容不可空白',
    textLimit: '',
    value: '',
  },
];

const LoginPage = () => {
  const [datas, setDatas] = useState(requiredDatas);
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate()
  const { showNotification } = useContext(notifyContext);


  async function handleLoginBtnClicked (){
    const cloneDatas = [...datas];
    for (const element of cloneDatas) {
      element.invalid = false;
    }

    var precheckError = false;
    for (const element of cloneDatas) {
      var hasEmpty = false;
      if (element.value.trim() === '') {
        element.invalid = true;
        element.errorMessage = '此欄位必填！';
        precheckError = true;
        hasEmpty = true;
      }
      if (hasEmpty) {
        showNotification('error', '所有欄位都是必填！');
      }
    }

    if (precheckError) {
      setDatas(cloneDatas);
      return;
    }
    const res = await login({
      account: datas[0].value,
      password: datas[1].value,
    });

    if (res.status == 'success') {
      showNotification('success', `歡迎回來，${res.data.user.name}`);
      navigate('/main');
      return;
    } else if (res.message === '帳號不存在！') {
      showNotification('error', '帳號不存在！');
      cloneDatas[0].invalid = true;
      cloneDatas[0].errorMessage = '帳號不存在！';
    } else if (res.message === '密碼輸入錯誤！') {
      showNotification('error', '密碼輸入錯誤！');
      cloneDatas[1].invalid = true;
      cloneDatas[1].errorMessage = '密碼輸入錯誤！';
    } else {
      alert('Unkown Error');
    }
  }

  function handleInputChange( {id, value} ) {
    const cloneDatas = [...datas];
    const findData = cloneDatas.find(element => element.id === id) 
    findData.invalid = false;
    findData.value = value;
    setDatas(cloneDatas);
  }

  

  return (
    <div className={`flex flex-col items-center max-w-[356px] mx-auto`}>
      <img src={ACLogo} className={`w-[50px] h-[50px] mt-16`} alt="AC Logo" />
      <p className={`h-[33px] text-[#1C1C1C] heading-h3 text-center mt-6 mb-[32px]`}>登入Alphitter</p>
      <AuthInputs requiredDatas={datas} onChange={handleInputChange} />
      <Button onClick={handleLoginBtnClicked} text={'登入'} width={`w-full`} height={`h-[46px]`} />
      <div className={`ml-auto max-w-[356px] flex justify-end	mt-4 py-1.5`}>
        <Link to="/regist" className={`content-l-r text-primary underline underline-offset-2	`}>
          註冊
        </Link>
        <p className={`mx-3`}>・</p>
        <Link to="/admin/login" className={`content-l-r text-primary underline underline-offset-2	`}>
          後台登入
        </Link>
      </div>
    </div>
  );
};
export default LoginPage;
