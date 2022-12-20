import Avatar from "./Avatar";
import { Link } from 'react-router-dom';
import { EditProfileModal } from './index'

const ProfileMain = ({userInfo}) => {

    return (
        <>
            <div className={`relative h-80`}>
                <img src={userInfo?.cover} className="w-full h-full object-cover" alt="user_bg" />
                <div className="absolute bottom-0 left-4 translate-y-1/2 border-4 border-dark-0 rounded-full overflow-hidden">
                    <Avatar imgUrl={userInfo.avatar} size="w-[140px] h-[140px]" />
                </div>
            </div>
            <div className="w-full h-[70px] px-4 mb-2 flex justify-end items-center">
                <div>
                    <EditProfileModal userInfo={userInfo} />
                </div>
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