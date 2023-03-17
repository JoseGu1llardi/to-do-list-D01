import { useEffect, useState } from 'react';

import api from './services/api';

import styles from './App.module.css';

import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { TasksList } from "./components/TasksList";

import "./global.css";

export interface TaskType {
  id: number;
  content: string;
  status: boolean;
}[]

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  useEffect(() => {
    api.get("/tasks")
      .then(({ data }) => setTasks(data))
  }, []);

  function handleToggleTaskCompletion(id: number) {
    const tasksUpdate = [...tasks];
    const taskIndex = tasks.findIndex(task => task.id === id);
    tasksUpdate[taskIndex].status = !tasksUpdate[taskIndex].status;

    setTasks(tasksUpdate);
  }

  return (
    <>
      <Header />

      <div className={styles.newTaskContainer}>
        <Input />
        <Button />
      </div>

      <div className={styles.tasksContainer}>
        <TasksList tasks={tasks} changeStatus={handleToggleTaskCompletion} />
      </div>
    </>
  )
}

export default App
