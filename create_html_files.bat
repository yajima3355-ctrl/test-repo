@echo off
echo バスロケーションシステム HTMLファイル作成中...

REM screen_01_top_page.html
echo ^<!DOCTYPE html^> > screen_01_top_page.html
echo ^<html lang="ja"^> >> screen_01_top_page.html
echo ^<head^> >> screen_01_top_page.html
echo     ^<meta charset="UTF-8"^> >> screen_01_top_page.html
echo     ^<meta name="viewport" content="width=device-width, initial-scale=1.0"^> >> screen_01_top_page.html
echo     ^<title^>バスロケーションシステム - トップページ^</title^> >> screen_01_top_page.html
echo     ^<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700^&family=Roboto:wght@300;400;500;700^&display=swap" rel="stylesheet"^> >> screen_01_top_page.html
echo     ^<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"^> >> screen_01_top_page.html
echo     ^<style^> >> screen_01_top_page.html
echo         :root { >> screen_01_top_page.html
echo             --primary-blue: #2563EB; >> screen_01_top_page.html
echo             --secondary-blue: #1E40AF; >> screen_01_top_page.html
echo             --light-blue: #DBEAFE; >> screen_01_top_page.html
echo             --accent-orange: #F97316; >> screen_01_top_page.html
echo             --accent-green: #16A34A; >> screen_01_top_page.html
echo             --accent-red: #DC2626; >> screen_01_top_page.html
echo             --dark-gray: #1F2937; >> screen_01_top_page.html
echo             --medium-gray: #6B7280; >> screen_01_top_page.html
echo             --light-gray: #F3F4F6; >> screen_01_top_page.html
echo             --border-gray: #E5E7EB; >> screen_01_top_page.html
echo             --white: #FFFFFF; >> screen_01_top_page.html
echo             >> screen_01_top_page.html
echo             --spacing-xs: 4px; >> screen_01_top_page.html
echo             --spacing-sm: 8px; >> screen_01_top_page.html
echo             --spacing-md: 16px; >> screen_01_top_page.html
echo             --spacing-lg: 24px; >> screen_01_top_page.html
echo             --spacing-xl: 32px; >> screen_01_top_page.html
echo             --spacing-2xl: 48px; >> screen_01_top_page.html
echo             --spacing-3xl: 64px; >> screen_01_top_page.html
echo             >> screen_01_top_page.html
echo             --font-h1: 32px; >> screen_01_top_page.html
echo             --font-h2: 24px; >> screen_01_top_page.html
echo             --font-h3: 20px; >> screen_01_top_page.html
echo             --font-h4: 18px; >> screen_01_top_page.html
echo             --font-body: 16px; >> screen_01_top_page.html
echo             --font-small: 14px; >> screen_01_top_page.html
echo             --font-caption: 12px; >> screen_01_top_page.html
echo         } >> screen_01_top_page.html
echo         >> screen_01_top_page.html
echo         * { >> screen_01_top_page.html
echo             margin: 0; >> screen_01_top_page.html
echo             padding: 0; >> screen_01_top_page.html
echo             box-sizing: border-box; >> screen_01_top_page.html
echo         } >> screen_01_top_page.html
echo         >> screen_01_top_page.html
echo         body { >> screen_01_top_page.html
echo             font-family: 'Noto Sans JP', sans-serif; >> screen_01_top_page.html
echo             font-size: var(--font-body); >> screen_01_top_page.html
echo             line-height: 1.6; >> screen_01_top_page.html
echo             color: var(--dark-gray); >> screen_01_top_page.html
echo             background-color: var(--light-gray); >> screen_01_top_page.html
echo         } >> screen_01_top_page.html
echo         >> screen_01_top_page.html
echo         .header { >> screen_01_top_page.html
echo             background: linear-gradient(135deg, var(--primary-blue), var(--secondary-blue)); >> screen_01_top_page.html
echo             color: var(--white); >> screen_01_top_page.html
echo             padding: var(--spacing-md) var(--spacing-lg); >> screen_01_top_page.html
echo             box-shadow: 0 2px 8px rgba(0,0,0,0.1); >> screen_01_top_page.html
echo         } >> screen_01_top_page.html
echo         >> screen_01_top_page.html
echo         .header-content { >> screen_01_top_page.html
echo             max-width: 1200px; >> screen_01_top_page.html
echo             margin: 0 auto; >> screen_01_top_page.html
echo             display: flex; >> screen_01_top_page.html
echo             justify-content: space-between; >> screen_01_top_page.html
echo             align-items: center; >> screen_01_top_page.html
echo         } >> screen_01_top_page.html
echo         >> screen_01_top_page.html
echo         .logo { >> screen_01_top_page.html
echo             font-size: var(--font-h2); >> screen_01_top_page.html
echo             font-weight: 700; >> screen_01_top_page.html
echo             display: flex; >> screen_01_top_page.html
echo             align-items: center; >> screen_01_top_page.html
echo             gap: var(--spacing-sm); >> screen_01_top_page.html
echo         } >> screen_01_top_page.html
echo         >> screen_01_top_page.html
echo         .nav { >> screen_01_top_page.html
echo             display: flex; >> screen_01_top_page.html
echo             gap: var(--spacing-lg); >> screen_01_top_page.html
echo         } >> screen_01_top_page.html
echo         >> screen_01_top_page.html
echo         .nav-item { >> screen_01_top_page.html
echo             color: var(--white); >> screen_01_top_page.html
echo             text-decoration: none; >> screen_01_top_page.html
echo             padding: var(--spacing-sm) var(--spacing-md); >> screen_01_top_page.html
echo             border-radius: 8px; >> screen_01_top_page.html
echo             transition: background-color 0.2s ease; >> screen_01_top_page.html
echo         } >> screen_01_top_page.html
echo         >> screen_01_top_page.html
echo         .nav-item:hover { >> screen_01_top_page.html
echo             background-color: rgba(255,255,255,0.1); >> screen_01_top_page.html
echo         } >> screen_01_top_page.html
echo         >> screen_01_top_page.html
echo         .main { >> screen_01_top_page.html
echo             max-width: 1200px; >> screen_01_top_page.html
echo             margin: 0 auto; >> screen_01_top_page.html
echo             padding: var(--spacing-xl); >> screen_01_top_page.html
echo         } >> screen_01_top_page.html
echo         >> screen_01_top_page.html
echo         .hero { >> screen_01_top_page.html
echo             background: var(--white); >> screen_01_top_page.html
echo             border-radius: 16px; >> screen_01_top_page.html
echo             padding: var(--spacing-2xl); >> screen_01_top_page.html
echo             margin-bottom: var(--spacing-xl); >> screen_01_top_page.html
echo             box-shadow: 0 4px 16px rgba(0,0,0,0.1); >> screen_01_top_page.html
echo             text-align: center; >> screen_01_top_page.html
echo         } >> screen_01_top_page.html
echo         >> screen_01_top_page.html
echo         .hero h1 { >> screen_01_top_page.html
echo             font-size: var(--font-h1); >> screen_01_top_page.html
echo             margin-bottom: var(--spacing-md); >> screen_01_top_page.html
echo             color: var(--dark-gray); >> screen_01_top_page.html
echo         } >> screen_01_top_page.html
echo         >> screen_01_top_page.html
echo         .hero p { >> screen_01_top_page.html
echo             font-size: var(--font-h4); >> screen_01_top_page.html
echo             color: var(--medium-gray); >> screen_01_top_page.html
echo             margin-bottom: var(--spacing-xl); >> screen_01_top_page.html
echo         } >> screen_01_top_page.html
echo         >> screen_01_top_page.html
echo         .search-form { >> screen_01_top_page.html
echo             display: flex; >> screen_01_top_page.html
echo             gap: var(--spacing-md); >> screen_01_top_page.html
echo             max-width: 600px; >> screen_01_top_page.html
echo             margin: 0 auto; >> screen_01_top_page.html
echo         } >> screen_01_top_page.html
echo         >> screen_01_top_page.html
echo         .search-input { >> screen_01_top_page.html
echo             flex: 1; >> screen_01_top_page.html
echo             padding: var(--spacing-md); >> screen_01_top_page.html
echo             border: 2px solid var(--border-gray); >> screen_01_top_page.html
echo             border-radius: 12px; >> screen_01_top_page.html
echo             font-size: var(--font-body); >> screen_01_top_page.html
echo             transition: border-color 0.2s ease; >> screen_01_top_page.html
echo         } >> screen_01_top_page.html
echo         >> screen_01_top_page.html
echo         .search-input:focus { >> screen_01_top_page.html
echo             outline: none; >> screen_01_top_page.html
echo             border-color: var(--primary-blue); >> screen_01_top_page.html
echo         } >> screen_01_top_page.html
echo         >> screen_01_top_page.html
echo         .search-btn { >> screen_01_top_page.html
echo             background: var(--accent-orange); >> screen_01_top_page.html
echo             color: var(--white); >> screen_01_top_page.html
echo             border: none; >> screen_01_top_page.html
echo             padding: var(--spacing-md) var(--spacing-xl); >> screen_01_top_page.html
echo             border-radius: 12px; >> screen_01_top_page.html
echo             font-size: var(--font-body); >> screen_01_top_page.html
echo             font-weight: 500; >> screen_01_top_page.html
echo             cursor: pointer; >> screen_01_top_page.html
echo             transition: background-color 0.2s ease; >> screen_01_top_page.html
echo             display: flex; >> screen_01_top_page.html
echo             align-items: center; >> screen_01_top_page.html
echo             gap: var(--spacing-sm); >> screen_01_top_page.html
echo         } >> screen_01_top_page.html
echo         >> screen_01_top_page.html
echo         .search-btn:hover { >> screen_01_top_page.html
echo             background: #EA580C; >> screen_01_top_page.html
echo         } >> screen_01_top_page.html
echo         >> screen_01_top_page.html
echo         .quick-access { >> screen_01_top_page.html
echo             display: grid; >> screen_01_top_page.html
echo             grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); >> screen_01_top_page.html
echo             gap: var(--spacing-lg); >> screen_01_top_page.html
echo             margin-bottom: var(--spacing-xl); >> screen_01_top_page.html
echo         } >> screen_01_top_page.html
echo         >> screen_01_top_page.html
echo         .quick-card { >> screen_01_top_page.html
echo             background: var(--white); >> screen_01_top_page.html
echo             border-radius: 16px; >> screen_01_top_page.html
echo             padding: var(--spacing-xl); >> screen_01_top_page.html
echo             text-align: center; >> screen_01_top_page.html
echo             box-shadow: 0 2px 8px rgba(0,0,0,0.1); >> screen_01_top_page.html
echo             transition: transform 0.2s ease, box-shadow 0.2s ease; >> screen_01_top_page.html
echo             cursor: pointer; >> screen_01_top_page.html
echo         } >> screen_01_top_page.html
echo         >> screen_01_top_page.html
echo         .quick-card:hover { >> screen_01_top_page.html
echo             transform: translateY(-4px); >> screen_01_top_page.html
echo             box-shadow: 0 8px 24px rgba(0,0,0,0.15); >> screen_01_top_page.html
echo         } >> screen_01_top_page.html
echo         >> screen_01_top_page.html
echo         .quick-card-icon { >> screen_01_top_page.html
echo             width: 64px; >> screen_01_top_page.html
echo             height: 64px; >> screen_01_top_page.html
echo             background: var(--light-blue); >> screen_01_top_page.html
echo             border-radius: 50%; >> screen_01_top_page.html
echo             display: flex; >> screen_01_top_page.html
echo             align-items: center; >> screen_01_top_page.html
echo             justify-content: center; >> screen_01_top_page.html
echo             margin: 0 auto var(--spacing-md); >> screen_01_top_page.html
echo             font-size: 32px; >> screen_01_top_page.html
echo             color: var(--primary-blue); >> screen_01_top_page.html
echo         } >> screen_01_top_page.html
echo         >> screen_01_top_page.html
echo         .quick-card h3 { >> screen_01_top_page.html
echo             font-size: var(--font-h4); >> screen_01_top_page.html
echo             margin-bottom: var(--spacing-sm); >> screen_01_top_page.html
echo             color: var(--dark-gray); >> screen_01_top_page.html
echo         } >> screen_01_top_page.html
echo         >> screen_01_top_page.html
echo         .quick-card p { >> screen_01_top_page.html
echo             color: var(--medium-gray); >> screen_01_top_page.html
echo             font-size: var(--font-small); >> screen_01_top_page.html
echo         } >> screen_01_top_page.html
echo         >> screen_01_top_page.html
echo         .news-section { >> screen_01_top_page.html
echo             background: var(--white); >> screen_01_top_page.html
echo             border-radius: 16px; >> screen_01_top_page.html
echo             padding: var(--spacing-xl); >> screen_01_top_page.html
echo             box-shadow: 0 2px 8px rgba(0,0,0,0.1); >> screen_01_top_page.html
echo         } >> screen_01_top_page.html
echo         >> screen_01_top_page.html
echo         .news-section h2 { >> screen_01_top_page.html
echo             font-size: var(--font-h2); >> screen_01_top_page.html
echo             margin-bottom: var(--spacing-lg); >> screen_01_top_page.html
echo             color: var(--dark-gray); >> screen_01_top_page.html
echo             display: flex; >> screen_01_top_page.html
echo             align-items: center; >> screen_01_top_page.html
echo             gap: var(--spacing-sm); >> screen_01_top_page.html
echo         } >> screen_01_top_page.html
echo         >> screen_01_top_page.html
echo         .news-list { >> screen_01_top_page.html
echo             list-style: none; >> screen_01_top_page.html
echo         } >> screen_01_top_page.html
echo         >> screen_01_top_page.html
echo         .news-item { >> screen_01_top_page.html
echo             padding: var(--spacing-md) 0; >> screen_01_top_page.html
echo             border-bottom: 1px solid var(--border-gray); >> screen_01_top_page.html
echo             display: flex; >> screen_01_top_page.html
echo             align-items: center; >> screen_01_top_page.html
echo             gap: var(--spacing-md); >> screen_01_top_page.html
echo         } >> screen_01_top_page.html
echo         >> screen_01_top_page.html
echo         .news-item:last-child { >> screen_01_top_page.html
echo             border-bottom: none; >> screen_01_top_page.html
echo         } >> screen_01_top_page.html
echo         >> screen_01_top_page.html
echo         .news-badge { >> screen_01_top_page.html
echo             background: var(--accent-red); >> screen_01_top_page.html
echo             color: var(--white); >> screen_01_top_page.html
echo             padding: var(--spacing-xs) var(--spacing-sm); >> screen_01_top_page.html
echo             border-radius: 12px; >> screen_01_top_page.html
echo             font-size: var(--font-caption); >> screen_01_top_page.html
echo             font-weight: 500; >> screen_01_top_page.html
echo         } >> screen_01_top_page.html
echo         >> screen_01_top_page.html
echo         .news-content { >> screen_01_top_page.html
echo             flex: 1; >> screen_01_top_page.html
echo         } >> screen_01_top_page.html
echo         >> screen_01_top_page.html
echo         .news-title { >> screen_01_top_page.html
echo             font-weight: 500; >> screen_01_top_page.html
echo             margin-bottom: var(--spacing-xs); >> screen_01_top_page.html
echo         } >> screen_01_top_page.html
echo         >> screen_01_top_page.html
echo         .news-date { >> screen_01_top_page.html
echo             color: var(--medium-gray); >> screen_01_top_page.html
echo             font-size: var(--font-small); >> screen_01_top_page.html
echo         } >> screen_01_top_page.html
echo         >> screen_01_top_page.html
echo         .footer { >> screen_01_top_page.html
echo             background: var(--dark-gray); >> screen_01_top_page.html
echo             color: var(--white); >> screen_01_top_page.html
echo             padding: var(--spacing-xl); >> screen_01_top_page.html
echo             margin-top: var(--spacing-3xl); >> screen_01_top_page.html
echo         } >> screen_01_top_page.html
echo         >> screen_01_top_page.html
echo         .footer-content { >> screen_01_top_page.html
echo             max-width: 1200px; >> screen_01_top_page.html
echo             margin: 0 auto; >> screen_01_top_page.html
echo             text-align: center; >> screen_01_top_page.html
echo         } >> screen_01_top_page.html
echo         >> screen_01_top_page.html
echo         @media (max-width: 768px) { >> screen_01_top_page.html
echo             .header-content { >> screen_01_top_page.html
echo                 flex-direction: column; >> screen_01_top_page.html
echo                 gap: var(--spacing-md); >> screen_01_top_page.html
echo             } >> screen_01_top_page.html
echo             >> screen_01_top_page.html
echo             .nav { >> screen_01_top_page.html
echo                 flex-wrap: wrap; >> screen_01_top_page.html
echo                 justify-content: center; >> screen_01_top_page.html
echo             } >> screen_01_top_page.html
echo             >> screen_01_top_page.html
echo             .search-form { >> screen_01_top_page.html
echo                 flex-direction: column; >> screen_01_top_page.html
echo             } >> screen_01_top_page.html
echo             >> screen_01_top_page.html
echo             .quick-access { >> screen_01_top_page.html
echo                 grid-template-columns: 1fr; >> screen_01_top_page.html
echo             } >> screen_01_top_page.html
echo             >> screen_01_top_page.html
echo             .main { >> screen_01_top_page.html
echo                 padding: var(--spacing-md); >> screen_01_top_page.html
echo             } >> screen_01_top_page.html
echo             >> screen_01_top_page.html
echo             .hero { >> screen_01_top_page.html
echo                 padding: var(--spacing-lg); >> screen_01_top_page.html
echo             } >> screen_01_top_page.html
echo             >> screen_01_top_page.html
echo             .hero h1 { >> screen_01_top_page.html
echo                 font-size: 24px; >> screen_01_top_page.html
echo             } >> screen_01_top_page.html
echo         } >> screen_01_top_page.html
echo         >> screen_01_top_page.html
echo         .sr-only { >> screen_01_top_page.html
echo             position: absolute; >> screen_01_top_page.html
echo             width: 1px; >> screen_01_top_page.html
echo             height: 1px; >> screen_01_top_page.html
echo             padding: 0; >> screen_01_top_page.html
echo             margin: -1px; >> screen_01_top_page.html
echo             overflow: hidden; >> screen_01_top_page.html
echo             clip: rect(0, 0, 0, 0); >> screen_01_top_page.html
echo             white-space: nowrap; >> screen_01_top_page.html
echo             border: 0; >> screen_01_top_page.html
echo         } >> screen_01_top_page.html
echo         >> screen_01_top_page.html
echo         .nav-item:focus, >> screen_01_top_page.html
echo         .search-input:focus, >> screen_01_top_page.html
echo         .search-btn:focus, >> screen_01_top_page.html
echo         .quick-card:focus { >> screen_01_top_page.html
echo             outline: 2px solid var(--primary-blue); >> screen_01_top_page.html
echo             outline-offset: 2px; >> screen_01_top_page.html
echo         } >> screen_01_top_page.html
echo     ^</style^> >> screen_01_top_page.html
echo ^</head^> >> screen_01_top_page.html
echo ^<body^> >> screen_01_top_page.html
echo     ^<!-- ヘッダー --^> >> screen_01_top_page.html
echo     ^<header class="header"^> >> screen_01_top_page.html
echo         ^<div class="header-content"^> >> screen_01_top_page.html
echo             ^<div class="logo"^> >> screen_01_top_page.html
echo                 ^<span class="material-icons"^>directions_bus^</span^> >> screen_01_top_page.html
echo                 バスロケーション >> screen_01_top_page.html
echo             ^</div^> >> screen_01_top_page.html
echo             ^<nav class="nav"^> >> screen_01_top_page.html
echo                 ^<a href="#" class="nav-item"^>ホーム^</a^> >> screen_01_top_page.html
echo                 ^<a href="#" class="nav-item"^>時刻表^</a^> >> screen_01_top_page.html
echo                 ^<a href="#" class="nav-item"^>路線検索^</a^> >> screen_01_top_page.html
echo                 ^<a href="#" class="nav-item"^>運行状況^</a^> >> screen_01_top_page.html
echo                 ^<a href="#" class="nav-item"^>お知らせ^</a^> >> screen_01_top_page.html
echo             ^</nav^> >> screen_01_top_page.html
echo         ^</div^> >> screen_01_top_page.html
echo     ^</header^> >> screen_01_top_page.html
echo     >> screen_01_top_page.html
echo     ^<!-- メインコンテンツ --^> >> screen_01_top_page.html
echo     ^<main class="main"^> >> screen_01_top_page.html
echo         ^<!-- ヒーローセクション --^> >> screen_01_top_page.html
echo         ^<section class="hero"^> >> screen_01_top_page.html
echo             ^<h1^>バスロケーションシステム^</h1^> >> screen_01_top_page.html
echo             ^<p^>最寄りのバス停や路線を簡単に検索できます^</p^> >> screen_01_top_page.html
echo             ^<form class="search-form"^> >> screen_01_top_page.html
echo                 ^<input type="text" class="search-input" placeholder="バス停名や路線名を入力してください" aria-label="バス停検索"^> >> screen_01_top_page.html
echo                 ^<button type="submit" class="search-btn"^> >> screen_01_top_page.html
echo                     ^<span class="material-icons"^>search^</span^> >> screen_01_top_page.html
echo                     検索 >> screen_01_top_page.html
echo                 ^</button^> >> screen_01_top_page.html
echo             ^</form^> >> screen_01_top_page.html
echo         ^</section^> >> screen_01_top_page.html
echo         >> screen_01_top_page.html
echo         ^<!-- クイックアクセス --^> >> screen_01_top_page.html
echo         ^<section class="quick-access"^> >> screen_01_top_page.html
echo             ^<div class="quick-card" tabindex="0"^> >> screen_01_top_page.html
echo                 ^<div class="quick-card-icon"^> >> screen_01_top_page.html
echo                     ^<span class="material-icons"^>schedule^</span^> >> screen_01_top_page.html
echo                 ^</div^> >> screen_01_top_page.html
echo                 ^<h3^>時刻表^</h3^> >> screen_01_top_page.html
echo                 ^<p^>バス停の時刻表を確認^</p^> >> screen_01_top_page.html
echo             ^</div^> >> screen_01_top_page.html
echo             >> screen_01_top_page.html
echo             ^<div class="quick-card" tabindex="0"^> >> screen_01_top_page.html
echo                 ^<div class="quick-card-icon"^> >> screen_01_top_page.html
echo                     ^<span class="material-icons"^>route^</span^> >> screen_01_top_page.html
echo                 ^</div^> >> screen_01_top_page.html
echo                 ^<h3^>路線検索^</h3^> >> screen_01_top_page.html
echo                 ^<p^>出発地から目的地を検索^</p^> >> screen_01_top_page.html
echo             ^</div^> >> screen_01_top_page.html
echo             >> screen_01_top_page.html
echo             ^<div class="quick-card" tabindex="0"^> >> screen_01_top_page.html
echo                 ^<div class="quick-card-icon"^> >> screen_01_top_page.html
echo                     ^<span class="material-icons"^>map^</span^> >> screen_01_top_page.html
echo                 ^</div^> >> screen_01_top_page.html
echo                 ^<h3^>運行状況^</h3^> >> screen_01_top_page.html
echo                 ^<p^>リアルタイムの運行状況^</p^> >> screen_01_top_page.html
echo             ^</div^> >> screen_01_top_page.html
echo             >> screen_01_top_page.html
echo             ^<div class="quick-card" tabindex="0"^> >> screen_01_top_page.html
echo                 ^<div class="quick-card-icon"^> >> screen_01_top_page.html
echo                     ^<span class="material-icons"^>notifications^</span^> >> screen_01_top_page.html
echo                 ^</div^> >> screen_01_top_page.html
echo                 ^<h3^>お知らせ^</h3^> >> screen_01_top_page.html
echo                 ^<p^>運行情報とお知らせ^</p^> >> screen_01_top_page.html
echo             ^</div^> >> screen_01_top_page.html
echo         ^</section^> >> screen_01_top_page.html
echo         >> screen_01_top_page.html
echo         ^<!-- お知らせセクション --^> >> screen_01_top_page.html
echo         ^<section class="news-section"^> >> screen_01_top_page.html
echo             ^<h2^> >> screen_01_top_page.html
echo                 ^<span class="material-icons"^>notifications^</span^> >> screen_01_top_page.html
echo                 お知らせ >> screen_01_top_page.html
echo             ^</h2^> >> screen_01_top_page.html
echo             ^<ul class="news-list"^> >> screen_01_top_page.html
echo                 ^<li class="news-item"^> >> screen_01_top_page.html
echo                     ^<span class="news-badge"^>重要^</span^> >> screen_01_top_page.html
echo                     ^<div class="news-content"^> >> screen_01_top_page.html
echo                         ^<div class="news-title"^>路線A 運休のお知らせ^</div^> >> screen_01_top_page.html
echo                         ^<div class="news-date"^>2024年1月15日^</div^> >> screen_01_top_page.html
echo                     ^</div^> >> screen_01_top_page.html
echo                 ^</li^> >> screen_01_top_page.html
echo                 ^<li class="news-item"^> >> screen_01_top_page.html
echo                     ^<span class="news-badge"^>遅延^</span^> >> screen_01_top_page.html
echo                     ^<div class="news-content"^> >> screen_01_top_page.html
echo                         ^<div class="news-title"^>路線B 遅延発生中^</div^> >> screen_01_top_page.html
echo                         ^<div class="news-date"^>2024年1月15日^</div^> >> screen_01_top_page.html
echo                     ^</div^> >> screen_01_top_page.html
echo                 ^</li^> >> screen_01_top_page.html
echo                 ^<li class="news-item"^> >> screen_01_top_page.html
echo                     ^<span class="news-badge"^>情報^</span^> >> screen_01_top_page.html
echo                     ^<div class="news-content"^> >> screen_01_top_page.html
echo                         ^<div class="news-title"^>新路線の運行開始^</div^> >> screen_01_top_page.html
echo                         ^<div class="news-date"^>2024年1月10日^</div^> >> screen_01_top_page.html
echo                     ^</div^> >> screen_01_top_page.html
echo                 ^</li^> >> screen_01_top_page.html
echo             ^</ul^> >> screen_01_top_page.html
echo         ^</section^> >> screen_01_top_page.html
echo     ^</main^> >> screen_01_top_page.html
echo     >> screen_01_top_page.html
echo     ^<!-- フッター --^> >> screen_01_top_page.html
echo     ^<footer class="footer"^> >> screen_01_top_page.html
echo         ^<div class="footer-content"^> >> screen_01_top_page.html
echo             ^<p^>^&copy; 2024 バスロケーションシステム. All rights reserved.^</p^> >> screen_01_top_page.html
echo         ^</div^> >> screen_01_top_page.html
echo     ^</footer^> >> screen_01_top_page.html
echo ^</body^> >> screen_01_top_page.html
echo ^</html^> >> screen_01_top_page.html

echo screen_01_top_page.html を作成しました。

REM 他のファイルも同様に作成（簡略化）
echo ^<!DOCTYPE html^> > screen_02_bus_stop_timetable.html
echo ^<html lang="ja"^> >> screen_02_bus_stop_timetable.html
echo ^<head^> >> screen_02_bus_stop_timetable.html
echo     ^<meta charset="UTF-8"^> >> screen_02_bus_stop_timetable.html
echo     ^<meta name="viewport" content="width=device-width, initial-scale=1.0"^> >> screen_02_bus_stop_timetable.html
echo     ^<title^>バスロケーションシステム - バス停検索・時刻表^</title^> >> screen_02_bus_stop_timetable.html
echo     ^<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700^&family=Roboto:wght@300;400;500;700^&display=swap" rel="stylesheet"^> >> screen_02_bus_stop_timetable.html
echo     ^<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"^> >> screen_02_bus_stop_timetable.html
echo     ^<style^> >> screen_02_bus_stop_timetable.html
echo         :root { >> screen_02_bus_stop_timetable.html
echo             --primary-blue: #2563EB; >> screen_02_bus_stop_timetable.html
echo             --secondary-blue: #1E40AF; >> screen_02_bus_stop_timetable.html
echo             --light-blue: #DBEAFE; >> screen_02_bus_stop_timetable.html
echo             --accent-orange: #F97316; >> screen_02_bus_stop_timetable.html
echo             --accent-green: #16A34A; >> screen_02_bus_stop_timetable.html
echo             --accent-red: #DC2626; >> screen_02_bus_stop_timetable.html
echo             --dark-gray: #1F2937; >> screen_02_bus_stop_timetable.html
echo             --medium-gray: #6B7280; >> screen_02_bus_stop_timetable.html
echo             --light-gray: #F3F4F6; >> screen_02_bus_stop_timetable.html
echo             --border-gray: #E5E7EB; >> screen_02_bus_stop_timetable.html
echo             --white: #FFFFFF; >> screen_02_bus_stop_timetable.html
echo         } >> screen_02_bus_stop_timetable.html
echo         body { >> screen_02_bus_stop_timetable.html
echo             font-family: 'Noto Sans JP', sans-serif; >> screen_02_bus_stop_timetable.html
echo             background-color: var(--light-gray); >> screen_02_bus_stop_timetable.html
echo         } >> screen_02_bus_stop_timetable.html
echo     ^</style^> >> screen_02_bus_stop_timetable.html
echo ^</head^> >> screen_02_bus_stop_timetable.html
echo ^<body^> >> screen_02_bus_stop_timetable.html
echo     ^<h1^>バス停検索・時刻表^</h1^> >> screen_02_bus_stop_timetable.html
echo     ^<p^>バス停の検索と時刻表表示機能^</p^> >> screen_02_bus_stop_timetable.html
echo ^</body^> >> screen_02_bus_stop_timetable.html
echo ^</html^> >> screen_02_bus_stop_timetable.html

echo screen_02_bus_stop_timetable.html を作成しました。

REM 残りのファイルも同様に作成
echo ^<!DOCTYPE html^> > screen_03_route_search.html
echo ^<html lang="ja"^> >> screen_03_route_search.html
echo ^<head^> >> screen_03_route_search.html
echo     ^<title^>バスロケーションシステム - 路線検索・ルート案内^</title^> >> screen_03_route_search.html
echo ^</head^> >> screen_03_route_search.html
echo ^<body^> >> screen_03_route_search.html
echo     ^<h1^>路線検索・ルート案内^</h1^> >> screen_03_route_search.html
echo ^</body^> >> screen_03_route_search.html
echo ^</html^> >> screen_03_route_search.html

echo screen_03_route_search.html を作成しました。

echo ^<!DOCTYPE html^> > screen_04_realtime_status.html
echo ^<html lang="ja"^> >> screen_04_realtime_status.html
echo ^<head^> >> screen_04_realtime_status.html
echo     ^<title^>バスロケーションシステム - リアルタイム運行状況^</title^> >> screen_04_realtime_status.html
echo ^</head^> >> screen_04_realtime_status.html
echo ^<body^> >> screen_04_realtime_status.html
echo     ^<h1^>リアルタイム運行状況^</h1^> >> screen_04_realtime_status.html
echo ^</body^> >> screen_04_realtime_status.html
echo ^</html^> >> screen_04_realtime_status.html

echo screen_04_realtime_status.html を作成しました。

echo ^<!DOCTYPE html^> > screen_05_news_announcements.html
echo ^<html lang="ja"^> >> screen_05_news_announcements.html
echo ^<head^> >> screen_05_news_announcements.html
echo     ^<title^>バスロケーションシステム - お知らせ・運行情報^</title^> >> screen_05_news_announcements.html
echo ^</head^> >> screen_05_news_announcements.html
echo ^<body^> >> screen_05_news_announcements.html
echo     ^<h1^>お知らせ・運行情報^</h1^> >> screen_05_news_announcements.html
echo ^</body^> >> screen_05_news_announcements.html
echo ^</html^> >> screen_05_news_announcements.html

echo screen_05_news_announcements.html を作成しました。

echo ^<!DOCTYPE html^> > screen_06_mypage_settings.html
echo ^<html lang="ja"^> >> screen_06_mypage_settings.html
echo ^<head^> >> screen_06_mypage_settings.html
echo     ^<title^>バスロケーションシステム - マイページ・設定^</title^> >> screen_06_mypage_settings.html
echo ^</head^> >> screen_06_mypage_settings.html
echo ^<body^> >> screen_06_mypage_settings.html
echo     ^<h1^>マイページ・設定^</h1^> >> screen_06_mypage_settings.html
echo ^</body^> >> screen_06_mypage_settings.html
echo ^</html^> >> screen_06_mypage_settings.html

echo screen_06_mypage_settings.html を作成しました。

echo ^<!DOCTYPE html^> > screen_07_help_contact.html
echo ^<html lang="ja"^> >> screen_07_help_contact.html
echo ^<head^> >> screen_07_help_contact.html
echo     ^<title^>バスロケーションシステム - ヘルプ・お問い合わせ^</title^> >> screen_07_help_contact.html
echo ^</head^> >> screen_07_help_contact.html
echo ^<body^> >> screen_07_help_contact.html
echo     ^<h1^>ヘルプ・お問い合わせ^</h1^> >> screen_07_help_contact.html
echo ^</body^> >> screen_07_help_contact.html
echo ^</html^> >> screen_07_help_contact.html

echo screen_07_help_contact.html を作成しました。

echo.
echo ========================================
echo 7つのHTMLファイルが作成されました！
echo ========================================
echo.
echo 作成されたファイル:
echo - screen_01_top_page.html (完全版)
echo - screen_02_bus_stop_timetable.html (簡易版)
echo - screen_03_route_search.html (簡易版)
echo - screen_04_realtime_status.html (簡易版)
echo - screen_05_news_announcements.html (簡易版)
echo - screen_06_mypage_settings.html (簡易版)
echo - screen_07_help_contact.html (簡易版)
echo.
echo ブラウザで開いて確認してください。
echo.
pause