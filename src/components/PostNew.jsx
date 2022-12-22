import Avatar from './Avatar';
import Button from '../components/Button';
import { useContext, useState } from 'react';
import { notifyContext } from '../contexts/NotifyContext';
import { addPost } from '../apis/tweet';

const PostNew = () => {
  const [value, setValue] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // 自適應高度
  function handleValueChange(e){
    let lineHeight = 15;
    let borderTop = 1;
    let borderBottom = 1;
    let height = parseInt(getComputedStyle(e.target).height.slice(0, -2), 10)
    if (e.target.scrollHeight > height) {
        e.target.style.height = `${e.target.scrollHeight + borderTop + borderBottom}px`
    } else {
        while (height >= e.target.scrollHeight) {
            e.target.style.height = `${height - lineHeight}px`
            height -= lineHeight
        }
        e.target.style.height = `${height + lineHeight}px`
    }
    setValue(e.target.value);
  }

  // 通知
  const { showNotification } = useContext(notifyContext);
  async function handelPost(){
    if(!value.trim()){
      setErrorMsg('內容不可空白');
      return
    }
    if(value.length > 140){
      setErrorMsg('字數不可超過 140 字');
      return
    }
    await addPost(value).then((e)=>{
      showNotification('success', '推文成功');
      setValue("");
      setErrorMsg("");
    }).catch((errMsg)=>{
      showNotification('wran', errMsg)
    })
    
  }


  return (
    <div className='w-100 min-h-[136px] flex flex-col justify-between border-b-[10px] border-borderC py-4 px-6'>
      <div className='w-100 flex '>
        <Avatar />
        <textarea className='grow  heading-h5 px-2 py-3 appearance-none resize-none overflow-hidden focus:outline-none min-h-full' placeholder='有什麼新鮮事？' onChange={handleValueChange} value={value}></textarea>
      </div>
      <div className='flex justify-end items-center space-x-5 mt-[22px]'>
        {
          errorMsg && <div className='font-medium text-[15px] text-error'>{errorMsg}</div>
        }
        <Button text="推文" outline={false} onClick={handelPost}  />
      </div>
    </div>
  )
}

export default PostNew;