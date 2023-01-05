# taiwan-shashin

- 組別 : 53
- 組長 : 電機三 B09901077 林宗易
- 組員 : 資管三 B09705059 羅采蓁
- 題目名稱 : Taiwan Shashin Web (台湾写真サイト) (台灣寫真網)
- Deploy service 網址 : https://taiwan-shashin-production.up.railway.app
- Github repo 網址 : https://github.com/linyuting0612/taiwan-shashin
- Demo 影片網址 : https://youtu.be/Bd2l6c9hrfA
- FB 社團貼文網址 : https://www.facebook.com/groups/NTURicWebProg/posts/1828566507491261
- 使用與參考的原始碼 : https://github.com/zinotrust/pinvent-app-styles
- 使用的套件 : 請見 'frontend' 及 'backend' 底下的 package.json。

## 如何在 local host 安裝測試

1. 分別在 'backend' 和 'frontend' 底下執行 'yarn install'。
2. 分別在 'backend' 和 'frontend' 底下建立新的 .env 檔，依照 .env.defaults 填入變數 (JWT_SECRET 可以隨便填一串字)。
3. 在 'final' 底下執行 'yarn server'。
4. 在 'final' 底下執行 'yarn start'。
5. *注意 : frontend必須在localhost:3000。如果frontend在其他port的話請到backend/src/server.js的第28行把 'localhost:3000' 改掉。*

## 組員負責項目

- B09901077 林宗易 : 主畫面的地圖與照片顯示。
- B09705059 羅采蓁 : 帳號登入上傳照片。