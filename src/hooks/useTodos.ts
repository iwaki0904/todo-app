import { useReducer, useEffect } from "react";
import { Todo, Action } from "../types/todo";
import { loadTodos, saveTodos } from "../utils/localStorage";

const reducer = (state: Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case "ADD":
      return [...state, { text: action.payload, completed: false }];
    case "TOGGLE":
      return state.map((todo, i) =>
        i === action.index ? { ...todo, completed: !todo.completed } : todo
      );
    case "DELETE":
      return state.filter((_, i) => i !== action.index);
    case "SET":
      return action.payload;
    default:
      return state;
  }
};

export function useTodos() {
  const [todos, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const initial = loadTodos();
    dispatch({ type: "SET", payload: initial });
  }, []);

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  return [todos, dispatch] as const;
}
