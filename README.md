# taiwan-shashin

- 組別 : 53
- 組長 : 電機三 B09901077 林宗易
- 組員 : 資管三 B09705059 羅采蓁
- 題目名稱 : Taiwan Shashin Web（台湾写真サイト）（臺灣寫真網）
- 服務內容 : 這是一個寫真網，可以瀏覽台灣各地的照片，也可以上傳自己拍的照片。看見台灣的美麗與哀愁 !
- 製作心得 : 照片蓁好看。
- Deploy service 網址 : https://taiwan-shashin-production.up.railway.app
- Github repo 網址 : https://github.com/linyuting0612/taiwan-shashin
- Demo 影片網址 : https://youtu.be/Bd2l6c9hrfA
- FB 社團貼文網址 : https://www.facebook.com/groups/NTURicWebProg/posts/1828566507491261
- 使用與參考的原始碼 : https://github.com/zinotrust/pinvent-app-styles
- 使用的套件 : 請見 'frontend' 及 'backend' 底下的 package.json。

## 如何在 local host 安裝測試

1. 分別在 'backend' 和 'frontend' 底下執行 'yarn install'。
2. 分別在 'backend' 和 'frontend' 底下建立新的 .env 檔，依照 .env.defaults 填入變數，如果已經有把值打上去就請不要改掉，需要填的只有 MONGO_URL 和 JWT_SECRET (JWT_SECRET 可以隨便填一串字)。
3. 在 'final' 底下執行 'yarn server'。
4. 在 'final' 底下執行 'yarn start'。
5. **注意 : frontend 必須在 localhost:3000。如果 frontend 在其他 port 的話請到 backend/src/server.js 的第 28 行把 'localhost:3000' 改掉。**
6. **注意 : 用自己的 MONGO_URL 連上 MongoDB 之後是沒有任何圖片的，所以點選縣市的時候會出現 Loading... 的預設圖片。請試著自己上傳圖片。**

## 組員負責項目

- B09901077 林宗易 : 主畫面的地圖與照片顯示及其對應後端。
- B09705059 羅采蓁 : 帳號創建與照片上傳及其對應後端。
