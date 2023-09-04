export const data = [
  {
    task_id: 1,
    title: "Test Task 1",
    description: "This is a new task for the user",
    priority: "Medium",
    start_date: "2023-07-10",
    end_date: "2023-07-10",
    status: "todo",
    assigned_person: 1,
    subtask: [
      {
        id: 1,
        title: "Subtask 1",
        description: "This is subtask of the first task",
      },
    ],
  },
  {
    task_id: 4,
    title: "Test Task 4",
    description: "This is a new task for the user",
    priority: "Low",
    start_date: "2023-07-10",
    end_date: "2023-07-10",
    status: "todo",
    assigned_person: 1,
    subtask: [
      {
        id: 6,
        title: "Subtask 6",
        description: "This is subtask of the first task",
      },
      {
        id: 5,
        title: "Subtask 5",
        description: "This is subtask of the first task",
      },
    ],
  },
  {
    task_id: 2,
    title: "Test Task 2",
    description: "This is a new task for the user",
    priority: "Low",
    start_date: "2023-07-10",
    end_date: "2023-07-10",
    status: "in_progress",
    assigned_person: 2,
    subtask: [
      {
        id: 1,
        title: "Subtask 1",
        description: "This is subtask of the first task",
      },
      {
        id: 2,
        title: "Subtask 2",
        description: "This is subtask of the second task",
      },
    ],
  },
  {
    task_id: 3,
    title: "Test Task 3",
    description: "This is a new task for the user",
    priority: "High",
    start_date: "2023-07-10",
    end_date: "2023-07-10",
    status: "done",
    assigned_person: 3,
    subtask: [
      {
        id: 1,
        title: "Subtask 1",
        description: "This is subtask of the third task",
      },
      {
        id: 2,
        title: "Subtask 2",
        description: "This is subtask of the second task",
      },
    ],
  },
];
