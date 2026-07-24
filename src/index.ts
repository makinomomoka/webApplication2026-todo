import express, { Request, Response } from 'express';
import path from 'path';


const app = express();
const PORT = 3000;


// EJSの設定
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// リクエスト解析ミドルウェアの設定
app.use(express.urlencoded({ extended: true })); // フォーム送信対応
app.use(express.json());                         // JSON送信(fetch)対応


// 動作確認用ルート
app.get('/', (req: Request, res: Response) => {
    res.send('TypeScript TODO App Server is Running');
});


// サーバー起動
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
