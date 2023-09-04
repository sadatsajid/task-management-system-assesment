import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import Label from "../Labels";
import TaskModal from "../TaskModal";
import { useState } from "react";

const statusMapping = (status) => {
  if (status === "todo") return "To-Do";
  if (status === "in_progress") return "In Progress";
  if (status === "done") return "Done";
};

const ToDoListCards = ({
  title,
  description,
  assigned_person,
  status,
  color,
  priority,
  subtasks,
}) => {
  const [open, setOpen] = useState(false);

  const toggleDialog = () => {
    setOpen(!open);
  };

  const handleUpdate = () => {};

  return (
    <>
      <Card sx={{ cursor: "pointer", mt: 4 }} onClick={toggleDialog}>
        <CardContent>
          <Label color={color}>{statusMapping(status)}</Label>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {description}
          </Typography>
          <Typography sx={{ mb: 1.5 }} variant="subtitle1">
            Priority:{" "}
            <Label
              color={
                priority === "High"
                  ? "error"
                  : priority === "Medium"
                  ? "warning"
                  : "success"
              }
            >
              {priority}
            </Label>
          </Typography>
        </CardContent>
        <CardActions>
          <Box ml={2} display="flex" alignItems="center">
            <Avatar sx={{ height: 20, width: 20, mr: 1 }} />
            <Typography variant="subtitle1">
              Assigned Person: {assigned_person}
            </Typography>
          </Box>
        </CardActions>
      </Card>
      {open && (
        <TaskModal
          open={open}
          title={title}
          description={description}
          priority={priority}
          status={status}
          assigned_person={assigned_person}
          subtasks={subtasks}
          handleClose={toggleDialog}
          handleUpdate={handleUpdate}
        />
      )}
    </>
  );
};

ToDoListCards.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  assigned_person: PropTypes.string,
  subtasks: PropTypes.array,
  status: PropTypes.oneOf(["todo", "in_progress", "done"]),
  priority: PropTypes.oneOf(["High", "Low", "Medium"]),
  color: PropTypes.oneOf(["warning", "error", "success"]),
};

export default ToDoListCards;
