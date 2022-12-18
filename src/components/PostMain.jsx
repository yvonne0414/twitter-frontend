// img
import likeIcon from '../assets/imgs/icon/like.png';
import likeFullIcon from '../assets/imgs/icon/like_o.png';
import replyIcon from '../assets/imgs/icon/reply.png';
// component
import { Avatar } from './index';
// api
import { addLike, addUnlike } from '../apis/tweet';
import { useEffect, useState } from 'react';

import dayjs from 'dayjs';
dayjs.locale('zh-cn')

const IconWraper = ({imgUrl, style="w-[25px] h-[25px]"}) => {
  return (
    <div className={`${style}`}>
      <img src={imgUrl} alt="" className="w-full h-full object-contain" />
    </div>
  )
};

const PostMain = ({postInfo}) => {
    console.log(postInfo);
    const [isLike, setIsLike] = useState(false);
    const [postTime, setPostTime] = useState('')
    
    useEffect(()=>{
      setIsLike(postInfo?.isLiked);
      
      // 時間格式化
      let timeObj = dayjs(postInfo?.createdAt);
      if(Number(timeObj.format("HH"))<=12){
        setPostTime(timeObj.format("[上午] hh:mm[・]YYYY[年]MM[月]DD[日]"));
      } else {
        setPostTime(timeObj.format("[下午] hh:mm[・]YYYY[年]MM[月]DD[日]"));
      }
      // console.log(timeObj);
    },[postInfo?.isLiked, postInfo?.createdAt])
    
    async function handleLike() {
      if (!isLike) {
        try {
            await addLike(postInfo.id);
        } catch (error) {
            console.error(error);
        }
        postInfo.likeCount++
      } else {
        try {
            await addUnlike(postInfo.id);
        } catch (error) {
            console.error(error);
        }
        postInfo.likeCount--
      }
      setIsLike(!isLike)
    }
    return (
        <div className='pb-5 px-4 border-b border-borderC mb-2'>
          <div className='flex space-x-2'>
            <Avatar imgUrl={postInfo?.User.avatar} />
            <div>
              <h6 className='content-l-b'>{postInfo?.User.name}</h6>
              <div className='content-m-r text-secondary'>@{postInfo?.User.account}</div>
            </div>
          </div>
          <p className='text-2xl leading-9 font-normal mb-2'>
            {postInfo?.description} 
          </p>
          <div className='content-m-b text-secondary'>{postTime}</div>
          <div className='py-4 mt-2 border-y border-borderC font-medium text-[19px]'>
            <span className='mr-6 text-secondary '><em className='font-extrabold  text-dark-100'>{postInfo?.replyCount}</em> 回復</span>
            <span className='text-secondary'><em className='font-extrabold text-dark-100'>{postInfo?.likeCount}</em> 喜愛次數</span>
          </div>
          <div className="flex space-x-24 mt-5">
            <div className='flex space-x-2 items-center cursor-pointer'>
              <IconWraper imgUrl={replyIcon} />
            </div>
            <div className='flex space-x-2 items-center cursor-pointer' onClick={handleLike}>
              {
                isLike ?
                <IconWraper imgUrl={likeFullIcon} /> :
                <IconWraper imgUrl={likeIcon} />
              }
            </div>
          </div>
        </div>
    )
};

export default PostMain;