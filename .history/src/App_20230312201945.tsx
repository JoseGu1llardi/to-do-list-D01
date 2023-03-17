import { useEffect, useState } from 'react';

import api from './services/api';

import styles from './App.module.css';

import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { TasksList } from "./components/TasksList";

import "./global.css";

interface Tasks {
  id: number;
  content: string;
  status: boolean;
}

export interface TaskType {
  tasks: Tasks[]
}

function App() {

  const [tasks, setTasks] = useState<TaskType[]>([]);

  useEffect(() => {
    api.get("/tasks")
      .then(({ data }) => setTasks(data))
  }, []);

  return (
    <>
      <Header />

      <div className={styles.newTaskContainer}>
        <Input />
        <Button />
      </div>

      <div className={styles.tasksContainer}>
        <TasksList tasks={tasks} />
      </div>
    </>
  )
}

export default App
