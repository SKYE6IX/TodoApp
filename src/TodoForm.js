import React, { useContext } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useInputState from "./hooks/useInputState";
import { DispatchContext } from "./context/todos.context";

export default function FormDialog(props) {
  const [value, handleChange, reset] = useInputState("");
  const { dispatch } = useContext(DispatchContext);
  const { open, handleClose, setOpen } = props;

  const submitForm = () => {
    if (!value) {
      return alert("Can't add empty todo ");
    }
    dispatch({ type: "ADD", task: value });
    reset();
    setOpen(false);
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Todo</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter Your New Todo</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="New Todo"
            value={value}
            onChange={handleChange}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error" variant="contained">
            Cancel
          </Button>
          <Button onClick={submitForm} color="success" variant="contained">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
