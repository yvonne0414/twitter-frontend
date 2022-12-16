import { useEffect, useState } from 'react';
import likeIcon from '../assets/imgs/icon/like.png';
import likeFullIcon from '../assets/imgs/icon/like_o.png';
import replyIcon from '../assets/imgs/icon/reply.png';

import { Avatar } from './index';

const IconWraper = ({imgUrl, style="w-[14px] h-[14px]"}) => {
  return (
    <div className={`${style}`}>
      <img src={imgUrl} alt="" className="w-full h-full object-contain" />
    </div>
  )
};

const PostItem = ({postInfo}) => {
  const [isLike, setIsLike] = useState(false)
  
  useEffect(()=>{
    setIsLike(postInfo?.isLike)
  },[postInfo?.isLike])
  
  function handleLike() {
    setIsLike(!isLike)
  }


  return (
    <div className='flex py-4 pl-6 pr-[29px] border-b border-borderC'>
      <Avatar imgUrl={postInfo?.avatar} />
      <div className='ml-2'>
        <div className='flex space-x-2'>
          <h6 className='content-l-b'>{postInfo?.name}</h6>
          <div className='content-m-r text-secondary'>{postInfo?.account}・{postInfo?.time}</div>
        </div>
        <p className='content-l-r mb-2'>
          {postInfo?.disc} 
        </p>
        <div className="flex space-x-9 text-[14px] leading-[14px] font-semibold text-secondary">
          <div className='flex space-x-2 items-center cursor-pointer'>
            <IconWraper imgUrl={replyIcon} />
            <div>{postInfo?.commentNum}</div>
          </div>
          <div className='flex space-x-2 items-center cursor-pointer' onClick={handleLike}>
            {
              isLike ?
              <IconWraper imgUrl={likeFullIcon} /> :
              <IconWraper imgUrl={likeIcon} />
            }
            <div>{postInfo?.likeNum}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostItem;