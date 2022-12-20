import { Navbar, AuthInputs, Button } from '../components';
import { notifyContext } from '../contexts/NotifyContext';
import { useContext, useState } from 'react';


const requiredDatas = [
    {
        title: '帳號',
        placeholder: '請輸入帳號',
        id: 1,
        disabled: false,
        invalid: false,
        errorMessage: '帳號不存在跟重複 等後台傳',
        textLimit: '',
        value: 'wonderwoman',
    },
    {
        title: '名稱',
        placeholder: '請輸入名稱',
        id: 2,
        disabled: false,
        invalid: false,
        errorMessage: '內容不可空白',
        textLimit: '',
        value: 'Diana',
    },
    {
        title: 'Email',
        placeholder: '請輸入密碼',
        id: 3,
        disabled: false,
        invalid: false,
        errorMessage: '內容不可空白',
        textLimit: '',
        value: 'diana@gmail.com',
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
];

const AccountUpdate = () => {
    const [datas, setDatas] = useState(requiredDatas);
    const { showNotification } = useContext(notifyContext);

  
    function handleInputChange( {id, value} ) {
      const cloneDatas = [...datas];
      const findData = cloneDatas.find(element => element.id === id) 
      findData.invalid = false;
      findData.value = value;
      setDatas(cloneDatas);
    }
  
  return (
    <>
        <Navbar title={'帳戶設定'} />
        <div className='p-6'>
            <AuthInputs requiredDatas={datas} onChange={handleInputChange} />
        </div>
        <div className='px-6 pt-4 text-end' >
            <Button text={"儲存"}></Button>
        </div>
    </>
  );
};
export default AccountUpdate;