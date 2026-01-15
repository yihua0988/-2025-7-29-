/* HTML/protect.js */
(function() {
    // --- 1. SEO 白名單檢查 (讓 Google/Line/FB 爬蟲可以正常讀取) ---
    var userAgent = navigator.userAgent.toLowerCase();
    var allowedBots = [
        'googlebot', 'bingbot', 'baiduspider', 'yandex', 
        'facebookexternalhit', 'line', 'twitterbot', 'slack', 
        'telegrambot', 'discordbot', 'pinterest'
    ];
    
    // 如果是爬蟲，直接結束函式，不執行後面的防護
    for (var i = 0; i < allowedBots.length; i++) {
        if (userAgent.indexOf(allowedBots[i]) !== -1) {
            return;
        }
    }

    // --- 2. 行為攔截 ---
    
    // 跳轉函式 (你可以隨時在這裡修改跳轉目標)
    function redirectToGoogle() {
        // 為了避免誤判導致無限迴圈，可以加個判斷
        if (window.location.hostname !== "www.google.com") {
            window.location.href = "https://www.google.com";
        }
    }

    // 禁止右鍵選單
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        e.stopPropagation(); // 強化攔截
    }, true);

    // 禁止鍵盤快捷鍵 (F12, Ctrl+Shift+I/J/C, Ctrl+U, Ctrl+S)
    document.addEventListener('keydown', function(e) {
        // F12
        if (e.keyCode == 123) {
            e.preventDefault();
            redirectToGoogle();
            return false;
        }
        
        // Ctrl 組合鍵檢查
        if (e.ctrlKey) {
            // Shift 組合鍵 (I, J, C)
            if (e.shiftKey) {
                if (e.keyCode == 73 || e.keyCode == 74 || e.keyCode == 67) { // I, J, C
                    e.preventDefault();
                    redirectToGoogle();
                    return false;
                }
            }
            // 單純 Ctrl 組合鍵 (U=原始碼, S=存檔)
            if (e.keyCode == 85 || e.keyCode == 83) { // U, S
                e.preventDefault();
                redirectToGoogle();
                return false;
            }
        }
    }, true);

    // --- 3. 進階偵測：Debugger 時間差攻擊 ---
    // 當使用者硬開開發者工具時，瀏覽器會因為 debugger 指令暫停，產生時間差
    setInterval(function() {
        var start = new Date().getTime();
        debugger; // 如果 DevTools 開啟，會卡在這裡
        var end = new Date().getTime();
        if (end - start > 100) { // 門檻值 (毫秒)
            redirectToGoogle();
        }
    }, 2000); // 每 2 秒檢查一次

})();	