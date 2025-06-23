# Next.js Todoアプリ（TypeScript対応）

自己紹介ページと連動した、簡単なTodo管理アプリです。  
Next.js × TypeScript で構築し、状態管理には useReducer を使用しています。

---

## デモURL

[Todoアプリを開く](https://todo-app-five-navy-42.vercel.app)


---

 使用技術

- Next.js 15.x
- TypeScript
- React Hooks（useReducer, useEffect）
- Tailwind CSS（スタイル調整予定）
- LocalStorage（データ永続化）

---

 主な機能

- Todoの追加・削除
- 完了チェック（line-through表示）
- LocalStorageによる永続保存
- 自己紹介ページとのリンク遷移

---

 セットアップ方法

```bash
git clone https://github.com/iwaki0904/todo-app.git
cd todo-app
npm install
npm run dev

 工夫した点・学び
useReducer で状態管理の流れを明確にした

LocalStorageとの連携で、アプリの再読み込みに強くした

Tailwind CSSを導入し、デザインをコンポーネント単位で整理
