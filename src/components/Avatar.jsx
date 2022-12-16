import userImgDefault from '../assets/imgs/icon/userimg.png';

const Avatar = ({imgUrl=userImgDefault, size=50, style=""}) =>{
  return (
    <>
      <div className={`w-[${size}px] h-[${size}px] rounded-full overflow-hidden shrink-0 bg-[#C4C4C4] ${(imgUrl === userImgDefault || !imgUrl) && "p-2"} ${style}`}>
        <img src={imgUrl? imgUrl : userImgDefault} alt="" className="w-full h-full object-cover" />
      </div>
    </>
  )
};
export default Avatar;