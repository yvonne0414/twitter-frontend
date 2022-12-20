import Avatar from './Avatar';
import Button from '../components/Button';
import { useContext } from 'react';
import { notifyContext } from '../contexts/NotifyContext';

const PostNew = () => {
  // 自適應高度
  let lineHeight = 15;
  let borderTop = 1;
  let borderBottom = 1;
  function handleValueChange(e){
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
  }

  // 通知
  const { showNotification } = useContext(notifyContext);
  async function handelPost(){
    showNotification('info', '推文成功')
  }


  return (
    <div className='w-100 min-h-[136px] flex flex-col justify-between border-b-[10px] border-borderC py-4 px-6'>
      <div className='w-100 flex '>
        <Avatar />
        <textarea className='grow  heading-h5 px-2 py-3 appearance-none resize-none overflow-hidden focus:outline-none' placeholder='有什麼新鮮事？' onChange={handleValueChange}></textarea>
      </div>
      <div className='text-right mt-[22px]'>
        <Button text="推文" outline={false} onClick={handelPost}  />
      </div>
    </div>
  )
}

export default PostNew;