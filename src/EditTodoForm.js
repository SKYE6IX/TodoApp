import React, { useContext } from "react";
import useInputState from "./hooks/useInputState";
import TextField from "@mui/material/TextField";
import { DispatchContext } from "./context/todos.context";
import Button from "@mui/material/Button";

function EditTodoForm({ id, task, toggleEditForm }) {
  const { dispatch } = useContext(DispatchContext);
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "EDIT", task: value, id: id });
        reset();
        toggleEditForm();
      }}
      style={{
        marginLeft: "1rem",
        width: "100%",
        display: "flex",
      }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
      <Button
        type="submit"
        sx={{ ml: "5em", fontSize: "0.9em" }}
        color="success"
      >
        Update
      </Button>
    </form>
  );
}
export default EditTodoForm;
