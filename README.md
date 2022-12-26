## Simple Twitter專案＿Alphitter  
歡迎來到Alphitter！  
在這個社交媒體網站，你可以分享自己的即時消息或心情想法，也可以認識其他的使用者並且進行互動！  
與其他人的生活連結就是這麼簡單:)  

GitHubPage 網址：https://yvonne0414.github.io/twitter-frontend

## 專案功能介紹：（本專案為電腦版頁面）
登入頁可以切換至『註冊頁』及『後台登入頁』
[ 使用者 ]
  * 使用者註冊成功後將直接登入
  * 所有登入成功時，都會有對應使用者名稱的歡迎通知
  * 帳號資料：帳號與Email皆不可與其他使用者重複，無論是註冊或是後續更改資料都有規範，若有重複情形，皆有通知顯示
  * 左側導覽列有3個頁籤：首頁、個人資料、設定，推文按鈕及登出鍵
  * 首頁
    * 可以瀏覽推文，按照推文時序由最新到最舊陳列
    * 可以新增推文，並會立即更新於推文列
    * 可以回覆其他人的推文
    * 可以在其他人的推文按喜歡，也可以取消
    * 可以追蹤其他使用者
  *  個人資料頁面
    * 可以進行個人資料的編輯
    * 可以瀏覽推文、回覆、喜愛推文等紀錄
    * 點擊其他使用者的帳號時，也可以瀏覽他人的資料頁
  *  設定頁面
    * 可以進行帳號、姓名、信箱、密碼改動
  * 推文按鈕
    * 可以進行推文

  * 按下左下方登出鍵，即可回到前台登入頁面，並且無法隨意更動網址進入

[ 管理者 ]
* 管理者身份帳號為預設無法自行註冊
* 使用管理員身分登入帳號，密碼具備隱碼設計，如果帳號密碼有誤或是遺漏，皆有通知顯示
* 登入時會有歡迎通知
* 左側導覽列有2個頁籤：推文清單、使用者列表，及登出鍵
* 於推文清單頁面
  * 管理者可以瀏覽所有使用者的推文的快覽50字，並且按照推文時序由最新到最舊陳列
  * 按任一推文右側Ｘ按鈕即可刪除該推文，會有成功刪除對應貼文編號的通知
* 於使用者列表
  * 管理者可以瀏覽所有註冊的一般使用者的快覽資訊，包含：封面照片、頭像、名稱、帳號、推文數量、喜愛數量、追蹤者數量及被追蹤者數量
  * 使用者列表的使用者，皆依照推文數量由多至少進行排序。

* 按下左下方登出鍵，即可回到後台登入頁面，並可以藉由捷徑再至前台登入

## 種子資料設計  
**一般使用者 5位** 

account: user1   
email: user1@example.com  
password: 12345678  

account: user2  
email: user2@example.com  
password: 12345678  

account: user3  
email: user3@example.com  
password: 12345678  

account: user4  
email: user4@example.com  
password: 12345678  

account: user5  
email: user5@example.com  
password: 12345678  

**Admin後台管理者**
account: root  
email: root@example.com  
password: 12345678  


## 環境建置：
 * axios : 1.2.1
 * buffer: 6.0.3
 * dayjs: 1.11.7
 * gh-pages: 4.0.0
 * react: 18.2.0
 * react-dom : 18.2.0
 * react-router-dom: 6.4.5
 * react-scripts: 5.0.1
 * uuid: 9.0.0
 * web-vitals: 2.1.4

## 專案安裝流程：

### `開啟終端機(Terminal)並執行:`
git clone https://github.com/yvonne0414/twitter-frontend.git

### `進入專案資料夾，進行安裝` 
* `cd twitter-frontend`
  * 進入專案資料夾
* `nvm i 16.15.0`
  * 安裝 node v16.15.0
* `nvm use 16.15.0`
  * 使用 node v16.15.0
* `npm i`
  * 前述皆安裝完成後，再安裝啟動本專案，將安裝此專案資料夾所有資料
* `VScode` 
  * 需下載 "Prettier ESLint"並選其作為格式化工具
* `npm start`
  * 可啟動本專案，並於本地瀏覽器[http://localhost:3000]使用本專案
* `control + C`
  * 即可退出專案


## 專案開發人員
前端：小庭Shiori ＆ Yvonne
後端：Verna & Elena