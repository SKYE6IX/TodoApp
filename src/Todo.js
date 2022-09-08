import React, { useContext, memo } from "react";
import useToggleState from "./hooks/useToggleState";
import EditTodoForm from "./EditTodoForm";
import { DispatchContext } from "./context/todos.context";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";

function Todo(props) {
  const { id, task, completed } = props;
  const { dispatch } = useContext(DispatchContext);
  const [isEditing, toggle] = useToggleState(false);

  return (
      <ListItem style={{ height: "64px" }}>
        {isEditing ? (
          <EditTodoForm id={id} task={task} toggleEditForm={toggle} />
        ) : (
          <>
            <Checkbox
              tabIndex={-1}
              checked={completed}
              onClick={() => dispatch({ type: "TOGGLE", id: id })}
            />
            <ListItemText
              style={{ textDecoration: completed ? "line-through" : "none" }}
            >
              {task}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton
                aria-label="Delete"
                onClick={() => dispatch({ type: "REMOVE", id: id })}
              >
                <DeleteIcon />
              </IconButton>
              <IconButton aria-label="Edit" onClick={toggle}>
                <EditIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </>
        )}
      </ListItem>
  );
}

export default memo(Todo);
