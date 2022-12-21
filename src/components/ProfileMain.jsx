import Avatar from "./Avatar";
import { Link } from 'react-router-dom';
import { Button, EditProfileModal } from './index';
import mailIcon from '../assets/imgs/icon/email_o.png';
import bellIcon from '../assets/imgs/icon/bell_o.png';
import bellIconWhite from '../assets/imgs/icon/bell_w.png';


const IconWraper = ({ imgUrl, onClick, style = 'w-6 h-6' }) => {
    return (
      <div className={`${style}`} onClick={onClick}>
        <img src={imgUrl} alt="" className="w-full h-full object-contain" />
      </div>
    );
  };

const ProfileMain = ({userInfo, isUserSelf, onFollow, onSave }) => {
    const InputDataList = [
        {
            title: '名稱',
            placeholder: '請輸入名稱',
            id: 1,
            disabled: false,
            invalid: false,
            errorMessage: '...',
            textLimit: '50',
            value: userInfo.name,
            isTextArea: false,
            isRequired: true
        },
        {
            title: '自我介紹',
            placeholder: '請輸入自我介紹',
            id: 2,
            disabled: false,
            invalid: false,
            errorMessage: '...',
            textLimit: '160',
            value: userInfo.introduction,
            isTextArea: true,
            isRequired: false
        }
    ]
    // console.log(userInfo);
    function handleFollow(){
        onFollow(userInfo.id)
    }



    return (
        <>
            <div className={`relative h-80`}>
                {
                    userInfo.cover ?
                    <img src={userInfo?.cover} className="w-full h-full object-cover" alt="user_bg" /> :
                    <div className="w-full h-full bg-dark-60"></div>
                }
                <div className="absolute bottom-0 left-4 translate-y-1/2 border-4 border-dark-0 rounded-full overflow-hidden">
                    <Avatar imgUrl={userInfo?.avatar} size="w-[140px] h-[140px]" />
                </div>
            </div>
            <div className="w-full h-[70px] px-4 mb-2 flex justify-end items-center">
                {
                    isUserSelf ?
                    <EditProfileModal userInfo={userInfo} inputDataList={InputDataList} onSave={(paylod) => {onSave(paylod)}}/> :
                    <div className="flex space-x-4 items-center">
                        <div className="rounded-full border-brand border overflow-hidden p-2">
                            <a href={`mailto:${userInfo.email}`} className="block w-full h-full">
                                <IconWraper imgUrl={mailIcon} />
                            </a>
                        </div>
                        <div className={`transition rounded-full border-brand border overflow-hidden p-2 ${userInfo.isFollowed && "bg-brand"}`}>
                            {
                                userInfo.isFollowed ? 
                                <IconWraper imgUrl={bellIconWhite} /> :
                                <IconWraper imgUrl={bellIcon} />
                            }
                        </div>
                        <Button text={userInfo.isFollowed ? "正在跟隨" : "跟隨"} onClick={handleFollow} outline={!userInfo.isFollowed} />
                    </div>
                }
            </div>
            <div className="px-4 content-m-r">
                <h5 className="heading-h5 text-dark-100">{userInfo?.name}</h5>
                <div className="text-secondary mb-[6px]">@{userInfo?.account}</div>
                <p className="text-dark-100 mb-2">{userInfo?.introduction}</p>
                <div className="text-secondary">
                    <span className="mr-5 cursor-pointer"><Link className="text-dark-100" to={"/profile/follow"} state={{tabid:'follow-tab2', userId:userInfo?.id}}>{userInfo?.followingCount}個</Link>跟隨中</span>
                    <span className="cursor-pointer"><Link className="text-dark-100" to={"/profile/follow"} state={{tabid:'follow-tab1', userId:userInfo.id}}>{userInfo?.followerCount}位</Link>跟隨者</span>
                </div>
            </div>
        </>
    )
}
export default ProfileMain;