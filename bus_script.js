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

    // お気に入り機能
    const favoriteButtons = document.querySelectorAll('.btn-favorite');
    favoriteButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const routeCard = this.closest('.route-card');
            const routeName = routeCard.querySelector('h3').textContent.trim();
            
            if (this.textContent === '⭐') {
                this.textContent = '★';
                this.style.backgroundColor = '#F59E0B';
                this.style.color = 'white';
                console.log('お気に入りに追加:', routeName);
            } else {
                this.textContent = '⭐';
                this.style.backgroundColor = 'transparent';
                this.style.color = '#6B7280';
                console.log('お気に入りから削除:', routeName);
            }
        });
    });

    // 方向選択機能
    const directionButtons = document.querySelectorAll('.direction-btn');
    directionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const parent = this.closest('.timetable-section');
            const buttons = parent.querySelectorAll('.direction-btn');
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const direction = this.textContent.trim();
            console.log('方向切り替え:', direction);
        });
    });

    // 地図コントロール機能
    const mapControlButtons = document.querySelectorAll('.map-controls-buttons .control-btn');
    mapControlButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.textContent.trim();
            console.log('地図操作:', action);
            
            switch(action) {
                case '📍':
                    // 現在地表示
                    alert('現在地を表示します');
                    break;
                case '🔍':
                    // ズーム
                    alert('ズーム機能');
                    break;
                case '🔄':
                    // 更新
                    alert('地図を更新します');
                    break;
                case '📱':
                    // フルスクリーン
                    alert('フルスクリーンモード');
                    break;
            }
        });
    });

    // 設定機能
    const settingSelects = document.querySelectorAll('.setting-select');
    settingSelects.forEach(select => {
        select.addEventListener('change', function() {
            const settingName = this.closest('.setting-item').querySelector('.setting-title').textContent.trim();
            const value = this.value;
            console.log('設定変更:', settingName, value);
        });
    });

    const toggleSwitches = document.querySelectorAll('.toggle-switch input');
    toggleSwitches.forEach(toggle => {
        toggle.addEventListener('change', function() {
            const settingName = this.closest('.setting-item').querySelector('.setting-title').textContent.trim();
            const isEnabled = this.checked;
            console.log('設定変更:', settingName, isEnabled);
        });
    });

    // お気に入り削除機能
    const removeButtons = document.querySelectorAll('.remove-btn');
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const favoriteItem = this.closest('.favorite-item');
            const routeName = favoriteItem.querySelector('.route-name').textContent.trim();
            
            if (confirm(`${routeName}をお気に入りから削除しますか？`)) {
                favoriteItem.remove();
                console.log('お気に入り削除:', routeName);
            }
        });
    });

    // 設定保存機能
    const saveButton = document.querySelector('.settings-footer .btn-primary');
    if (saveButton) {
        saveButton.addEventListener('click', function() {
            alert('設定を保存しました');
            console.log('設定保存完了');
        });
    }

    // 設定リセット機能
    const resetButton = document.querySelector('.settings-footer .btn-secondary');
    if (resetButton) {
        resetButton.addEventListener('click', function() {
            if (confirm('設定をリセットしますか？')) {
                // 設定をデフォルトに戻す
                settingSelects.forEach(select => {
                    select.selectedIndex = 1; // デフォルト値
                });
                toggleSwitches.forEach(toggle => {
                    toggle.checked = true; // デフォルト値
                });
                alert('設定をリセットしました');
                console.log('設定リセット完了');
            }
        });
    }

    // 停留所詳細画面の機能
    const stationActionButtons = document.querySelectorAll('.station-actions button');
    stationActionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.textContent.trim();
            console.log('停留所操作:', action);
            
            if (action === '地図で見る') {
                showScreen('map');
            } else if (action === 'お気に入り') {
                alert('お気に入りに追加しました');
            }
        });
    });

    // 運行情報の詳細表示
    const infoItems = document.querySelectorAll('.info-item');
    infoItems.forEach(item => {
        item.addEventListener('click', function() {
            const title = this.querySelector('.info-title').textContent.trim();
            const description = this.querySelector('.info-description').textContent.trim();
            
            // 詳細モーダル表示（簡易版）
            alert(`${title}\n\n${description}`);
            console.log('運行情報詳細:', title);
        });
    });

    // 緊急連絡先のクリック機能
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('click', function() {
            const title = this.querySelector('.contact-title').textContent.trim();
            const number = this.querySelector('.contact-number').textContent.trim();
            
            if (confirm(`${title}\n${number}\n\nこの番号に電話をかけますか？`)) {
                // 実際の実装では電話アプリを起動
                console.log('電話発信:', number);
            }
        });
    });

    console.log('バスロケーションシステムが初期化されました');
});