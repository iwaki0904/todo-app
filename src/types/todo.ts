export type Todo = {
  text: string;
  completed: boolean;
};

export type Action =
  | { type: "ADD"; payload: string }
  | { type: "TOGGLE"; index: number }
  | { type: "DELETE"; index: number }
  | { type: "SET"; payload: Todo[] }; // ローカルストレージからの初期セット用
