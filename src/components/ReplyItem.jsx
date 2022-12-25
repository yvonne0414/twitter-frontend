import { useEffect, useState } from 'react';
import { Avatar } from './index';

import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(duration);
dayjs.extend(relativeTime);
dayjs.locale('cn')

const ReplyItem = ({replyInfo, postUser}) => {
  const [time, setTime] = useState('')
  const postUserAccount = JSON.parse(localStorage.getItem('userInfo'))?.account ?? "";

  const date1 = dayjs(replyInfo?.createdAt);
  const now = dayjs();
  const diffWithYear = now.diff(date1, 'year');
  const diffWithDay = now.diff(date1, 'day');
  const diffWithHour = now.diff(date1, 'hour');
  const diffWithMinute = now.diff(date1, 'minute');

//   console.log({
//     'day1': date1,
//     'now': now,
//     "diffWithYear": diffWithYear,
//     "diffWithDay": diffWithDay,
//     "diffWithHour":diffWithHour,
//     "diffWithMinute": diffWithMinute
// });
  
  useEffect(()=>{
    if(diffWithYear){
      setTime(`${diffWithYear}年`)
    } else if(diffWithDay){
      setTime(`${diffWithDay}天`)
    } else if(diffWithHour){
      setTime(`${diffWithHour}小時`)
    } else if(diffWithMinute){
      setTime(`${diffWithMinute}分鐘`)
    }
  },[diffWithYear, diffWithDay, diffWithHour, diffWithMinute])
  


  return (
    <div className='flex py-4 pl-6 pr-[29px] border-b border-borderC'>
      <Avatar imgUrl={replyInfo?.User.avatar} />
      <div className='ml-2 flex flex-col space-y-2'>
        <div className='flex space-x-2 items-center'>
          <h6 className='content-l-b'>{replyInfo?.User.name}</h6>
          <div className='content-m-r text-secondary'>@{replyInfo?.User.account}・{time}</div>
        </div>
        <div className='content-m-r'>
          <span className='text-secondary mr-2'>回覆</span>
          <span className='text-brand'>@{postUserAccount}</span>
        </div>
        <p className='content-l-r'>
          {replyInfo?.comment} 
        </p>
      </div>
    </div>
  );
};
export default ReplyItem;