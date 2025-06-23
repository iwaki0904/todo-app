import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          今日は、よろしくお願いいたします
        </h1>
        <p className="text-gray-600 mb-6">
          現在、フロントエンジニアになるために
          <span className="font-semibold text-blue-600">
            {" "}
            React, Next.js, TypeScript{" "}
          </span>
          を勉強中です。
        </p>
        <Link
          href="/todo"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
        >
          Todoアプリへ
        </Link>
      </div>
    </div>
  );
}
