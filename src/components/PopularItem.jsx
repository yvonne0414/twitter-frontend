import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button } from './index';
import { addFollow, deleteFollow } from '../apis/followship';
import { useContext } from 'react';
import { notifyContext } from '../contexts/NotifyContext';

const PopularItem = ({userInfo, onFollowStateChanged = null}) => {
    const [buttonText, setButtonText] = useState('跟隨')
    const [isFollowing, setIsFollowing] = useState(userInfo?.isFollowed)

    const navigate = useNavigate();

    // 通知
    const { showNotification } = useContext(notifyContext);
    
    useEffect(()=>{
        if(isFollowing){
            setButtonText('正在跟隨')
            return
        }
        setButtonText('跟隨')
    }, [isFollowing])

    async function handelFollow (){
        if(!isFollowing){
            await addFollow({
                id: userInfo.id
            }).then(()=>{
                setIsFollowing(!isFollowing);
                onFollowStateChanged?.({ targetUserId: userInfo.id, isFollowing: !isFollowing });
            }).catch((errorMsg)=>{
                showNotification('warn', errorMsg)
            });
        } else {
            await deleteFollow(userInfo.id).then(()=>{
                setIsFollowing(!isFollowing);
                onFollowStateChanged?.({ targetUserId: userInfo.id, isFollowing: !isFollowing });
            }).catch((errorMsg)=>{
                showNotification('warn', errorMsg)
            });
        }
    }

    return (
        <div className="w-100 h-20 min-w-[273px] flex items-center justify-between p-4" >
            <div className='cursor-pointer' onClick={()=>{navigate(`/profile`, {state:{userId: userInfo?.id}})}}>
                <Avatar style="mr-2" imgUrl={userInfo?.avatar}></Avatar>
            </div>
            <div className='grow' >
                <div className='content-l-b text-ellipsis overflow-hidden ... max-w-[83px]'>{userInfo?.name}</div>
                <div className='content-m-r text-dark-70 text-ellipsis overflow-hidden ... max-w-[83px] cursor-pointer' onClick={()=>{navigate(`/profile`, {state:{userId: userInfo?.id}})}}>@{userInfo?.account}</div>
            </div>
            <Button text={buttonText} textStyle={'content-l-r whitespace-nowrap py-2 px-4'} outline={!isFollowing} onClick={handelFollow}></Button>
        </div>
    )
};
export default PopularItem;