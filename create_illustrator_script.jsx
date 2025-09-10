// Illustrator用スクリプト - 薬剤師訪問サービスパンフレット
// 実行方法: Illustratorで「ファイル」→「スクリプト」→「その他のスクリプト」で実行

// ドキュメント設定
var doc = app.documents.add();
doc.name = "薬剤師訪問サービスパンフレット";

// アートボード設定（A4サイズ）
var artboard = doc.artboards[0];
artboard.artboardRect = [0, 0, 210, 297]; // A4サイズ（mm）

// カラーパレット定義
var colors = {
    primaryPink: [255, 182, 193],      // #FFB6C1
    secondaryOrange: [255, 165, 0],    // #FFA500
    accentPink: [255, 105, 180],       // #FF69B4
    lightPink: [255, 228, 225],        // #FFE4E1
    white: [255, 255, 255],            // #FFFFFF
    gray: [51, 51, 51]                 // #333333
};

// カラーを作成する関数
function createColor(rgb) {
    var color = new RGBColor();
    color.red = rgb[0];
    color.green = rgb[1];
    color.blue = rgb[2];
    return color;
}

// テキストフレームを作成する関数
function createTextFrame(text, x, y, width, height, fontSize, fontName, color) {
    var textFrame = doc.textFrames.add();
    textFrame.contents = text;
    textFrame.position = [x, y];
    textFrame.width = width;
    textFrame.height = height;
    
    var textRange = textFrame.textRange;
    textRange.characterAttributes.size = fontSize;
    textRange.characterAttributes.textFont = textFrames.getByName(fontName);
    textRange.characterAttributes.fillColor = createColor(color);
    
    return textFrame;
}

// 矩形を作成する関数
function createRectangle(x, y, width, height, fillColor, strokeColor) {
    var rect = doc.pathItems.rectangle(y, x, width, height);
    rect.fillColor = createColor(fillColor);
    rect.strokeColor = createColor(strokeColor);
    return rect;
}

// 表紙の作成
function createCover() {
    // 背景グラデーション
    var gradient = doc.gradients.add();
    gradient.name = "CoverGradient";
    gradient.type = GradientType.LINEAR;
    
    var gradientStop1 = gradient.gradientStops.add();
    gradientStop1.rampPoint = 0;
    gradientStop1.color = createColor(colors.primaryPink);
    
    var gradientStop2 = gradient.gradientStops.add();
    gradientStop2.rampPoint = 100;
    gradientStop2.color = createColor(colors.secondaryOrange);
    
    // 背景矩形
    var background = createRectangle(0, 0, 210, 297, colors.white, colors.white);
    background.fillColor = gradient;
    
    // タイトル
    createTextFrame("薬剤師訪問サービスのご案内", 20, 100, 170, 30, 28, "Hiragino Sans W6", colors.white);
    
    // キャッチコピー
    createTextFrame("地域に寄り添う、かかりつけ薬剤師", 20, 140, 170, 20, 18, "Hiragino Sans W4", colors.white);
    
    // ビジュアルエリア
    var visualArea = createRectangle(20, 180, 170, 80, colors.lightPink, colors.white);
    visualArea.opacity = 80;
    
    // 会社名
    createTextFrame("サンハルク株式会社", 20, 250, 170, 20, 18, "Hiragino Sans W6", colors.white);
    createTextFrame("フラワー薬局・オレンジ薬局", 20, 270, 170, 15, 14, "Hiragino Sans W4", colors.white);
}

// 1面（ごあいさつ・理念）の作成
function createGreetingPage() {
    // 背景
    createRectangle(0, 0, 210, 297, colors.lightPink, colors.white);
    
    // 見出し
    createTextFrame("ごあいさつ・理念", 20, 20, 170, 30, 24, "Hiragino Sans W6", colors.accentPink);
    
    // 理念文
    createTextFrame("処方だけでなく、患者と信頼関係を築き、健康相談のパートナーに", 20, 60, 170, 40, 18, "Hiragino Sans W6", colors.accentPink);
    
    // 本文
    var message = "私たちサンハルク株式会社は、練馬区を中心とした地域密着型の薬局として、" +
                  "患者様一人ひとりに寄り添った在宅医療支援を行っております。" +
                  "薬剤師としての専門知識を活かし、医療・介護の多職種と連携しながら、" +
                  "患者様の生活の質向上に貢献してまいります。";
    createTextFrame(message, 20, 110, 170, 80, 16, "Hiragino Sans W4", colors.gray);
    
    // キーワード
    var keywords = ["安定供給", "24時間対応", "情報連携", "多職種チーム医療"];
    var keywordPositions = [
        [20, 200, 80, 30],
        [110, 200, 80, 30],
        [20, 240, 80, 30],
        [110, 240, 80, 30]
    ];
    
    for (var i = 0; i < keywords.length; i++) {
        var pos = keywordPositions[i];
        createRectangle(pos[0], pos[1], pos[2], pos[3], colors.primaryPink, colors.white);
        createTextFrame(keywords[i], pos[0] + 5, pos[1] + 5, pos[2] - 10, pos[3] - 10, 14, "Hiragino Sans W6", colors.white);
    }
}

// 2面（基本サービス内容）の作成
function createServicesPage() {
    // 背景
    createRectangle(0, 0, 210, 297, colors.white, colors.white);
    
    // 見出し
    createTextFrame("基本サービス内容", 20, 20, 170, 30, 24, "Hiragino Sans W6", colors.accentPink);
    
    // サービス項目
    var services = [
        {
            title: "💊 服薬説明・指導",
            description: "お薬の正しい飲み方や注意点を分かりやすく説明。患者様の理解度に合わせた指導を行います。"
        },
        {
            title: "📦 一包化調剤",
            description: "朝・昼・夕の時間別に薬を分包。服薬の間違いを防ぎ、飲み忘れを軽減します。"
        },
        {
            title: "📅 カレンダー・BOXセット",
            description: "服薬スケジュールを視覚的に管理。薬の整理整頓で安心の服薬環境を提供します。"
        },
        {
            title: "👨‍⚕️ 医師連携処方提案",
            description: "医師との密な連携により、患者様に最適な処方提案を行い、治療効果の向上を図ります。"
        }
    ];
    
    var servicePositions = [
        [20, 60, 80, 80],
        [110, 60, 80, 80],
        [20, 150, 80, 80],
        [110, 150, 80, 80]
    ];
    
    for (var i = 0; i < services.length; i++) {
        var pos = servicePositions[i];
        var service = services[i];
        
        // 背景
        createRectangle(pos[0], pos[1], pos[2], pos[3], colors.lightPink, colors.white);
        
        // タイトル
        createTextFrame(service.title, pos[0] + 5, pos[1] + 5, pos[2] - 10, 20, 16, "Hiragino Sans W6", colors.accentPink);
        
        // 説明文
        createTextFrame(service.description, pos[0] + 5, pos[1] + 25, pos[2] - 10, pos[3] - 30, 14, "Hiragino Sans W4", colors.gray);
    }
}

// メイン実行
try {
    createCover();
    createGreetingPage();
    createServicesPage();
    
    // ファイル保存
    var file = new File("~/Desktop/薬剤師訪問サービスパンフレット.ai");
    doc.saveAs(file);
    
    alert("パンフレットの作成が完了しました！");
} catch (error) {
    alert("エラーが発生しました: " + error.message);
}