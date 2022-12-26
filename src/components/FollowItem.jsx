import { useEffect, useState } from 'react';
import { Avatar, Button } from './index';
import { addFollow, deleteFollow } from '../apis/followship';
import { useContext } from 'react';
import { notifyContext } from '../contexts/NotifyContext';
import { useNavigate } from 'react-router-dom';

const FollowItem = ({userInfo}) => {
    const navigate = useNavigate();
    // 跟隨
    const [buttonText, setButtonText] = useState('跟隨')
    const [isFollowing, setIsFollowing] = useState(userInfo?.isFollowed)

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
                id: userInfo?.UserInfo.id
            }).then(()=>{
                setIsFollowing(!isFollowing);
            }).catch((errorMsg)=>{
                showNotification('warn', errorMsg)
            });
        } else {
            await deleteFollow(userInfo?.UserInfo.id).then(()=>{
                setIsFollowing(!isFollowing);
            }).catch((errorMsg)=>{
                showNotification('warn', errorMsg)
            });
        }
    }
    // console.log("Item", userInfo);
    return (
        <div className="w-full min-w-[273px] flex justify-between p-4" >
            <div className='cursor-pointer'  onClick={()=>{navigate(`/profile`, {state:{userId: userInfo?.UserInfo.id}})}}>
                <Avatar style="mr-2" imgUrl={userInfo?.UserInfo?.avatar}></Avatar>
            </div>
            <div className='grow'>
                <div className='flex justify-between items-center mb-2'>
                    <div className='content-l-b text-ellipsis overflow-hidden ... max-w-[83px]'>{userInfo?.UserInfo?.name}</div>
                    <Button text={buttonText} textStyle={'content-l-r whitespace-nowrap py-2 px-4'} outline={!isFollowing} onClick={handelFollow}></Button>
                </div>
                <p className='content-l-r text-dark-100'>
                    {userInfo?.UserInfo?.introduction}
                </p>
            </div>
        </div>
    )
};
export default FollowItem;