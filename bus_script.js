// バスロケーションシステム JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // ナビゲーション機能
    const navLinks = document.querySelectorAll('.nav-link');
    const screens = document.querySelectorAll('.screen');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // アクティブなナビゲーションを更新
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            // アクティブなスクリーンを更新
            const targetScreen = this.getAttribute('href').substring(1);
            screens.forEach(screen => {
                screen.classList.remove('active');
                if (screen.id === targetScreen) {
                    screen.classList.add('active');
                }
            });
        });
    });

    // 現在時刻の更新
    function updateCurrentTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('ja-JP', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });
        
        const timeElements = document.querySelectorAll('.time-display, .current-time-large');
        timeElements.forEach(element => {
            element.textContent = timeString;
        });
    }

    // 1秒ごとに時刻を更新
    setInterval(updateCurrentTime, 1000);
    updateCurrentTime(); // 初期表示

    // 検索機能
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');

    if (searchInput && searchButton) {
        searchButton.addEventListener('click', function() {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                // 検索処理（実際の実装ではAPI呼び出しなど）
                console.log('検索:', searchTerm);
                // 検索結果の表示処理をここに追加
            }
        });

        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchButton.click();
            }
        });
    }

    // フィルター機能
    const filterTabs = document.querySelectorAll('.filter-tab');
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            filterTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // フィルター処理（実際の実装ではデータの絞り込み）
            const filterType = this.textContent.trim();
            console.log('フィルター:', filterType);
        });
    });

    // 路線タブ機能
    const routeTabs = document.querySelectorAll('.route-tab');
    routeTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            routeTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // 路線データの切り替え処理
            const routeName = this.textContent.trim();
            console.log('路線切り替え:', routeName);
        });
    });

    // 地図コントロール
    const controlButtons = document.querySelectorAll('.control-btn');
    controlButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.textContent.trim();
            console.log('地図操作:', action);
            
            // 実際の地図操作処理
            switch(action) {
                case '📍':
                    // 現在地表示
                    break;
                case '🔍':
                    // ズーム
                    break;
                case '🔄':
                    // 更新
                    break;
            }
        });
    });

    // チェックボックス機能
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const routeName = this.nextElementSibling.textContent.trim();
            console.log('路線表示切り替え:', routeName, this.checked);
        });
    });

    // アクションカードのクリック処理
    const actionCards = document.querySelectorAll('.action-card');
    actionCards.forEach(card => {
        card.addEventListener('click', function() {
            const action = this.querySelector('h3').textContent.trim();
            console.log('アクション:', action);
            
            // 対応する画面に切り替え
            switch(action) {
                case '路線検索':
                    showScreen('routes');
                    break;
                case '時刻表':
                    showScreen('timetable');
                    break;
                case '地図':
                    showScreen('map');
                    break;
                case '運行情報':
                    showScreen('info');
                    break;
            }
        });
    });

    // 路線カードのボタン処理
    const routeCards = document.querySelectorAll('.route-card');
    routeCards.forEach(card => {
        const buttons = card.querySelectorAll('.btn-primary, .btn-secondary');
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.stopPropagation();
                const action = this.textContent.trim();
                const routeName = card.querySelector('h3').textContent.trim();
                console.log('路線操作:', routeName, action);
                
                if (action === '地図') {
                    showScreen('map');
                } else if (action === '時刻表') {
                    showScreen('timetable');
                }
            });
        });
    });

    // 画面表示関数
    function showScreen(screenId) {
        screens.forEach(screen => {
            screen.classList.remove('active');
            if (screen.id === screenId) {
                screen.classList.add('active');
            }
        });
        
        // ナビゲーションも更新
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + screenId) {
                link.classList.add('active');
            }
        });
    }

    // お知らせの詳細表示
    const newsItems = document.querySelectorAll('.news-item');
    newsItems.forEach(item => {
        item.addEventListener('click', function() {
            const title = this.querySelector('.news-title').textContent.trim();
            console.log('お知らせ詳細:', title);
            // 詳細モーダル表示などの処理
        });
    });

    // 運行情報の詳細表示
    const infoItems = document.querySelectorAll('.info-item');
    infoItems.forEach(item => {
        item.addEventListener('click', function() {
            const title = this.querySelector('.info-title').textContent.trim();
            console.log('運行情報詳細:', title);
            // 詳細モーダル表示などの処理
        });
    });

    // レスポンシブ対応
    function handleResize() {
        const width = window.innerWidth;
        
        // モバイル表示の調整
        if (width <= 768) {
            // モバイル用の調整処理
            console.log('モバイル表示');
        } else {
            // デスクトップ用の調整処理
            console.log('デスクトップ表示');
        }
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // 初期実行

    // アクセシビリティ対応
    // キーボードナビゲーション
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            // タブナビゲーションの処理
            console.log('キーボードナビゲーション');
        }
    });

    // フォーカス管理
    const focusableElements = document.querySelectorAll('button, input, a, [tabindex]');
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #2563EB';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });

    console.log('バスロケーションシステムが初期化されました');
});