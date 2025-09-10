#!/usr/bin/env python3
"""
薬剤師訪問サービスパンフレット PNGファイル生成スクリプト
各ページを個別のPNGファイルとして出力
"""

from PIL import Image, ImageDraw, ImageFont
import os

# カラーパレット
COLORS = {
    'primary_pink': (255, 182, 193),      # #FFB6C1
    'secondary_orange': (255, 165, 0),    # #FFA500
    'accent_pink': (255, 105, 180),       # #FF69B4
    'light_pink': (255, 228, 225),        # #FFE4E1
    'white': (255, 255, 255),             # #FFFFFF
    'gray': (51, 51, 51)                  # #333333
}

# A4サイズ（300dpi）
A4_WIDTH = 2480  # 210mm * 300dpi / 25.4mm
A4_HEIGHT = 3508  # 297mm * 300dpi / 25.4mm

def create_gradient_background(width, height, color1, color2, direction='vertical'):
    """グラデーション背景を作成"""
    image = Image.new('RGB', (width, height))
    draw = ImageDraw.Draw(image)
    
    if direction == 'vertical':
        for y in range(height):
            ratio = y / height
            r = int(color1[0] * (1 - ratio) + color2[0] * ratio)
            g = int(color1[1] * (1 - ratio) + color2[1] * ratio)
            b = int(color1[2] * (1 - ratio) + color2[2] * ratio)
            draw.line([(0, y), (width, y)], fill=(r, g, b))
    else:  # horizontal
        for x in range(width):
            ratio = x / width
            r = int(color1[0] * (1 - ratio) + color2[0] * ratio)
            g = int(color1[1] * (1 - ratio) + color2[1] * ratio)
            b = int(color1[2] * (1 - ratio) + color2[2] * ratio)
            draw.line([(x, 0), (x, height)], fill=(r, g, b))
    
    return image

def draw_text_with_shadow(draw, text, position, font, fill_color, shadow_color=(0, 0, 0), shadow_offset=(2, 2)):
    """影付きテキストを描画"""
    x, y = position
    # 影を描画
    draw.text((x + shadow_offset[0], y + shadow_offset[1]), text, font=font, fill=shadow_color)
    # メインテキストを描画
    draw.text((x, y), text, font=font, fill=fill_color)

def create_cover_page():
    """表紙を作成"""
    img = create_gradient_background(A4_WIDTH, A4_HEIGHT, COLORS['primary_pink'], COLORS['secondary_orange'])
    draw = ImageDraw.Draw(img)
    
    # フォント（システムフォントを使用）
    try:
        title_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 80)
        subtitle_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 50)
        company_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 60)
    except:
        title_font = ImageFont.load_default()
        subtitle_font = ImageFont.load_default()
        company_font = ImageFont.load_default()
    
    # タイトル
    title_text = "薬剤師訪問サービスのご案内"
    title_bbox = draw.textbbox((0, 0), title_text, font=title_font)
    title_width = title_bbox[2] - title_bbox[0]
    title_x = (A4_WIDTH - title_width) // 2
    draw_text_with_shadow(draw, title_text, (title_x, 400), title_font, COLORS['white'])
    
    # キャッチコピー
    catchphrase_text = "地域に寄り添う、かかりつけ薬剤師"
    catchphrase_bbox = draw.textbbox((0, 0), catchphrase_text, font=subtitle_font)
    catchphrase_width = catchphrase_bbox[2] - catchphrase_bbox[0]
    catchphrase_x = (A4_WIDTH - catchphrase_width) // 2
    draw_text_with_shadow(draw, catchphrase_text, (catchphrase_x, 500), subtitle_font, COLORS['white'])
    
    # ビジュアルエリア
    visual_x = A4_WIDTH // 4
    visual_y = 700
    visual_width = A4_WIDTH // 2
    visual_height = 300
    
    # 半透明の背景
    visual_bg = Image.new('RGBA', (visual_width, visual_height), (*COLORS['light_pink'], 200))
    img.paste(visual_bg, (visual_x, visual_y), visual_bg)
    
    # 絵文字（テキストで代用）
    emoji_text = "💊 👩‍⚕️ 👨‍⚕️"
    emoji_bbox = draw.textbbox((0, 0), emoji_text, font=title_font)
    emoji_width = emoji_bbox[2] - emoji_bbox[0]
    emoji_x = visual_x + (visual_width - emoji_width) // 2
    draw.text((emoji_x, visual_y + 50), emoji_text, font=title_font, fill=COLORS['white'])
    
    # サブテキスト
    sub_text = "安心と信頼の在宅支援パートナー"
    sub_bbox = draw.textbbox((0, 0), sub_text, font=subtitle_font)
    sub_width = sub_bbox[2] - sub_bbox[0]
    sub_x = visual_x + (visual_width - sub_width) // 2
    draw.text((sub_x, visual_y + 150), sub_text, font=subtitle_font, fill=COLORS['white'])
    
    # 会社名
    company_text = "サンハルク株式会社"
    company_bbox = draw.textbbox((0, 0), company_text, font=company_font)
    company_width = company_bbox[2] - company_bbox[0]
    company_x = (A4_WIDTH - company_width) // 2
    draw_text_with_shadow(draw, company_text, (company_x, 2800), company_font, COLORS['white'])
    
    # ブランド名
    brand_text = "フラワー薬局・オレンジ薬局"
    brand_bbox = draw.textbbox((0, 0), brand_text, font=subtitle_font)
    brand_width = brand_bbox[2] - brand_bbox[0]
    brand_x = (A4_WIDTH - brand_width) // 2
    draw_text_with_shadow(draw, brand_text, (brand_x, 2900), subtitle_font, COLORS['white'])
    
    return img

def create_greeting_page():
    """1面（ごあいさつ・理念）を作成"""
    img = create_gradient_background(A4_WIDTH, A4_HEIGHT, COLORS['light_pink'], COLORS['white'])
    draw = ImageDraw.Draw(img)
    
    try:
        title_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 70)
        text_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 50)
        keyword_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 40)
    except:
        title_font = ImageFont.load_default()
        text_font = ImageFont.load_default()
        keyword_font = ImageFont.load_default()
    
    # 見出し
    draw.text((200, 100), "ごあいさつ・理念", font=title_font, fill=COLORS['accent_pink'])
    
    # 下線
    draw.line([(200, 180), (1800, 180)], fill=COLORS['primary_pink'], width=8)
    
    # 理念文
    concept_text = "処方だけでなく、患者と信頼関係を築き、健康相談のパートナーに"
    draw.text((200, 250), concept_text, font=title_font, fill=COLORS['accent_pink'])
    
    # 本文
    message_text = """私たちサンハルク株式会社は、練馬区を中心とした地域密着型の薬局として、
患者様一人ひとりに寄り添った在宅医療支援を行っております。
薬剤師としての専門知識を活かし、医療・介護の多職種と連携しながら、
患者様の生活の質向上に貢献してまいります。"""
    
    # テキストを複数行に分割
    lines = message_text.split('\n')
    y_offset = 400
    for line in lines:
        draw.text((200, y_offset), line.strip(), font=text_font, fill=COLORS['gray'])
        y_offset += 80
    
    # キーワード
    keywords = ["安定供給", "24時間対応", "情報連携", "多職種チーム医療"]
    keyword_positions = [
        (200, 800, 400, 100),
        (1000, 800, 400, 100),
        (200, 1000, 400, 100),
        (1000, 1000, 400, 100)
    ]
    
    for i, (x, y, w, h) in enumerate(keyword_positions):
        # 背景
        draw.rectangle([x, y, x + w, y + h], fill=COLORS['primary_pink'])
        # テキスト
        text_bbox = draw.textbbox((0, 0), keywords[i], font=keyword_font)
        text_width = text_bbox[2] - text_bbox[0]
        text_height = text_bbox[3] - text_bbox[1]
        text_x = x + (w - text_width) // 2
        text_y = y + (h - text_height) // 2
        draw.text((text_x, text_y), keywords[i], font=keyword_font, fill=COLORS['white'])
    
    return img

def create_services_page():
    """2面（基本サービス内容）を作成"""
    img = Image.new('RGB', (A4_WIDTH, A4_HEIGHT), COLORS['white'])
    draw = ImageDraw.Draw(img)
    
    try:
        title_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 70)
        service_title_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 50)
        service_text_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 35)
    except:
        title_font = ImageFont.load_default()
        service_title_font = ImageFont.load_default()
        service_text_font = ImageFont.load_default()
    
    # 見出し
    draw.text((200, 100), "基本サービス内容", font=title_font, fill=COLORS['accent_pink'])
    draw.line([(200, 180), (1800, 180)], fill=COLORS['primary_pink'], width=8)
    
    # サービス項目
    services = [
        {
            'title': "💊 服薬説明・指導",
            'description': "お薬の正しい飲み方や注意点を分かりやすく説明。患者様の理解度に合わせた指導を行います。"
        },
        {
            'title': "📦 一包化調剤",
            'description': "朝・昼・夕の時間別に薬を分包。服薬の間違いを防ぎ、飲み忘れを軽減します。"
        },
        {
            'title': "📅 カレンダー・BOXセット",
            'description': "服薬スケジュールを視覚的に管理。薬の整理整頓で安心の服薬環境を提供します。"
        },
        {
            'title': "👨‍⚕️ 医師連携処方提案",
            'description': "医師との密な連携により、患者様に最適な処方提案を行い、治療効果の向上を図ります。"
        }
    ]
    
    service_positions = [
        (200, 250, 800, 300),
        (1000, 250, 800, 300),
        (200, 600, 800, 300),
        (1000, 600, 800, 300)
    ]
    
    for i, (x, y, w, h) in enumerate(service_positions):
        service = services[i]
        
        # 背景
        draw.rectangle([x, y, x + w, y + h], fill=COLORS['light_pink'])
        
        # 左側のアクセント線
        draw.rectangle([x, y, x + 15, y + h], fill=COLORS['accent_pink'])
        
        # タイトル
        draw.text((x + 30, y + 20), service['title'], font=service_title_font, fill=COLORS['accent_pink'])
        
        # 説明文（複数行対応）
        words = service['description'].split('。')
        text_y = y + 80
        for word in words:
            if word.strip():
                draw.text((x + 30, text_y), word.strip() + '。', font=service_text_font, fill=COLORS['gray'])
                text_y += 50
    
    return img

def create_followup_page():
    """3面（フォローアップ体制）を作成"""
    img = create_gradient_background(A4_WIDTH, A4_HEIGHT, COLORS['white'], COLORS['light_pink'])
    draw = ImageDraw.Draw(img)
    
    try:
        title_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 70)
        feature_title_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 40)
        feature_text_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 30)
    except:
        title_font = ImageFont.load_default()
        feature_title_font = ImageFont.load_default()
        feature_text_font = ImageFont.load_default()
    
    # 見出し
    draw.text((200, 100), "フォローアップ体制", font=title_font, fill=COLORS['accent_pink'])
    draw.line([(200, 180), (1800, 180)], fill=COLORS['primary_pink'], width=8)
    
    # 特徴項目
    features = [
        {
            'icon': "🕐",
            'title': "24時間対応",
            'description': "緊急時や急な体調変化にも迅速に対応。安心のサポート体制を整えています。"
        },
        {
            'icon': "🤝",
            'title': "多職種連携",
            'description': "医師・看護師・介護士と連携し、患者様の総合的なケアを実現します。"
        },
        {
            'icon': "🤖",
            'title': "誤薬防止システム",
            'description': "お薬ロボットを活用し、服薬ミスを防ぐ安全な服薬環境を提供します。"
        },
        {
            'icon': "🍎",
            'title': "管理栄養士サポート",
            'description': "栄養指導により、薬の効果を最大限に引き出す生活習慣をサポートします。"
        }
    ]
    
    feature_positions = [
        (200, 250, 800, 250),
        (1000, 250, 800, 250),
        (200, 550, 800, 250),
        (1000, 550, 800, 250)
    ]
    
    for i, (x, y, w, h) in enumerate(feature_positions):
        feature = features[i]
        
        # 背景（白、影付き）
        draw.rectangle([x, y, x + w, y + h], fill=COLORS['white'])
        # 影
        draw.rectangle([x + 5, y + 5, x + w + 5, y + h + 5], fill=(200, 200, 200))
        draw.rectangle([x, y, x + w, y + h], fill=COLORS['white'])
        
        # アイコン（円形背景）
        icon_size = 100
        icon_x = x + (w - icon_size) // 2
        icon_y = y + 30
        
        # 円形背景
        draw.ellipse([icon_x, icon_y, icon_x + icon_size, icon_y + icon_size], fill=COLORS['primary_pink'])
        
        # アイコンテキスト
        icon_bbox = draw.textbbox((0, 0), feature['icon'], font=title_font)
        icon_text_width = icon_bbox[2] - icon_bbox[0]
        icon_text_height = icon_bbox[3] - icon_bbox[1]
        icon_text_x = icon_x + (icon_size - icon_text_width) // 2
        icon_text_y = icon_y + (icon_size - icon_text_height) // 2
        draw.text((icon_text_x, icon_text_y), feature['icon'], font=title_font, fill=COLORS['white'])
        
        # タイトル
        title_bbox = draw.textbbox((0, 0), feature['title'], font=feature_title_font)
        title_width = title_bbox[2] - title_bbox[0]
        title_x = x + (w - title_width) // 2
        draw.text((title_x, icon_y + icon_size + 20), feature['title'], font=feature_title_font, fill=COLORS['accent_pink'])
        
        # 説明文
        desc_lines = feature['description'].split('。')
        desc_y = icon_y + icon_size + 70
        for line in desc_lines:
            if line.strip():
                line_bbox = draw.textbbox((0, 0), line.strip() + '。', font=feature_text_font)
                line_width = line_bbox[2] - line_bbox[0]
                line_x = x + (w - line_width) // 2
                draw.text((line_x, desc_y), line.strip() + '。', font=feature_text_font, fill=COLORS['gray'])
                desc_y += 40
    
    return img

def create_area_page():
    """4面（対応エリア）を作成"""
    img = Image.new('RGB', (A4_WIDTH, A4_HEIGHT), COLORS['white'])
    draw = ImageDraw.Draw(img)
    
    try:
        title_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 70)
        stat_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 100)
        label_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 40)
        text_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 35)
    except:
        title_font = ImageFont.load_default()
        stat_font = ImageFont.load_default()
        label_font = ImageFont.load_default()
        text_font = ImageFont.load_default()
    
    # 見出し
    draw.text((200, 100), "対応エリア", font=title_font, fill=COLORS['accent_pink'])
    draw.line([(200, 180), (1800, 180)], fill=COLORS['primary_pink'], width=8)
    
    # 地図エリア
    map_x = 200
    map_y = 250
    map_width = 1600
    map_height = 400
    
    draw.rectangle([map_x, map_y, map_x + map_width, map_y + map_height], fill=COLORS['light_pink'])
    draw.rectangle([map_x, map_y, map_x + map_width, map_y + map_height], outline=COLORS['primary_pink'], width=3)
    
    # 地図テキスト
    map_text = "🗺️ 練馬区全域 + 周辺市区町村"
    map_bbox = draw.textbbox((0, 0), map_text, font=title_font)
    map_text_width = map_bbox[2] - map_bbox[0]
    map_text_height = map_bbox[3] - map_bbox[1]
    map_text_x = map_x + (map_width - map_text_width) // 2
    map_text_y = map_y + (map_height - map_text_height) // 2
    draw.text((map_text_x, map_text_y), map_text, font=title_font, fill=COLORS['primary_pink'])
    
    # 統計情報
    stats = [
        {'number': '17', 'label': '店舗ネットワーク'},
        {'number': '24', 'label': '時間対応'}
    ]
    
    stat_positions = [
        (200, 750, 800, 200),
        (1000, 750, 800, 200)
    ]
    
    for i, (x, y, w, h) in enumerate(stat_positions):
        stat = stats[i]
        
        # 背景
        draw.rectangle([x, y, x + w, y + h], fill=COLORS['white'])
        # 影
        draw.rectangle([x + 5, y + 5, x + w + 5, y + h + 5], fill=(200, 200, 200))
        draw.rectangle([x, y, x + w, y + h], fill=COLORS['white'])
        
        # 数字
        number_bbox = draw.textbbox((0, 0), stat['number'], font=stat_font)
        number_width = number_bbox[2] - number_bbox[0]
        number_height = number_bbox[3] - number_bbox[1]
        number_x = x + (w - number_width) // 2
        number_y = y + (h - number_height) // 2 - 20
        draw.text((number_x, number_y), stat['number'], font=stat_font, fill=COLORS['accent_pink'])
        
        # ラベル
        label_bbox = draw.textbbox((0, 0), stat['label'], font=label_font)
        label_width = label_bbox[2] - label_bbox[0]
        label_x = x + (w - label_width) // 2
        draw.text((label_x, number_y + number_height + 10), stat['label'], font=label_font, fill=COLORS['gray'])
    
    # エリア詳細
    detail_x = 200
    detail_y = 1050
    detail_width = 1600
    detail_height = 150
    
    draw.rectangle([detail_x, detail_y, detail_x + detail_width, detail_y + detail_height], fill=COLORS['light_pink'])
    
    detail_title = "対応エリア詳細"
    draw.text((detail_x + 30, detail_y + 20), detail_title, font=title_font, fill=COLORS['accent_pink'])
    
    detail_text = "練馬区・中野区・杉並区・西東京市・府中市・小金井市・東久留米市など"
    draw.text((detail_x + 30, detail_y + 80), detail_text, font=text_font, fill=COLORS['gray'])
    
    return img

def create_stores_page():
    """5面（店舗リスト）を作成"""
    img = Image.new('RGB', (A4_WIDTH, A4_HEIGHT), COLORS['white'])
    draw = ImageDraw.Draw(img)
    
    try:
        title_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 70)
        store_title_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 40)
        store_text_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 30)
        qr_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 25)
    except:
        title_font = ImageFont.load_default()
        store_title_font = ImageFont.load_default()
        store_text_font = ImageFont.load_default()
        qr_font = ImageFont.load_default()
    
    # 見出し
    draw.text((200, 100), "店舗リスト（抜粋）", font=title_font, fill=COLORS['accent_pink'])
    draw.line([(200, 180), (1800, 180)], fill=COLORS['primary_pink'], width=8)
    
    # 店舗リスト
    stores = [
        {'name': 'フラワー薬局 練馬店', 'address': '練馬区練馬1-1-1', 'tel': 'TEL: 03-1234-5678'},
        {'name': 'オレンジ薬局 中野店', 'address': '中野区中野2-2-2', 'tel': 'TEL: 03-2345-6789'},
        {'name': 'フラワー薬局 杉並店', 'address': '杉並区杉並3-3-3', 'tel': 'TEL: 03-3456-7890'},
        {'name': 'オレンジ薬局 西東京店', 'address': '西東京市西東京4-4-4', 'tel': 'TEL: 042-4567-8901'},
        {'name': 'フラワー薬局 府中店', 'address': '府中市府中5-5-5', 'tel': 'TEL: 042-5678-9012'},
        {'name': 'オレンジ薬局 小金井店', 'address': '小金井市小金井6-6-6', 'tel': 'TEL: 042-6789-0123'}
    ]
    
    store_positions = [
        (200, 250, 800, 120),
        (1000, 250, 800, 120),
        (200, 400, 800, 120),
        (1000, 400, 800, 120),
        (200, 550, 800, 120),
        (1000, 550, 800, 120)
    ]
    
    for i, (x, y, w, h) in enumerate(store_positions):
        if i < len(stores):
            store = stores[i]
            
            # 背景
            draw.rectangle([x, y, x + w, y + h], fill=COLORS['light_pink'])
            
            # 左側のアクセント線
            draw.rectangle([x, y, x + 12, y + h], fill=COLORS['accent_pink'])
            
            # 店舗名
            draw.text((x + 20, y + 15), store['name'], font=store_title_font, fill=COLORS['accent_pink'])
            
            # 住所
            draw.text((x + 20, y + 60), store['address'], font=store_text_font, fill=COLORS['gray'])
            
            # 電話番号
            draw.text((x + 20, y + 90), store['tel'], font=store_text_font, fill=COLORS['gray'])
    
    # QRコードエリア
    qr_x = 200
    qr_y = 750
    qr_width = 1600
    qr_height = 200
    
    draw.rectangle([qr_x, qr_y, qr_x + qr_width, qr_y + qr_height], fill=COLORS['white'])
    # 影
    draw.rectangle([qr_x + 5, qr_y + 5, qr_x + qr_width + 5, qr_y + qr_height + 5], fill=(200, 200, 200))
    draw.rectangle([qr_x, qr_y, qr_x + qr_width, qr_y + qr_height], fill=COLORS['white'])
    
    # QRコードプレースホルダー
    qr_size = 150
    qr_center_x = qr_x + qr_width // 2
    qr_center_y = qr_y + qr_height // 2
    qr_box_x = qr_center_x - qr_size // 2
    qr_box_y = qr_center_y - qr_size // 2
    
    draw.rectangle([qr_box_x, qr_box_y, qr_box_x + qr_size, qr_box_y + qr_size], fill=COLORS['gray'])
    
    # QRコード説明
    qr_text = "QRコードで詳細情報を確認"
    qr_text_bbox = draw.textbbox((0, 0), qr_text, font=qr_font)
    qr_text_width = qr_text_bbox[2] - qr_text_bbox[0]
    qr_text_x = qr_center_x - qr_text_width // 2
    draw.text((qr_text_x, qr_box_y + qr_size + 20), qr_text, font=qr_font, fill=COLORS['gray'])
    
    url_text = "http://sunhulk.co.jp/"
    url_bbox = draw.textbbox((0, 0), url_text, font=qr_font)
    url_width = url_bbox[2] - url_bbox[0]
    url_x = qr_center_x - url_width // 2
    draw.text((url_x, qr_box_y + qr_size + 50), url_text, font=qr_font, fill=(150, 150, 150))
    
    return img

def create_back_cover():
    """裏表紙を作成"""
    img = create_gradient_background(A4_WIDTH, A4_HEIGHT, COLORS['secondary_orange'], COLORS['primary_pink'])
    draw = ImageDraw.Draw(img)
    
    try:
        title_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 70)
        contact_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 50)
        company_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 60)
        small_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 40)
    except:
        title_font = ImageFont.load_default()
        contact_font = ImageFont.load_default()
        company_font = ImageFont.load_default()
        small_font = ImageFont.load_default()
    
    # 連絡先エリア
    contact_x = 200
    contact_y = 300
    contact_width = 1600
    contact_height = 600
    
    # 半透明背景
    contact_bg = Image.new('RGBA', (contact_width, contact_height), (*COLORS['light_pink'], 200))
    img.paste(contact_bg, (contact_x, contact_y), contact_bg)
    
    # タイトル
    title_text = "お問い合わせ先"
    title_bbox = draw.textbbox((0, 0), title_text, font=title_font)
    title_width = title_bbox[2] - title_bbox[0]
    title_x = contact_x + (contact_width - title_width) // 2
    draw_text_with_shadow(draw, title_text, (title_x, contact_y + 50), title_font, COLORS['white'])
    
    # 連絡先情報
    contacts = [
        "📞 電話",
        "03-1234-5678（代表）",
        "",
        "📧 メール",
        "info@sunhulk.co.jp",
        "",
        "🏢 地域連携室",
        "平日 9:00-18:00",
        "",
        "🌐 Webサイト",
        "http://sunhulk.co.jp/"
    ]
    
    contact_y_offset = contact_y + 150
    for contact in contacts:
        if contact:
            contact_bbox = draw.textbbox((0, 0), contact, font=contact_font)
            contact_width_text = contact_bbox[2] - contact_bbox[0]
            contact_x_text = contact_x + (contact_width - contact_width_text) // 2
            draw_text_with_shadow(draw, contact, (contact_x_text, contact_y_offset), contact_font, COLORS['white'])
        contact_y_offset += 50
    
    # 会社情報
    company_y = 2800
    
    company_text = "サンハルク株式会社"
    company_bbox = draw.textbbox((0, 0), company_text, font=company_font)
    company_width = company_bbox[2] - company_bbox[0]
    company_x = (A4_WIDTH - company_width) // 2
    draw_text_with_shadow(draw, company_text, (company_x, company_y), company_font, COLORS['white'])
    
    brand_text = "フラワー薬局・オレンジ薬局"
    brand_bbox = draw.textbbox((0, 0), brand_text, font=small_font)
    brand_width = brand_bbox[2] - brand_bbox[0]
    brand_x = (A4_WIDTH - brand_width) // 2
    draw_text_with_shadow(draw, brand_text, (brand_x, company_y + 80), small_font, COLORS['white'])
    
    additional_text = "追加パンフレット・チラシ制作予定"
    additional_bbox = draw.textbbox((0, 0), additional_text, font=small_font)
    additional_width = additional_bbox[2] - additional_bbox[0]
    additional_x = (A4_WIDTH - additional_width) // 2
    draw_text_with_shadow(draw, additional_text, (additional_x, company_y + 140), small_font, COLORS['white'])
    
    return img

def main():
    """メイン実行関数"""
    # 出力ディレクトリを作成
    output_dir = "pamphlet_png_files"
    os.makedirs(output_dir, exist_ok=True)
    
    # 各ページを生成
    pages = [
        ("01_表紙.png", create_cover_page),
        ("02_ごあいさつ・理念.png", create_greeting_page),
        ("03_基本サービス内容.png", create_services_page),
        ("04_フォローアップ体制.png", create_followup_page),
        ("05_対応エリア.png", create_area_page),
        ("06_店舗リスト.png", create_stores_page),
        ("07_裏表紙.png", create_back_cover)
    ]
    
    print("薬剤師訪問サービスパンフレットのPNGファイルを生成中...")
    
    for filename, create_func in pages:
        print(f"生成中: {filename}")
        img = create_func()
        output_path = os.path.join(output_dir, filename)
        img.save(output_path, "PNG", dpi=(300, 300))
        print(f"完了: {output_path}")
    
    print(f"\n全てのPNGファイルが {output_dir} フォルダに生成されました！")
    print("各ファイルは300dpiの高解像度で出力されています。")

if __name__ == "__main__":
    main()