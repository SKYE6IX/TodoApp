// keep tracks of todos
// and all method that are relate to todos
import React, { createContext} from "react";
import todoReducer from "../reducer/todo.reducer";
import { useLocalStorageReducer } from "../reducer/useLocalStorageReducer";
import useToggle from "../hooks/useToggleState";

const defaultTodos = [
  { id: 1, task: "Go shoping", completed: false },
  { id: 2, task: "Go for walk", completed: false },
];

export const TodosContext = createContext();
export const DispatchContext = createContext();
export const ThemeContext = createContext();

export function TodosProvider(props) {
  const [isDarkMode, toggleDarkMode] = useToggle(Boolean(null))
  const [todos, dispatch] = useLocalStorageReducer(
    "todos",
    defaultTodos,
    todoReducer
  );
  return (
    <TodosContext.Provider value={{ todos }}>
      <DispatchContext.Provider value={{ dispatch }}>
        <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
          {props.children}
        </ThemeContext.Provider>
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
