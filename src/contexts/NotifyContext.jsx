import React, { useState } from "react";

export const notifyContext = React.createContext();

export function NotifyContextProvider({ children }) {
    const [list, setList] = useState([]);

    /**
     * 
     * @param {string} type 種類
     * @param {string} disc 通知訊息
     */
    function showNotification(type, disc) {
        let id = parseInt(Math.random()*100+1,10)
        setList([...list, {id, type, disc}])
    }

    // 關閉Notify
    const deleteNotify = id => {
        const listItemIndex = list.findIndex(e => e.id === id);
        list.splice(listItemIndex, 1);
        setList([...list]);
    }

    return (
        <notifyContext.Provider
          value={{
            list,
            showNotification,
            deleteNotify
          }}
        >
          {children}
        </notifyContext.Provider>
      );
  }