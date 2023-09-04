import { Alert, Grid } from "@mui/material";
import ToDoListCards from "../../../components/ToDoListCards";
import { data } from "../../../utils/taskResponse";
import { useReducer } from "react";
import taskReducer from "../../../stores/taskStore/taskStore";
import { useEffect } from "react";
// import { DragDropContext } from "react-beautiful-dnd";

const ToDoLists = () => {
  const initialState = JSON.parse(localStorage.getItem("tasks")) || data;
  const [lists, dispatch] = useReducer(taskReducer, initialState);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(lists));
    dispatch({ type: "FETCH_TASKS" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid
      sx={{ px: 4 }}
      container
      direction="row"
      alignItems="stretch"
      spacing={3}
      mt={10}
    >
      <>
        <Grid item xs={4}>
          <Alert variant="filled" severity="error">
            To-Do Lists
          </Alert>
          {lists.map((item) => {
            return (
              item.status === "todo" && (
                <ToDoListCards
                  color="error"
                  title={item.title}
                  description={item.description}
                  status={item.status}
                  assigned_person={item.assigned_person}
                  priority={item.priority}
                  subtasks={item.subtask}
                />
              )
            );
          })}
        </Grid>
        <Grid item xs={4}>
          <Alert variant="filled" severity="warning">
            In Progress
          </Alert>
          {lists.map((item) => {
            return (
              item.status === "in_progress" && (
                <ToDoListCards
                  color="warning"
                  title={item.title}
                  description={item.description}
                  status={item.status}
                  assigned_person={item.assigned_person}
                  priority={item.priority}
                  subtasks={item.subtask}
                />
              )
            );
          })}
        </Grid>
        <Grid item xs={4}>
          <Alert variant="filled" severity="success">
            Done
          </Alert>
          {lists.map((item) => {
            return (
              item.status === "done" && (
                <ToDoListCards
                  color="success"
                  title={item.title}
                  description={item.description}
                  status={item.status}
                  assigned_person={item.assigned_person}
                  priority={item.priority}
                  subtasks={item.subtask}
                />
              )
            );
          })}
        </Grid>
      </>
    </Grid>
  );
};

export default ToDoLists;
