/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Subtasks from "./Subtasks";
import taskReducer from "../../stores/taskStore/taskStore";
import { useReducer } from "react";
import { data } from "../../utils/taskResponse";

const TaskModal = ({
  title,
  open,
  description,
  status,
  priority,
  subtasks,
  assigned_person,
  handleClose,
}) => {
  const initialState = JSON.parse(localStorage.getItem("tasks")) || data;
  const [dispatch] = useReducer(taskReducer, initialState);

  const [formValues, setFormValues] = useState({
    title: title,
    description: description,
    status: status,
    priority: priority,
    assigned_person: assigned_person,
  });

  const handleChange = (e) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdate = () => {
    // console.log('formValues');
    dispatch({ type: "UPDATE_TASK", payload: formValues });
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>
        {" "}
        <TextField
          margin="dense"
          id="name"
          name="title"
          type="text"
          fullWidth
          label="Title"
          variant="outlined"
          value={formValues.title}
          onChange={handleChange}
        />
      </DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          id="name"
          name="description"
          type="text"
          fullWidth
          label="Description"
          variant="outlined"
          value={formValues.description}
          onChange={handleChange}
        />
        <FormControl fullWidth sx={{ mt: 3 }}>
          <FormLabel id="demo-radio-buttons-group-label">Priority</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            defaultValue={priority}
            onChange={handleChange}
          >
            <FormControlLabel value="High" control={<Radio />} label="High" />
            <FormControlLabel
              value="Medium"
              control={<Radio />}
              label="Medium"
            />
            <FormControlLabel value="Low" control={<Radio />} label="Low" />
          </RadioGroup>
        </FormControl>
        <FormControl fullWidth sx={{ mt: 3 }}>
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={status}
            label="Status"
            onChange={handleChange}
          >
            <MenuItem value={"done"}>Done</MenuItem>
            <MenuItem value={"in_progress"}>In Progress</MenuItem>
            <MenuItem value={"todo"}>To Do</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ mt: 3 }}>
          <InputLabel id="demo-simple-select-label">Assigned Person</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={assigned_person}
            label="assigned_person"
            onChange={handleChange}
          >
            <MenuItem value={1}>Person 1</MenuItem>
            <MenuItem value={2}>Person 2</MenuItem>
            <MenuItem value={3}>Person 3</MenuItem>
          </Select>
        </FormControl>
        {/* Subtasks */}
        <Typography variant="subtitle2" sx={{ mt: 3 }}>
          SUBTASKS
        </Typography>
        {subtasks?.map((item) => {
          return (
            <>
              <Subtasks
                key={item.id}
                title={item.title}
                description={item.description}
              />
              <Divider />
            </>
          );
        })}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
        <Button variant="contained" onClick={handleUpdate}>
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TaskModal;
