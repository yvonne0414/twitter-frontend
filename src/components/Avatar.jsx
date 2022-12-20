import userImgDefault from '../assets/imgs/icon/userimg.png';

const Avatar = ({imgUrl=userImgDefault, size="w-[50px] h-[50px]", style=""}) =>{
  return (
    <>
      <div className={`${size} rounded-full overflow-hidden shrink-0 bg-[#C4C4C4] ${(imgUrl === userImgDefault || !imgUrl) && "p-2"} ${style}`}>
        <img src={imgUrl? imgUrl : userImgDefault} alt="" className="w-full h-full object-cover" />
      </div>
    </>
  )
};
export default Avatar;