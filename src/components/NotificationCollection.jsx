import Notification from './Notification';

import { useState, useEffect, useContext, Fragment } from 'react';
import { notifyContext } from '../contexts/NotifyContext';

/** 
 * @param type 種類
 * @param text 通知內容
 */
const NotificationCollection = () => {
  const {list, deleteNotify} = useContext(notifyContext)
  const [notifyList, setNotifyList] = useState(list);

  useEffect(() => {
    setNotifyList([...list]);
  }, [list]);

  // 自動關閉
  useEffect(() => {
    const interval = setInterval(() => {
        if (notifyList.length) {
            deleteNotify(notifyList[0].id);
        }
    }, 2500);
    
    return () => {
        clearInterval(interval);
    }
  }, [notifyList, deleteNotify]);


  
  
  return (
    <div className={`w-[410px] overflow-x-hidden fixed top-1 right-1 py-2 ${!notifyList.length && 'hidden'} flex-col space-y-3`}>
      {
        notifyList.map((item)=>(
          <Fragment key={item.id}>
            <Notification type={item.type} text={item.disc} />
          </Fragment>
        ))
      }
    </div>
  );
};

export default NotificationCollection;