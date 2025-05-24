# DRM Video Player Demo

使用 React 和 Shaka Player 實現的 DRM 影片播放器示範。展示了如何在網頁應用程式中實現受保護內容的播放，包括未加密內容和使用 Widevine DRM 保護的內容。

## 功能特點

- 支援 DASH 格式影片播放
- 支援 Widevine DRM 內容播放
- 響應式設計
- 簡潔的使用者介面
- 自動播放支援
- 錯誤處理和日誌記錄

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Shaka Player
- Widevine DRM

## Quick Start

1. Clone 專案：
```bash
git clone [your-repository-url]
cd DrmDemo
```

2. 安裝依賴：
```bash
npm install
```

3. 啟動開發伺服器：
```bash
npm run dev
```


## 建構 DRM 系統步驟

想要建構自己的 DRM 系統，主要步驟：

1. **內容準備**
   - 準備原始媒體內容（視頻、音頻）
   - 使用編碼工具將內容轉換為適合串流的格式（如 DASH）
   - 選擇合適的 DRM 系統（Widevine、PlayReady、FairPlay 等）

2. **加密過程**
   - 生成內容金鑰（Content Key）
   - 使用內容金鑰加密媒體內容
   - 生成金鑰 ID（Key ID）
   - 產生加密後的 DASH 或 HLS 資源

3. **授權伺服器設置**
   - 建立授權伺服器（License Server）
   - 實現授權邏輯和規則
   - 設置金鑰管理系統
   - 配置安全通訊協定（如 HTTPS）

4. **金鑰管理**
   - 建立金鑰管理系統（KMS）
   - 實現金鑰輪換機制
   - 設置金鑰存儲和備份
   - 建立金鑰分發機制

5. **播放器整合**
   - 選擇支援 DRM 的播放器（如 Shaka Player）
   - 配置 DRM 系統參數
   - 實現授權請求邏輯
   - 處理錯誤和異常情況

6. **安全考慮**
   - 實現 HTTPS
   - 設置跨域資源共享（CORS）
   - 實現用戶認證和授權
   - 防止金鑰洩露和未授權訪問

7. **測試和監控**
   - 測試不同設備和瀏覽器的相容性
   - 監控授權請求和播放狀態
   - 實現日誌記錄和分析
   - 設置警報機制

## 注意事項

1. DRM 系統需要瀏覽器支援。確保你的瀏覽器支援 Widevine DRM。
2. 在生產環境中，你需要：
   - 使用自己的 DRM 授權伺服器
   - 實現適當的用戶認證
   - 保護金鑰和授權資訊
   - 監控和記錄系統使用情況

## 開發建議

1. **開發環境設置**
   - 使用測試用的 DRM 授權伺服器
   - 使用未加密的測試內容進行初始開發
   - 實現錯誤處理和日誌記錄

2. **安全性考慮**
   - 不要在客戶端存儲敏感的 DRM 相關資訊
   - 使用安全的通訊協定
   - 實現適當的錯誤處理
   - 考慮離線播放需求

## 參考資源

- [Shaka Player 官方文檔](https://shaka-player-demo.appspot.com/docs/api/index.html)
- [Widevine DRM 文檔](https://www.widevine.com/)
- [DASH-IF 實施指南](https://dashif.org/)

## License

MIT
