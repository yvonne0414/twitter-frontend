import { useState } from 'react';
import closeIcon from '../assets/imgs/icon/close_o.png';
import { Avatar, Button } from './index'

const PostModal = () => {
  const [isShow, setIsShow] = useState(false)
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
  }

  function toggleModal(){
    setIsShow(!isShow)
  }

  return (
    <>
      <Button onClick={toggleModal} text={"推文"}  /> 
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
              <Avatar />
              <textarea className='grow  heading-h5 px-2 py-3 appearance-none resize-none overflow-hidden focus:outline-none' placeholder='有什麼新鮮事？' onChange={handleValueChange}></textarea>
            </div>
          </div>
          {/* footer */}
          <div className='p-4 text-end'>
            <Button text={"推文"} textStyle={"content-m-r px-[15px] py-[10px]"} />
          </div>
        </div>
      </div>
      
    </>
  )
}
export default PostModal;