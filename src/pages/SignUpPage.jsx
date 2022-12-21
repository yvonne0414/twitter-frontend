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
    id: 0,
    disabled: false,
    invalid: false,
    errorMessage: '帳號不存在跟重複 等後台傳',
    textLimit: '',
    value: '',
  },
  {
    title: '名稱',
    placeholder: '請輸入使用者名稱',
    id: 1,
    disabled: false,
    invalid: false,
    errorMessage: '字數超過上限！',
    textLimit: 50,
    value: '',
  },
  {
    title: 'Email',
    placeholder: '請輸入Email',
    id: 2,
    disabled: false,
    invalid: false,
    errorMessage: '信箱已重複註冊！',
    textLimit: '',
    value: '',
  },
  {
    title: '密碼',
    placeholder: '請設定密碼',
    id: 3,
    disabled: false,
    invalid: false,
    errorMessage: '內容不可空白',
    textLimit: '',
    value: '',
  },
  {
    title: '確認密碼',
    placeholder: '請再次輸入密碼',
    id: 4,
    disabled: false,
    invalid: false,
    errorMessage: '確認密碼不一致！',
    textLimit: '',
    value: '',
  },
];

const SignUpPage = () => {
  const [datas, setDatas] = useState(requiredDatas);
  const { showNotification } = useContext(notifyContext);
  const { register } = useAuth();
  const navigate = useNavigate();

  function handleInputChange({ id, value }) {
    const cloneDatas = [...datas];
    cloneDatas[id].invalid = false;
    cloneDatas[id].value = value;
    if (datas[1].value.length > 50) {
      cloneDatas[1].invalid = true;
      cloneDatas[1].errorMessage = '字數超出上限！';
    }
    setDatas(cloneDatas);
  }

  async function handleRegistBtnClicked() {
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

    if (datas[4].value !== datas[3].value) {
      cloneDatas[4].invalid = true;
      cloneDatas[4].errorMessage = '確認密碼與密碼不相同！';
      showNotification('error', '確認密碼與密碼不相同！');
      precheckError = true;
    }

    if (datas[1].value.length > 50) {
      cloneDatas[1].invalid = true;
      cloneDatas[1].errorMessage = '字數超出上限！';
      showNotification('error', '名稱字數超出上限！');
      precheckError = true;
    }

    if (precheckError) {
      setDatas(cloneDatas);
      return;
    }

    const result = await register({
      account: datas[0].value,
      username: datas[1].value,
      email: datas[2].value,
      password: datas[3].value,
      checkPassword: datas[4].value,
    });

    if (result.status === 'success') {
      showNotification('註冊成功！');
      navigate('/main');
    } else if (result.message === 'email 已重複註冊！') {
      cloneDatas[2].invalid = true;
      cloneDatas[2].errorMessage = 'email 已重複註冊！';
      setDatas(cloneDatas);
      showNotification('error', 'email 已重複註冊！');
      return;
    } else if (result.message === 'account 已重複註冊！') {
      cloneDatas[0].invalid = true;
      cloneDatas[0].errorMessage = '帳號已重複註冊！';
      setDatas(cloneDatas);
      showNotification('error', '帳號已重複註冊！');
      return;
    } else if (result.message !== '') {
      alert(result.message);
    } else {
      alert('未知的錯誤');
    }
  }

  function resetInvalid(id) {
    const cloneDatas = [...datas];
    cloneDatas[id].invalid = false;
    setDatas(cloneDatas);
  }

  return (
    <div className={`flex flex-col items-center`}>
      <img src={ACLogo} className={`w-[50px] h-[50px] mt-16`} alt="AC Logo" />
      <p className={`h-[33px] text-[#1C1C1C] heading-h3 text-center mt-6 mb-[32px]`}>建立你的帳號</p>
      <AuthInputs requiredDatas={datas} onChange={handleInputChange} />
      <Button onClick={handleRegistBtnClicked} text={'註冊'} width={`w-[356px]`} height={`h-[46px]`} />
      <div className={`w-[356px] flex justify-center	mt-4 py-1.5`}>
        <Link to="/login" className={`content-l-r text-primary underline underline-offset-2	`}>
          取消
        </Link>
      </div>
    </div>
  );
};
export default SignUpPage;
