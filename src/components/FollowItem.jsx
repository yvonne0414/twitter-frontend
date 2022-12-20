import { useEffect, useState } from 'react';
import { Avatar, Button } from './index';
import { addFollow, deleteFollow } from '../apis/followship';
import { useContext } from 'react';
import { notifyContext } from '../contexts/NotifyContext';

const FollowItem = ({userInfo}) => {
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
                id: userInfo.id
            }).then(()=>{
                setIsFollowing(!isFollowing);
            }).catch((errorMsg)=>{
                showNotification('warn', errorMsg)
            });
        } else {
            await deleteFollow(userInfo.id).then(()=>{
                setIsFollowing(!isFollowing);
            }).catch((errorMsg)=>{
                showNotification('warn', errorMsg)
            });
        }
    }
    // console.log("Item", userInfo);
    return (
        <div className="w-full min-w-[273px] flex justify-between p-4" >
            <Avatar style="mr-2" imgUrl={userInfo?.avatar}></Avatar>
            <div className='grow'>
                <div className='flex justify-between items-center mb-2'>
                    <div className='content-l-b text-ellipsis overflow-hidden ... max-w-[83px]'>{userInfo?.name}</div>
                    <Button text={buttonText} textStyle={'content-l-r whitespace-nowrap py-2 px-4'} outline={!isFollowing} onClick={handelFollow}></Button>
                </div>
                <p className='content-l-r text-dark-100'>
                    {userInfo?.introduction}
                </p>
            </div>
        </div>
    )
};
export default FollowItem;