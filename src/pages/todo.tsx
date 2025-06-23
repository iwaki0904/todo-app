import { useState } from "react";
import Link from "next/link";
import { useTodos } from "../hooks/useTodos";
import { Todo as TodoType } from "../types/todo";

export default function Todo() {
  const [todos, dispatch] = useTodos();
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input.trim()) return;
    dispatch({ type: "ADD", payload: input });
    setInput("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-md p-6 rounded w-full max-w-md">
        <h1 className="text-xl font-bold mb-4">useReducer Todoアプリ</h1>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="新しいタスク"
            className="flex-1 border border-gray-300 rounded px-2 py-1"
          />
          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
          >
            追加
          </button>
        </div>
        <ul>
          {todos.map((todo: TodoType, i) => (
            <li
              key={i}
              className="flex justify-between items-center mb-2 border-b pb-1"
            >
              <span
                onClick={() => dispatch({ type: "TOGGLE", index: i })}
                className={`cursor-pointer ${
                  todo.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {todo.text}
              </span>
              <button
                onClick={() => dispatch({ type: "DELETE", index: i })}
                className="text-red-500 hover:text-red-700 text-sm"
              >
                削除
              </button>
            </li>
          ))}
        </ul>
        <Link
          href="/"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
        >
          自己紹介ページへ
        </Link>
      </div>
    </div>
  );
}
