import React from "react";
import TodoApp from "./TodoApp";
import { TodosProvider } from "./context/todos.context";

function App() {
  return (
    <TodosProvider>
      <TodoApp />
    </TodosProvider>
  );
}
export default App;
