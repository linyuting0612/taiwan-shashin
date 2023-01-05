# taiwan-shashin

- 組別 : 53
- 組長 : 林宗易
- 題目名稱 : Taiwan Shashin (台灣寫真)
- Deploy service 網址 : https://taiwan-shashin-production.up.railway.app
- Github repo 網址 : https://github.com/linyuting0612/taiwan-shashin
- Demo 影片網址 : 待補
- FB 社團貼文網址 : 待補

## 如何在 local host 安裝測試

1. 分別在 'backend' 和 'frontend' 底下執行 'yarn install'。
2. 分別在 'backend' 和 'frontend' 底下建立新的 .env 檔，依照 .env.defaults 填入變數 (JWT_SECRET 可以隨便填一串字)。
3. 在 'final' 底下執行 'yarn server'。
4. 在 'final' 底下執行 'yarn start'。
5. *注意 : frontend必須在localhost:3000*