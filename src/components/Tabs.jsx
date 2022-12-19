import { useEffect, useState } from "react";


const Tabs = ({tabList, children}) => {
    const [local, setLocal] = useState("");
    
    
    useEffect(()=>{
        let isActived = false;
        tabList.forEach((tabInfo)=>{
            if(tabInfo.isActive){
                setLocal(tabInfo.tabid)
                isActived = true
            }
        });
        if(!isActived){
            setLocal(tabList[0].tabid)
        }
        
    },[tabList]);

    function handleTabChange(e){
        setLocal(e.target.dataset.tabid)
        tabList.map((tabItem)=>{
            if(tabItem.tabid === e.target.dataset.tabid){
                return tabItem.isActive = true;
            }
            return tabItem.isActive = false;
        })
    }

    return (
        <div className="w-100">
            <ul className="w-100 flex h-[52px] border-b border-borderC text-[15px] font-bold text-[#657786]">
                {
                    tabList.map((tabItem)=>{
                        return (
                            <li className={`w-32 text-center leading-[52px] cursor-pointer  hover:text-brand hover:border-brand hover:border-b-2 ${tabItem.isActive && 'text-brand border-brand border-b-2'}`} data-tabid={tabItem.tabid} onClick={handleTabChange} key={tabItem.tabid} >{tabItem.title}</li>
                        )
                    })
                }
            </ul>
            <div className="w-100">
                {children.map((child)=>{
                    return (
                        <div  className={`${local !== child.props.tabid && 'hidden'}`} key={`'tabpanel-'${child.props.tabid}`}>
                            {child}
                        </div>
                    )
                })}
            </div>
        </div>
    )
};
export default Tabs;