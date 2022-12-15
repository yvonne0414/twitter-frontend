// icon
import notiS from '../assets/imgs/icon/noti_s.png';
import notiE from '../assets/imgs/icon/noti_e.png';
import notiW from '../assets/imgs/icon/noti_w.png';
import notiI from '../assets/imgs/icon/noti_i.png';

import { useState } from 'react';

const Notification = ({type, text}) => {
  const [notificationFlag, setNotificationFlag] = useState(false);
  
  function showNotification() {
    setNotificationFlag(true)
    let showNotificationTimeout = setTimeout(closeNotification,8000)
  }
  function closeNotification() {
    setNotificationFlag(false)
  }


  let haveIcon = true; // 是否有icon
  let cBorederColor = ""; // icon外圈顏色
  let cIcon; // icon圖案
  switch (type){
    case "success":
      cBorederColor = "secondary-g";
      cIcon = notiS;
      break;
    case "error":
      cBorederColor = "error";
      cIcon = notiE;
      break;
    case "warn":
      cBorederColor = "secondary-o";
      cIcon = notiW;
      break;
    case "info":
      cBorederColor = "secondary-b";
      cIcon = notiI;
      break;
    default:
      haveIcon = false;
  }
  return (
    <div className="rounded-[8px] bg-dark-0 shadow-[0px_4px_4px_rgba(51,51,51,0.04),0px_4px_16px_rgba(51,51,51,0.08)] px-6 py-5 w-[394px] h-[96px] flex items-center justify-between absolute right-1 top-1 transition">
      <div className="font-bold text-xl leading-7">{text}</div>
      {
        haveIcon &&
        (<div className={`rounded-full border-2 border-${cBorederColor} w-14 h-14 p-5`}>
          <img src={cIcon} alt="" className='w-full h-full object-contain' />
        </div>)
      }
      <div className='hidden border-secondary-g border-secondary-o border-secondary-b'></div>
    </div>
  );
};

export default Notification;
