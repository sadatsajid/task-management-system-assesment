/* eslint-disable no-case-declarations */
const taskReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_TASKS":
      return state;
    // case "INSERT_TASK":
    //   const newTask = action.payload;
    //   const updatedTasksInsert = [...state, newTask];
    //   localStorage.setItem("tasks", JSON.stringify(updatedTasksInsert));
    //   return updatedTasksInsert;
    case "UPDATE_TASK":
      const updatedTask = action.payload;
      const updatedTasksUpdate = state.map((task) =>
        task.task_id === updatedTask.task_id ? updatedTask : task
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTasksUpdate));
      return updatedTasksUpdate;
    default:
      return state;
  }
};
export default taskReducer;
