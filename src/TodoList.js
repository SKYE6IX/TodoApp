import React, { useContext } from "react";
import { List, Divider } from "@mui/material";
import Todo from "./Todo";
import { TodosContext} from "./context/todos.context";
import "./styles/TodoList.css";

export default function TodoList(props) {
  const { todos } = useContext(TodosContext);
  if (todos.length)
    return (
      <div className="TodoList">
        <List>
          {todos.map((todo, i) => (
            <React.Fragment key={i}>
              <Todo {...todo} key={todo.id} id={todo.id} />
              {<Divider />}
            </React.Fragment>
          ))}
        </List>
      </div>
    );
  return null;
}
