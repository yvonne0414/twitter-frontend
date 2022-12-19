import { FollowItem } from "./index";


const FollowCollection = ({followList}) => {
    return (
        <>
            {
                followList.length ?
                followList.map((userInfo)=>{
                    return (
                        <FollowItem userInfo={userInfo?.UserInfo} key={userInfo?.UserInfo.id}></FollowItem>
                    )
                }) :
                <div className="w-full heading-h3 text-center mt-5 text-dark-70">還空空的～</div>
            }
        </>
    )
};

export default FollowCollection;