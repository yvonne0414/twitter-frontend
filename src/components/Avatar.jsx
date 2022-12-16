import userImgDefault from '../assets/imgs/icon/userimg.png'

const Avatar = ({imgUrl=userImgDefault, size=50}) =>{
  return (
    <>
      <div className={`w-[${size}px] h-[${size}px] rounded-full overflow-hidden bg-[#C4C4C4] ${imgUrl === userImgDefault && "p-2"}`}>
        <img src={imgUrl} alt="" className="w-full h-full object-cover" />
      </div>
    </>
  )
};
export default Avatar;