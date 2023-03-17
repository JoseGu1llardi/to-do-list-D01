
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { TasksList } from "./components/TasksList";

import styles from './App.module.css';
import "./global.css";

export interface TaskType {
  id: number;
  content: string;
  status: boolean;
}[]

function App() {
  return (
    <>
      <Header />

      <div className={styles.newTaskContainer}>
        <Input />
        <Button />
      </div>

      <div className={styles.tasksContainer}>
        <TasksList />
      </div>
    </>
  )
}

export default App
