import { PopularItem } from './index';

const PopularCollection = ({title, userInfoList}) => {

    return (
        <div className='bg-dark-20 overflow-hidden rounded-2xl min-w-[273px] w-full h-full'>
            <div className='p-6 border-b border-borderC'>
                <h4 className='heading-h4'>{title}</h4>
            </div>
            <div className='overflow-auto h-full'>
                {
                    userInfoList.map((userInfo)=>{
                        return <PopularItem userInfo={userInfo} key={userInfo.id}/>
                    })
                }
            </div>
        </div>
    )
};
export default PopularCollection;