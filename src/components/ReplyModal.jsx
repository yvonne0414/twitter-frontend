import closeIcon from '../assets/imgs/icon/close_o.png';
import replyIcon from '../assets/imgs/icon/reply.png';
import { Avatar, Button } from './index'
import { useContext, useState } from 'react';
import { notifyContext } from '../contexts/NotifyContext';
import { addReplies } from '../apis/tweet';

const ReplyModal = ({postInfo, iconStyle="w-[14px] h-[14px]", time, onReplyAdded = null}) => {
  const [isShow, setIsShow] = useState(false);
  const [value, setValue] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const loginAvatar = JSON.parse(localStorage.getItem("userInfo"))?.avatar;

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

  function toggleModal(){
    setIsShow(!isShow)
  }

  // 通知
  const { showNotification } = useContext(notifyContext);
  async function handleReply(){
    if(!value.trim()){
      setErrorMsg('內容不可空白');
      return
    }
    if(value.length > 140){
      setErrorMsg('字數不可超過 140 字');
      return
    }

    await addReplies(postInfo.id, value).then((res)=>{
      setValue('');
      showNotification('success', '回覆成功');
      toggleModal();
      onReplyAdded?.(res);
    }).catch((errMsg)=>{
      showNotification('wran', errMsg)
    })
    
  }

  return (
    <>
      <div className={`${iconStyle} cursor-pointer`} onClick={toggleModal}>
        <img src={replyIcon} alt="" className="w-full h-full object-contain" />
      </div>
      <div className={`fixed top-0 left-0 h-screen w-screen bg-dark-100 bg-opacity-60 ${!isShow && 'hidden'}`}>
        <div className="bg-dark-0 rounded-2xl absolute top-14 left-1/2 translate-x-[-50%] w-1/2 min-w-[600px]">
          {/* header */}
          <div className="border-b border-borderC p-5">
            <div className="h-[15px] w-[15px] cursor-pointer" onClick={toggleModal}>
              <img src={closeIcon} alt="" className="w-full h-full object-contain" />
            </div>
          </div>
          {/* body */}
          <div className='px-6 py-4'>
            <div className='w-100 flex'>
              <div className='flex flex-col items-center'>
                <Avatar imgUrl={postInfo?.User.avatar} />
                <div className='bg-dark-60 w-[2px] my-4 grow'></div>
              </div>
              <div className='px-2 pb-4'>
                <div className='flex space-x-2 items-center'>
                  <h6 className='content-l-b'>{postInfo?.User.name}</h6>
                  <div className='content-m-r text-secondary'>@{postInfo?.User.account}・{time}</div>
                  {/* <h6 className='content-l-b'>{postInfo?.User.name}</h6> */}
                  {/* <div className='content-m-r text-secondary'>{postInfo?.User.account}・{time}</div> */}
                </div>
                <p className='content-l-r my-2 text-dark-100'>
                  {/* {postInfo?.description} */}
                  {postInfo?.description}
                </p>
                <div className='content-m-r text-secondary'>回覆給 <span className='text-brand'>@{postInfo?.User.account}</span></div>
              </div>
            </div>
            <div className='w-100 flex'>
              <Avatar imgUrl={loginAvatar} />
              <textarea className='grow  heading-h5 px-2 py-3 appearance-none resize-none overflow-hidden focus:outline-none' placeholder='推你的回覆' value={value} onChange={handleValueChange}></textarea>
            </div>
          </div>
          {/* footer */}
          <div className='flex justify-end items-center space-x-5 mt-[22px] p-4'>
            {
              errorMsg && <div className='font-medium text-[15px] text-error'>{errorMsg}</div>
            }
            <Button text={"回覆"} textStyle={"content-m-r px-[15px] py-[10px]"} onClick={handleReply} />
          </div>
        </div>
      </div>
      
    </>
  )
}
export default ReplyModal;