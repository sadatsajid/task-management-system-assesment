import { lazy } from "react";
import { Navigate } from "react-router-dom";

const TasksPage = lazy(() => import("../pages/Tasks"));

const router = [
  {
    path: "tasks",
    element: <TasksPage />,
  },
  {
    path: "/",
    element: <Navigate to="tasks" replace />,
  },
];

export default router;
