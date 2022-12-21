import { useEffect, useState } from 'react';
import { Avatar } from './index';
import { useNavigate } from 'react-router-dom';
import deleteIcon from '../assets/imgs/icon/delete.png';

import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import { deletePost } from '../apis/admin';
dayjs.extend(duration);
dayjs.extend(relativeTime);
dayjs.locale('cn');

const IconWraper = ({ imgUrl, onClick, style = 'w-[14px] h-[14px]' }) => {
  return (
    <div className={`${style}`} onClick={onClick}>
      <img src={imgUrl} alt="" className="w-full h-full object-contain" />
    </div>
  );
};

const AdminPostItem = ({ postInfo, onDelete }) => {
  const [time, setTime] = useState('');
  const navigate = useNavigate();


  const date1 = dayjs('2022-12-17T09:00:51.000Z');
  // const date1 = dayjs(postInfo?.createdAt);
  const now = dayjs();
  const diffWithYear = now.diff(date1, 'year');
  const diffWithDay = now.diff(date1, 'day');
  const diffWithHour = now.diff(date1, 'hour');
  const diffWithMinute = now.diff(date1, 'minute');

  useEffect(() => {
    if (diffWithYear) {
      setTime(`${diffWithYear}年`);
    } else if (diffWithDay) {
      setTime(`${diffWithDay}天`);
    } else if (diffWithHour) {
      setTime(`${diffWithHour}小時`);
    } else if (diffWithMinute) {
      setTime(`${diffWithMinute}分鐘`);
    }
  }, [diffWithYear, diffWithDay, diffWithHour, diffWithMinute]);

  function handleDeleteButtonClicked() {
    console.log("coffee")
    onDelete(postInfo.id)
  }

  return (
    <div className="flex py-4 pl-6 pr-[29px] border-b border-borderC relative">
      <Avatar imgUrl={postInfo?.User.avatar} />
      <div className="ml-2">
        <div className="flex space-x-2 items-center">
          <h6 className="content-l-b">{postInfo?.User.name}</h6>
          <div className="content-m-r text-secondary">
            <span
              className="cursor-pointer"
              onClick={() => {
                navigate(`/profile`, { state: { userId: postInfo?.User.id } });
              }}
            >
              @{postInfo?.User.account}
            </span>
            ・{time}
          </div>
        </div>
        <p
          className="content-l-r mb-2 cursor-pointer min-h-[52px]"
          onClick={() => {
            navigate(`/post/${postInfo?.id}`);
          }}
        >
          {postInfo?.description}
        </p>
      </div>
      <IconWraper imgUrl={deleteIcon} style="w-[15px] h-[15px] absolute top-[21.5px] right-[4.63px]" onClick={handleDeleteButtonClicked}/>
    </div>
  );
};
export default AdminPostItem;
