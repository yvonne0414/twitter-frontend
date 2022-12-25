import { useContext, useState } from 'react';
import { notifyContext } from '../contexts/NotifyContext';
import closeIcon from '../assets/imgs/icon/close_o.png';
import { Avatar, Button } from './index';
import { addPost } from '../apis/tweet';

const PostModal = () => {
  const [isShow, setIsShow] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [value, setValue] = useState('');

  function handleValueChange(e) {
    let lineHeight = 15;
    let borderTop = 1;
    let borderBottom = 1;
    let height = parseInt(getComputedStyle(e.target).height.slice(0, -2), 10);
    if (e.target.scrollHeight > height) {
      e.target.style.height = `${e.target.scrollHeight + borderTop + borderBottom}px`;
    } else {
      while (height >= e.target.scrollHeight) {
        e.target.style.height = `${height - lineHeight}px`;
        height -= lineHeight;
      }
      e.target.style.height = `${height + lineHeight}px`;
    }
    setValue(e.target.value);
  }

  function toggleModal() {
    setIsShow(!isShow);
  }

  // 通知
  const { showNotification } = useContext(notifyContext);
  async function handelPost() {
    if (!value.trim()) {
      setErrorMsg('內容不可空白');
      return;
    }
    if (value.length > 140) {
      setErrorMsg('字數不可超過 140 字');
      return;
    }
    await addPost(value)
      .then((e) => {
        showNotification('success', '推文成功');
        setValue('');
        setErrorMsg('');
        toggleModal();
      })
      .catch((errMsg) => {
        showNotification('wran', errMsg);
      });
  }

  return (
    <>
      <div className={`flex justify-center md:hidden mt-[6px]`}>
        <Button onClick={toggleModal} iconName={'post_w'} textStyle={`h-10 w-10 px-[8px] py-[8px] text-center`} />
      </div>
      <Button onClick={toggleModal} text={'推文'} textStyle={`hidden md:block text-xl`} />
      <div className={`fixed z-10 top-0 left-0 h-screen w-screen bg-dark-100 bg-opacity-60 ${!isShow && 'hidden'}`}>
        <div className="bg-dark-0 rounded-2xl absolute top-14 left-1/2 translate-x-[-50%] w-1/2 min-w-[600px]">
          {/* header */}
          <div className="border-b border-borderC p-5">
            <div className="h-[15px] w-[15px] cursor-pointer" onClick={toggleModal}>
              <img src={closeIcon} alt="" className="w-full h-full object-contain" />
            </div>
          </div>
          {/* body */}
          <div className="px-6 py-4">
            <div className="w-100 flex">
              <Avatar />
              <textarea
                className="grow  heading-h5 px-2 py-3 appearance-none resize-none overflow-hidden focus:outline-none min-h-full"
                placeholder="有什麼新鮮事？"
                onChange={handleValueChange}
              ></textarea>
            </div>
          </div>
          {/* footer */}
          <div className="flex justify-end items-center space-x-5 mt-[22px] p-4">
            {errorMsg && <div className="font-medium text-[15px] text-error">{errorMsg}</div>}
            <Button text="推文" outline={false} onClick={handelPost} />
          </div>
        </div>
      </div>
    </>
  );
};
export default PostModal;
