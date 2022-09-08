import React, { useContext, useState } from "react";
import TodoList from "./TodoList";
import NavBar from "./NavBar";
import FormDialog from "./TodoForm";
import { ThemeContext } from "./context/todos.context";
import "./styles/TodoApp.css";

function TodoApp(props) {
  const { isDarkMode } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={`page ${isDarkMode && "darkMode"}`}>
      <NavBar />
      <div className={`TodoApp-main ${isDarkMode && 'main-darkMode'}`}>
        {/* there is a div wrap around this in its component */}
        <TodoList />
        <div className="addNewTodo">
          <FormDialog open={open} handleClose={handleClose} setOpen={setOpen} />
        </div>
        <i class="fa-sharp fa-solid fa-plus" onClick={handleClickOpen}></i>
      </div>
    </div>
  );
}
export default TodoApp;
