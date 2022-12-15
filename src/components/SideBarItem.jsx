
const SideBarItem = ({title, onClick, iconName}) => {
  return (
    <div onClick={onClick} className="flex  items-center h-[66px]	">
      <img src={require(`../assets/imgs/icon/${iconName}.png`)} alt="" className=" w-[22.2px] h-[26px] mr-[16.9px] object-contain" />
      <h4 className="heading-h5  ">{title}</h4>
    </div>
  );
};
export default SideBarItem;
