import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const notifyContext = React.createContext();

export function NotifyContextProvider({ children }) {
    const [list, setList] = useState([]);

    /**
     * 開啟
     * @param {string} type 種類
     * @param {string} disc 通知訊息
     */
    function showNotification(type, disc) {
        let id = uuidv4();
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