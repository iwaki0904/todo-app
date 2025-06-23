const KEY = "my_todo_app";

export const loadTodos = () => {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(KEY);
  return stored ? JSON.parse(stored) : [];
};

export const saveTodos = (todos: any) => {
  localStorage.setItem(KEY, JSON.stringify(todos));
};
