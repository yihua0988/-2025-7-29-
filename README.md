# 2025 近年詐騙防制資料分析網站 (Fraud Prevention Data Analysis)

[![Website Status](https://img.shields.io/website?url=https%3A%2F%2Fyihua0988.github.io%2F-2025-7-29-%2F&label=Online)](https://yihua0988.github.io/-2025-7-29-/)

> **網站連結 (Live Demo)：** [https://yihua0988.github.io/-2025-7-29-/](https://yihua0988.github.io/-2025-7-29-/)

## 🇹🇼 專案簡介 (Project Overview)

本專案是一個專門針對 **近年台灣詐騙案件與手法** 進行整合分析的靜態網站。
身為金融服務從業人員，深感詐騙對民眾資產的威脅，因此建立此平台。透過整合政府公開資料 (Open Data) 與 **165 反詐騙儀表板**，提供民眾一個快速查詢、了解最新詐騙趨勢的懶人包，協助提升防詐意識。

### 核心功能 (Key Features)
* **🛡 詐騙趨勢分析**：整理電話、網購、假交友與投資詐騙等常見模式。
* **📊 即時數據整合**：內嵌 **165 打詐儀表板**，提供即時的案件統計與財損數據。
* **📱 防詐資源串接**：提供警政服務 App 下載入口與官方防詐社群連結。
* **🔍 SEO 搜尋優化**：針對搜尋引擎進行結構化資料 (JSON-LD) 與關鍵字優化，提升能見度。

---

## 🛠 技術規格 (Technical Specifications)

本網站採用輕量化的靜態網頁架構，確保載入速度快且易於維護。

### 1. 網頁架構 (Architecture)
* **核心技術**：HTML5, CSS3 (Pure CSS, No Frameworks)。
* **響應式設計 (RWD)**：使用 `clamp()` 函數與彈性佈局 (Flexbox)，確保在桌機、平板與手機上皆能完美顯示。
* **託管服務**：GitHub Pages。

### 2. SEO 與社群優化 (SEO & Social Sharing)
* **Meta Tags**：完整的 Title, Description 與 Keywords 設定，針對「165」、「詐騙分析」等關鍵字進行佈局。
* **Open Graph (OG)**：優化 Facebook 與 LINE 的分享預覽效果，包含自定義封面圖 (`cover.jpg`) 與標題。
* **結構化資料**：實作 `Schema.org` (JSON-LD)，提升 Google 搜尋結果的專業度。

### 3. 資料來源 (Data Sources)
* **政府資料開放平台 (data.gov.tw)**
* **內政部警政署 165 全民防騙網**

---

## 📂 專案結構 (Directory Structure)

```text
-2025-7-29-/
├── index.html       # 網站首頁 (Home)
├── sitemap.xml      # 網站地圖 (SEO)
├── HTML/            # 資源資料夾
│   ├── style.css    # 樣式表
│   ├── cover.jpg    # 社群分享預覽圖
│   ├── code1~4.jpg  # App QR Codes
│   └── 1-1.html...  # 分析分頁
└── ppt/             # 專題簡報檔