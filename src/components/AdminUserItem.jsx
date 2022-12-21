import Avatar from './Avatar';
import { Link } from 'react-router-dom';
import EditProfileModal from './EditProfileModal';
import likeIcon from '../assets/imgs/icon/like.png';
import postIcon from '../assets/imgs/icon/post_b.png';

const IconWithNumber = ({ src, number }) => {
  return (
    <div className={`flex ml-[9px] mr-[9px]`}>
      <img src={src} className={`w-6 h-6`} />
      <div className={`ml-2 font-medium content-l-r`}> {number} </div>
    </div>
  );
};

const TextWithNumber = ({ text, number }) => {
  return (
    <div className={`flex ml-1 mr-1`}>
      <div className={`content-m-r text-dark-100`}>{number}個</div>
      <div className={`content-m-r text-secondary`}>{text}</div>
    </div>
  );
};

const AdminUserItem = ({ userInfo, style }) => {
  return (
    <div className={`relative w-[249px] h-[314px] bg-[#F6F7F8] rounded-[10px] ml-4 ${style}`}>
      <img src={userInfo.cover} className={`w-full h-[140px] bg-dark-80 rounded-t-[10px]`} />
      <img src={userInfo.avatar} className={`absolute w-[100px] h-[100px] bg-dark-100 border-2 rounded-full left-[73.99px] top-[64px]`} />
      <div className={`mt-8 w-full text-center content-l-b text-ellipsis overflow-hidden pl-4 pr-4`}>{userInfo.name}</div>
      <div className={`w-full text-center content-m-r text-ellipsis overflow-hidden pl-4 pr-4 text-secondary`}>{`@${userInfo.account}`}</div>
      <div className={`w-full flex justify-center mt-[19.2px]`}>
        <IconWithNumber src={postIcon} number={userInfo.postCount || 0} />
        <IconWithNumber src={likeIcon} number={userInfo.likeCount || 0} />
      </div>
      <div className={`w-full flex justify-center mt-3`}>
        <TextWithNumber text={'跟隨中'} number={userInfo.followingCount || 0} />
        <TextWithNumber text={'跟隨者'} number={userInfo.followerCount || 0} />
      </div>
    </div>
  );
};
export default AdminUserItem;
