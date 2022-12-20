import { useEffect, useState } from 'react';
import likeIcon from '../assets/imgs/icon/like.png';
import likeFullIcon from '../assets/imgs/icon/like_o.png';
import { Avatar, ReplyModal } from './index';
import { useNavigate } from 'react-router-dom';
import { addLike, addUnlike } from '../apis/tweet';

import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(duration);
dayjs.extend(relativeTime);
dayjs.locale('cn');

const IconWraper = ({ imgUrl, style = 'w-[14px] h-[14px]' }) => {
  return (
    <div className={`${style}`}>
      <img src={imgUrl} alt="" className="w-full h-full object-contain" />
    </div>
  );
};

const AdminPostItem = ({ postInfo }) => {
  const [isLike, setIsLike] = useState(false);
  const [time, setTime] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setIsLike(postInfo?.isLiked);
  }, [postInfo?.isLiked]);

  async function handleLike() {
    if (!isLike) {
      try {
        await addLike(postInfo.id);
      } catch (error) {
        console.error(error);
      }
      postInfo.likeCount++;
    } else {
      try {
        await addUnlike(postInfo.id);
      } catch (error) {
        console.error(error);
      }
      postInfo.likeCount--;
    }
    setIsLike(!isLike);
  }

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

  return (
    <div className="flex py-4 pl-6 pr-[29px] border-b border-borderC">
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
          className="content-l-r mb-2 cursor-pointer min-h-[78px]"
          onClick={() => {
            navigate(`/post/${postInfo?.id}`);
          }}
        >
          {postInfo?.description}
        </p>
        <div className="flex space-x-9 text-[14px] leading-[14px] font-semibold text-secondary">
          <div className="flex space-x-2 items-center cursor-pointer">
            <ReplyModal />
            <div>{postInfo?.replyCount}</div>
          </div>
          <div className="flex space-x-2 items-center cursor-pointer" onClick={handleLike}>
            {isLike ? <IconWraper imgUrl={likeFullIcon} /> : <IconWraper imgUrl={likeIcon} />}
            <div>{postInfo?.likeCount}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminPostItem;
