import closeIconO from '../assets/imgs/icon/close_o.png';
import closeIconW from '../assets/imgs/icon/close.png';
import uploadIcon from '../assets/imgs/icon/photo.png';
import { Avatar, Button, Input } from './index';
import { useState } from 'react';


const ImageUpdate = ({type, onUpload}) => {
    const getBase64 = (file) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader?.readAsDataURL(file);

        reader.onload = () => resolve(reader.result);

        reader.onerror = (error) => reject(error);
    });

    async function onImageUpload(e) {
        if (!e.target.files[0]) return;
        let imgUrl = await getBase64(e?.target?.files[0])
        onUpload({file: e.target.files[0], url: imgUrl, type: type});
        e.target.value = "";
    }

    return (
        <label className='relative'>
            <input type="file" accept="image/*" onChange={onImageUpload} className="opacity-0 absolute z-[-1]" />
            <div className='w-5 h-5'>
                <img src={uploadIcon} className="w-full h-full object-cover" alt="upload" />
            </div>
        </label>
    );
};


const EditProfileModal = ({userInfo, inputDataList, onSave})=>{
    const [isShow, setIsShow] = useState(false);
    const [inputsData, setInputsData] = useState(inputDataList);
    const [isSave, setIsSave] = useState(false);
    const [coverImg, setCoverImg] = useState(userInfo.cover);
    const [coverFile, setCoverFile] = useState(null);
    const [avatarImg, setAvatarImg] = useState(userInfo.avatar)
    const [avatarFile, setAvatarFile] = useState(null)
    
    function toggleModal(){
        setIsShow(!isShow);
        if(!isSave){
            setInputsData(inputDataList);
            setCoverImg(userInfo.cover);
            setAvatarImg(userInfo.avatar);
        }
        setIsSave(false);
    }

    function handleSave(){
        // 必填驗證
        const cloneData = JSON.parse(JSON.stringify(inputsData));
        let isError = false;
        for (const element of cloneData) {
            element.invalid = false;
            if (element.isRequired && (element.value.trim() === '')){
                element.invalid = true;
                element.errorMessage = '此欄位必填！';
                isError = true;
            }
            if (element.textLimit && element.value && element.value.length > element.textLimit) {
                element.invalid = true;
                element.errorMessage = '字數超出限制';
                isError = true;
            }
            setInputsData(cloneData);
        }
        
        let formData = new FormData();
        formData.append('name', inputsData[0].value);
        formData.append('introduction', inputsData[1].value);

        console.log("coverFile", Boolean(coverFile));
        console.log("avatarFile", Boolean(avatarFile));

        if(coverFile || (coverImg === "")){
            formData.append('cover', coverFile);
        }
        if(avatarFile){
            formData.append('avatar', avatarFile);
        }

        if (!isError){
            onSave({
                formData: formData,
                coverImg: (coverFile || (coverImg === "")) ? coverImg : null,
                avatarImg: avatarFile ? avatarImg : null
            })
            setIsSave(true);
        }
    }

    function handleInputChage({ id, value }){
        const cloneData = JSON.parse(JSON.stringify(inputsData));
        const findData = cloneData.find(element => element.id === id);
        findData.value = value;
        setInputsData(cloneData);
    }
    
    function handleImageUpdate({file, url, type}) {
        if(type === "cover"){
            setCoverFile(file);
            setCoverImg(url);
            return
        }
        if(type === "avatar"){
            setAvatarFile(file);
            setAvatarImg(url);
            return
        }
    }


    function handleClear(e) {
        e.preventDefault();
        setCoverImg("");
        setCoverFile(null);
    }


    return (
        <>
        <Button onClick={toggleModal} text={"編輯個人資料"} outline={true}  /> 
        <div className={`fixed top-0 left-0 h-screen w-screen bg-dark-100 bg-opacity-60 ${!isShow && 'hidden'}`}>
            <div className="bg-dark-0 rounded-2xl absolute top-14 left-1/2 translate-x-[-50%] w-1/2 min-w-[600px]">
                {/* header */}
                <div className="border-b border-borderC p-5 relative">
                    <div className='flex items-center space-x-9'>
                        <div className="h-[15px] w-[15px] cursor-pointer" onClick={toggleModal}>
                            <img src={closeIconO} alt="" className="w-full h-full object-contain" />
                        </div>
                        <h5 className='heading-h5'>編輯個人資料</h5>
                    </div>
                    <div className='absolute top-1/2 right-4 -translate-y-1/2'>
                        <Button text={"儲存"} textStyle={"content-m-r px-[15px] py-[10px]"} onClick={handleSave} />
                    </div>
                </div>
                {/* body */}
                <div className='w-100'>
                    <div className={`relative h-40 mb-[80px] bg-slate-500`}>
                        {
                            coverImg?
                            <img src={coverImg} className="w-full h-full object-cover brightness-50" alt="user_bg" /> :
                            <div className="w-full h-full bg-dark-60"></div>
                        }
                        <div className="absolute top-0 let-0 w-full h-full flex justify-center items-center space-x-10">
                            <ImageUpdate type={"cover"} onUpload={handleImageUpdate} />
                            <div className='w-5 h-5' onClick={handleClear}>
                                <img src={closeIconW} className="w-full h-full object-cover" alt="remove" />
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-4 translate-y-1/2 border-4 border-dark-0 rounded-full overflow-hidden">
                            <Avatar imgUrl={avatarImg} size="w-[140px] h-[140px] brightness-50" />
                            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                <ImageUpdate type={"avatar"} onUpload={handleImageUpdate} />
                            </div>
                        </div>
                    </div>
                    <div className={`w-full pb-8 px-4`}>
                        {
                            inputsData.map((data)=>{
                                return <Input requiredData={data} isTextArea={data.isTextArea} onChange={(value)=>{handleInputChage({id: data.id, value:value})}} key={data.id} />
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