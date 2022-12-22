const SideBarItem = ({ title, path, onClick, iconName, activeIconName, active, className}) => {
  function handleOnClick(e) {
    onClick(path)
  }
  return (
    <div onClick={handleOnClick} className={`flex w-full items-center justify-center h-[66px] cursor-pointer ${className} md:justify-start`}>
      <img src={require(`../assets/imgs/icon/${active ? activeIconName : iconName}.png`)} alt="" className={` w-[22.2px] h-[26px] object-contain ml-[16.9px] mr-[16.9px]`} />
      <h4 className={`heading-h5 ${active ? 'text-brand' : 'text-dark-90'} md:inline hidden `}>{title}</h4>
    </div>
  );
};
export default SideBarItem;