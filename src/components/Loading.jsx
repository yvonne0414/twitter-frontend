import loadingIcon from "../assets/imgs/loading.png"
const Loading = ()=>{
  return (
    <div className="flex flex-col items-center">
      <div className="animate-[spin_1.5s_linear_infinite] w-10 h-10">
        <img className="w-full h-full object-contain " src={loadingIcon} alt="" />
      </div>
      <div>Loaging...</div>
    </div>
  )
}
export default Loading;