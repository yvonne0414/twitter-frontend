import { Navbar, AuthInputs, Button } from '../components';
import { notifyContext } from '../contexts/NotifyContext';
import { useContext, useState } from 'react';
import { putUserAccount } from '../apis/user';

const AccountUpdate = () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const [datas, setDatas] = useState([
    {
      title: '帳號',
      placeholder: '請輸入帳號',
      id: 1,
      disabled: false,
      invalid: false,
      errorMessage: '帳號不存在跟重複 等後台傳',
      textLimit: '',
      value: userInfo.account,
    },
    {
      title: '名稱',
      placeholder: '請輸入名稱',
      id: 2,
      disabled: false,
      invalid: false,
      errorMessage: '內容不可空白',
      textLimit: 50,
      value: userInfo.name,
    },
    {
      title: 'Email',
      placeholder: '請輸入密碼',
      id: 3,
      disabled: false,
      invalid: false,
      errorMessage: '內容不可空白',
      textLimit: '',
      value: userInfo.email,
    },
    {
      title: '密碼',
      placeholder: '請設定密碼',
      id: 4,
      disabled: false,
      invalid: false,
      errorMessage: '內容不可空白',
      textLimit: '',
      value: '',
    },
    {
      title: '密碼再次確認',
      placeholder: '請再次輸入密碼',
      id: 5,
      disabled: false,
      invalid: false,
      errorMessage: '內容不可空白',
      textLimit: '',
      value: '',
    },
  ]);
  
  const { showNotification } = useContext(notifyContext);
  const userId = userInfo.id;

  function handleInputChange({ id, value }) {
    const cloneDatas = [...datas];
    const findData = cloneDatas.find((element) => element.id === id);
    findData.invalid = false;
    findData.value = value;
    setDatas(cloneDatas);
  }

  async function handleSaveButtonClicked() {
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

    if (datas[1].value.length > datas[1].textLimit) {
      cloneDatas[1].invalid = true;
      cloneDatas[1].errorMessage = '字數超出上限！';
      showNotification('error', '名稱字數超出上限！');
      precheckError = true;
    }

    if (precheckError) {
      setDatas(cloneDatas);
      return;
    }

    const result = await putUserAccount({
      userId: userId,
      payload: {
        account: datas[0].value,
        name: datas[1].value,
        email: datas[2].value,
        password: datas[3].value,
        checkPassword: datas[4].value,
      },
    });

    console.log(result)

    if (result.status === 'success') {
      showNotification('success', '修改成功！');
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
    } else if (result.message === '帳號不存在！') {
      showNotification('error', '帳號不存在！');
      setDatas(cloneDatas);
      return;
    } else if (result.message === '無權限更改此使用者！') {
      showNotification('error', '無權限更改此使用者！');
      setDatas(cloneDatas);
      return;
    } else if (result.message === '找不到使用者！') {
      showNotification('error', '找不到使用者！');
      setDatas(cloneDatas);
      return;
    } else if (result.message !== '') {
      alert(result.message);
    } else {
      alert('未知的錯誤');
    }
  }

  return (
    <>
      <Navbar title={'帳戶設定'} />
      <div className="p-6">
        <AuthInputs requiredDatas={datas} onChange={handleInputChange} />
      </div>
      <div className="px-6 pt-4 text-end">
        <Button text={'儲存'} onClick={handleSaveButtonClicked}></Button>
      </div>
    </>
  );
};
export default AccountUpdate;
