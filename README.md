# DRM Crypto Video Demo

這是一個展示不同 DRM（數位版權管理）方案的示範專案。本專案使用 React、TypeScript 和 Shaka Player 實現了三種不同層級的影片保護機制。

## 功能特點

- 支援三種播放模式：
  - 未加密影片播放
  - Clear Key 加密播放（基礎加密方案）
  - Widevine DRM 播放（商業級 DRM 解決方案）
- 使用 Shaka Player 實現跨平台支援
- 現代化的使用者介面（使用 Tailwind CSS）
- TypeScript 支援，提供更好的開發體驗

## 技術需求

- Node.js 16.0 或更高版本
- 現代瀏覽器（Chrome、Firefox、Edge 等）
- 支援 EME（Encrypted Media Extensions）的瀏覽器

## 安裝步驟

1. 克隆專案：
```bash
git clone https://github.com/yourusername/DrmDemo.git
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

## 專案結構

```
src/
  ├── components/
  │   └── VideoPlayer.tsx    # 影片播放器元件
  ├── App.tsx               # 主應用程式
  └── index.css            # 全局樣式
```

## DRM 實作說明

### 1. 未加密內容
- 直接使用 DASH 格式的影片
- 無需額外設定
- 適合公開內容

### 2. Clear Key 加密
- 使用基本的加密金鑰保護
- 需要配置 keyId 和 key
- 範例配置：
```typescript
{
  keyId: '8b5abc593d1b21d7f9ab88506b648656',
  key: '3d5e6d6b756b686c666d58776b5a6c54'
}
```

### 3. Widevine DRM
- Google 的商業級 DRM 解決方案
- 需要授權伺服器
- 目前使用測試伺服器：
```typescript
licenseServer: 'https://proxy.uat.widevine.com/proxy?provider=widevine_test'
```

## 實際部署注意事項

### 測試環境
- 目前使用的內容和服務僅供測試
- 測試用的 DRM 伺服器不應用於生產環境

### 正式環境需求
1. **Widevine 授權**
   - 需要向 Google 申請正式授權
   - 需要簽署相關合約和支付費用

2. **內容加密**
   - 需要專業的加密工具
   - 建議使用 Shaka Packager 或其他專業工具

3. **授權伺服器**
   - 需要建立自己的授權伺服器
   - 或使用第三方 DRM 服務

### 建議的部署方案

1. **使用第三方服務**
   - 推薦使用 EZDRM、BuyDRM 等服務
   - 提供完整的 DRM 解決方案
   - 降低部署和維護難度

2. **自建系統**
   - 需要較高的技術投入
   - 適合有特殊需求的場景
   - 需要考慮：
     * 金鑰管理
     * 授權驗證
     * 安全性維護

## 常見問題

1. **影片無法播放**
   - 檢查瀏覽器是否支援 EME
   - 確認網路連接正常
   - 檢查 Console 中的錯誤訊息

2. **DRM 相關問題**
   - Clear Key：確認金鑰格式正確
   - Widevine：確認授權伺服器可訪問

## 參考資源

- [Shaka Player 文件](https://shaka-player-demo.appspot.com/docs/api/tutorial-welcome.html)
- [Widevine DRM](https://www.widevine.com/)
- [EME 規範](https://w3c.github.io/encrypted-media/)

## 授權

MIT License
