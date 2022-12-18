import { useEffect, useState } from 'react';
import { Avatar, Button } from './index';
import { addFollow, deleteFollow } from '../apis/followship';

const PopularItem = ({userInfo}) => {
    const [buttonText, setButtonText] = useState('跟隨')
    const [isFollowing, setIsFolloeing] = useState(userInfo?.isFollowed)
    
    useEffect(()=>{
        if(isFollowing){
            setButtonText('正在跟隨')
            return
        }
        setButtonText('跟隨')
    }, [isFollowing])

    async function handelFollow (){
        if(!isFollowing){
            try {
                // console.log('跟隨', userInfo.id);

                await addFollow({
                    id: userInfo.id
                });
            } catch (error) {
                console.error(error);
            }
        } else {
            try {
                // console.log('不再跟隨', userInfo.id);
                await deleteFollow(userInfo.id);
            } catch (error) {
                console.error(error);
            }
        }
        setIsFolloeing(!isFollowing);
    }

    return (
        <div className="w-100 h-20 min-w-[273px] flex items-center justify-between p-4" >
            <Avatar style="mr-2" imgUrl={userInfo?.avatar}></Avatar>
            <div className='grow' >
                <div className='content-l-b text-ellipsis overflow-hidden ... max-w-[83px]'>{userInfo?.name}</div>
                <div className='content-m-r text-dark-70 text-ellipsis overflow-hidden ... max-w-[83px]'>@{userInfo?.account}</div>
            </div>
            <Button text={buttonText} textStyle={'content-l-r whitespace-nowrap py-2 px-4'} outline={!isFollowing} onClick={handelFollow}></Button>
        </div>
    )
};
export default PopularItem;