import closeIcon from '../assets/imgs/icon/close_o.png';
import { Avatar, Button, Input } from './index';
import { useState } from 'react';

const EditProfileModal = (userInfo)=>{
    const [isShow, setIsShow] = useState(false)
    function toggleModal(){
        setIsShow(!isShow)
    }

    const InputDatas = [
        {
            title: '名稱',
            placeholder: '請輸入名稱',
            id: 1,
            disabled: false,
            invalid: false,
            errorMessage: '...',
            textLimit: '50',
            value: 'John Doe',
            isTextArea: false
        },
        {
            title: '自我介紹',
            placeholder: '請輸入名稱',
            id: 2,
            disabled: false,
            invalid: false,
            errorMessage: '...',
            textLimit: '160',
            value: 'John Doe',
            isTextArea: true
        }
    ]

    return (
        <>
        <Button onClick={toggleModal} text={"編輯個人資料"} outline={true}  /> 
        <div className={`fixed top-0 left-0 h-screen w-screen bg-dark-100 bg-opacity-60 ${!isShow && 'hidden'}`}>
            <div className="bg-dark-0 rounded-2xl absolute top-14 left-1/2 translate-x-[-50%] w-1/2 min-w-[600px]">
                {/* header */}
                <div className="border-b border-borderC p-5 relative">
                    <div className='flex items-center space-x-9'>
                        <div className="h-[15px] w-[15px] cursor-pointer" onClick={toggleModal}>
                            <img src={closeIcon} alt="" className="w-full h-full object-contain" />
                        </div>
                        <h5 className='heading-h5'>編輯個人資料</h5>
                    </div>
                    <div className='absolute top-1/2 right-4 -translate-y-1/2'>
                        <Button text={"儲存"} textStyle={"content-m-r px-[15px] py-[10px]"} />
                    </div>
                </div>
                {/* body */}
                <div className='w-100'>
                    <div className={`relative h-40 mb-[80px] bg-slate-500`}>
                        <img src={userInfo?.cover} className="w-full h-full object-cover" alt="user_bg" />
                        <div className="absolute bottom-0 left-4 translate-y-1/2 border-4 border-dark-0 rounded-full overflow-hidden">
                            <Avatar imgUrl={userInfo.avatar} size="w-[140px] h-[140px]" />
                        </div>
                    </div>
                    <div className={`w-full pb-8 px-4`}>
                        {
                            InputDatas.map((data)=>{
                                return <Input requiredData={data} isTextArea={data.isTextArea} onChange={(e)=>{console.log(e)}} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
};
export default EditProfileModal;